import React, { useState, useEffect } from "react";
import { GraphChart } from "./GraphChart";
import { Graph } from "../entities/Graph";

export const GraphPreview = (props: { graph: Graph | undefined }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "34%" }}>
      {props.graph ? <GraphChart graph={props.graph} /> : null}
    </div>
  );
};
