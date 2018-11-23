import { createStore } from "redux";

function generateTargets() {
  const NUMBER = 10;
  const targets = [];
  for (var i = 1; i < NUMBER; i++) {
    targets.push({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      isDragging: false
    });
  }
  return targets;
}

const initialState = {
  targets: generateTargets()
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

export default () => createStore(reducer);