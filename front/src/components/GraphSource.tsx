import React, { useState, useEffect } from "react";
import { Graph } from "../entities/Graph";

export const GraphSource = (props: {
  graph: Graph | undefined;
  setGraph: (graph: Graph | undefined) => void;
}) => {
  const [code, setCode] = useState("");
  const [errors, setErrors] = useState<{
    [key: string]: string | undefined;
  }>({});

  useEffect(() => {
    try {
      props.setGraph(Graph.fromPruferCode(code.trim()));
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
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "start",
        width: "33%",
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
      {props.graph?.nodes.map((node) => {
        const connectedNodes: number[] = [];
        props.graph!.edges.forEach((edge) => {
          if (node == edge.from || node == edge.to) {
            connectedNodes.push(node == edge.from ? edge.to : edge.from);
          }
        });
        return <p>{`${node}: ${connectedNodes.join(" ")}`}</p>;
      })}
    </div>
  );
};
