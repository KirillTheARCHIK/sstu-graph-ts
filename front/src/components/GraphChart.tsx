import React, { useState, useEffect } from "react";
import { Graph as GraphEntity } from "../entities/Graph";
import ReactECharts from "echarts-for-react";

export const GraphChart = (props: { graph: GraphEntity }) => {
  return (
    <ReactECharts
      style={{
        width: "700px",
        height: "700px",
      }}
      option={{
        series: [
          {
            type: "graph",
            layout: "force",
            symbolSize: 40,
            // roam: true,
            label: {
              show: true,
              fontWeight: "bold",
            },
            // edgeSymbol: ["circle", "none"],
            // edgeSymbolSize: [4, 10],
            // edgeLabel: {
            //   fontSize: 20
            // },
            width: "100%",
            height: "100%",
            force: {
              // initLayout: 'circular'
              // gravity: 0
              repulsion: 600,
              edgeLength: 0,
            },
            data: props.graph.nodes.map((node) => ({ name: node + "" })),
            links: props.graph.edges.map((edge) => ({
              source: edge.from + "",
              target: edge.to + "",
            })),
            // links: [
            //   {
            //     source: 0,
            //     target: 1,
            //     symbolSize: [5, 20],
            //     label: {
            //       show: true,
            //     },
            //     lineStyle: {
            //       width: 5,
            //       curveness: 0.2,
            //     },
            //   },
            //   {
            //     source: "Node 2",
            //     target: "Node 1",
            //     label: {
            //       show: true,
            //     },
            //     lineStyle: {
            //       curveness: 0.2,
            //     },
            //   },
            // ],
            lineStyle: {
              opacity: 1,
              width: 5,
              curveness: 0,
            },
          },
        ],
      }}
    />
  );
};
