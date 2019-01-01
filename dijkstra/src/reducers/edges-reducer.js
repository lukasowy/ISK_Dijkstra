export default function edgesReducer(state = {}, action) {

    switch (action.type) {
        case "UPDATE_EDGES": {

            const targets = [...state.targets].map(target => {
                // console.log(state.targets[0])
                // console.log(target)
                if (target[0].id !== action.payload.id) {
                    // console.log(target[0].id, " --> ", action.payload.id)
                    return target;
                }
                console.log({
                    ...target,
                    ...action.payload.attrs
                })
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