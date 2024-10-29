//Вершина
export type Node = number;

//Ребро
export interface Edge {
  from: Node;
  to: Node;
}

export class Graph {
  constructor(public nodes: Array<Node>, public edges: Array<Edge>) {}

  static fromPruferCode(code: string): Graph {
    const prufStr = code.split(" ");
    if (prufStr.some((e) => !new RegExp("^\\d+$").test(e))) {
      throw new Error(
        "Код должен состоять только из чисел, записанных через пробел"
      );
    }

    const nodeLength = prufStr.length + 2;
    if (prufStr.some((e) => Number(e) > nodeLength)) {
      throw new Error(
        "Элементы кода не должны превышать количества элементов графа"
      );
    }
    const pruf = prufStr.map((e) => Number(e));

    const nodes = [];
    for (let i = 1; i <= nodeLength; i++) {
      nodes.push(i);
    }
    const nodesCopy = [...nodes];
    const edges: Array<Edge> = [];
    while (pruf.length > 0) {
      const minNode = nodesCopy.find((e) => !pruf.includes(e))!;
      edges.push({
        from: pruf[0],
        to: minNode,
      });
      nodesCopy.splice(nodesCopy.indexOf(minNode), 1);
      pruf.shift();
    }
    edges.push({
      from: nodesCopy[0],
      to: nodesCopy[1],
    });

    return new Graph(nodes, edges);
  }

  public get adjacencyMatrix(): Array<Edge> {
    return [];
  }
}
