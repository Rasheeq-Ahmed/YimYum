import merge from "lodash/merge";

const followsReducer = (state = {}, action) => {
    let oldState = Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_FOLLOWS:
            return action.follows;
        case RECEIVE_FOLLOW:
            return merge({}, oldState, { [action.follow.id]: action.follow });
        case REMOVE_FOLLOW:
            let newState = merge({}, oldState);
            delete newState[action.followId];
            return newState;
        default:
            return oldState;
    }
};

export default followsReducer;