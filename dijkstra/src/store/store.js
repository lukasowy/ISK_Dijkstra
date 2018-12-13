import { createStore } from "redux";
import Graph from "../dijkstra/Graph";

var graph = new Graph(10);

const initialState = {
  targets: graph.generateGraph()
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_TARGET": {
      const targets = state.targets.map(target => {
        if (target.id !== action.payload.id) {
          return target;
        }
        return {
          ...target,
          ...action.payload.attrs
        };
      });

      return {
        ...state,
        targets
      };
    }
    default:
      return state;
  }
};

// action creators
export const updateTarget = (id, attrs) => ({
  type: "UPDATE_TARGET",
  payload: { id, attrs }
});

console.log(createStore(reducer));
console.log(initialState)

export default () => createStore(reducer);