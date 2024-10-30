import { useEffect, useState } from "react";
import "./App.css";
import { Graph } from "./entities/Graph";
import { Steps } from "antd";
import { GraphSource } from "./components/GraphSource";
import { GraphPreview } from "./components/GraphPreview";

function App() {
  const [graph, setGraph] = useState<Graph | undefined>(undefined);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "stretch",
      }}
    >
      <Steps
        current={3}
        progressDot={(dot) => dot}
        style={{ padding: "0 100px" }}
        items={[
          {
            title: "Источник графа",
          },
          {
            title: "Операция над графом",
          },
          {
            title: "Предпросмотр",
          },
        ]}
      />
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "start" }}
      >
        <GraphSource graph={graph} setGraph={setGraph} />
        <div
          style={{ display: "flex", flexDirection: "column", width: "33%" }}
        ></div>
        <GraphPreview graph={graph} />
      </div>
    </div>
  );
}

export default App;
