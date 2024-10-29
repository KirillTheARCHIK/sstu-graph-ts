import { useEffect, useState } from "react";
import "./App.css";
import { Graph } from "./entities/Graph";
import { GraphChart } from "./components/GraphChart";

function App() {
  const [code, setCode] = useState("");
  const [graph, setGraph] = useState<Graph | undefined>(undefined);
  const [errors, setErrors] = useState<{
    [key: string]: string | undefined;
  }>({});

  useEffect(() => {
    try {
      setGraph(Graph.fromPruferCode(code.trim()));
      setErrors({
        ...errors,
        code: undefined,
      });
    } catch (error) {
      setErrors({
        ...errors,
        code: `${error}`,
      });
    }
  }, [code]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "start",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "start",
        }}
      >
        <label>
          Код Прюфера
          <input
            type="text"
            value={code}
            onChange={(e) => {
              setCode(e.target.value);
            }}
          />
        </label>
        {errors["code"]}
        {graph?.nodes.map((node) => {
          const connectedNodes: number[] = [];
          graph.edges.forEach((edge) => {
            if (node == edge.from || node == edge.to) {
              connectedNodes.push(node == edge.from ? edge.to : edge.from);
            }
          });
          return <p>{`${node}: ${connectedNodes.join(" ")}`}</p>;
        })}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {graph ? <GraphChart graph={graph} /> : null}
      </div>
    </div>
  );
}

export default App;
