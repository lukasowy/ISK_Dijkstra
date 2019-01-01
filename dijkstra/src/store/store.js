import { createStore } from "redux";
import Graph from "../dijkstra/Graph";
import { allReducers } from "../reducers/index-reducers";

var graph = new Graph();

graph.addVertex(0)
graph.addVertex(1)
graph.addVertex(2)
graph.addVertex(3)
graph.addVertex(4)
graph.addVertex(5)
// graph.addVertex(6)
// graph.addVertex(7)

graph.addEdge(0, 2)
graph.addEdge(0, 1)
graph.addEdge(1, 3)
graph.addEdge(1, 2)
graph.addEdge(2, 4)
graph.addEdge(3, 2)
graph.addEdge(4, 5)
// graph.addEdge(5, 6)
// graph.addEdge(6, 4)
// graph.addEdge(6, 1)
// graph.addEdge(6, 2)
// graph.addEdge(7, 1)

// console.log(graph.vertexes[0])

// console.log([...graph.AdjList])
// console.log(graph.AdjList.keys())
// console.log([...graph.AdjList.keys()])
// console.log(Array.from(graph.AdjList.keys()))

// console.log(graph.AdjList.get(graph.vertexes[0]), " vertexes of vertex")
// console.log(graph.AdjList.get(graph.vertexes[0])[0], " vertex")
// console.log(graph.printAdjList())
// console.log(graph.printGraph())
// console.log(initialState.targets)
// initialState.targets.push(vertex)

// console.log(createStore(allReducers), "from store.js");
// console.log(initialState)


export const initialState = {
  targets: graph.AdjList
};

export const initialStateEdges = {
  edges: graph.AdjList
};

export const store = createStore(allReducers, { display: initialStateEdges, edges: initialState });