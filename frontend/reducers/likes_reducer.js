// import {RECEIVE_ALL_VIDEOS, RECEIVE_VIDEO} from '../actions/video_actions'
import {RECEIVE_ALL_LIKES, RECEIVE_LIKE, REMOVE_LIKE} from '../actions/like_actions'
import merge from "lodash/merge";

const likesReducer = (state = {}, action) => {
    let oldState = Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_LIKES:
            return action.likes;
        case RECEIVE_LIKE:
            return merge({}, oldState, { [action.like.id]: action.like });
        case REMOVE_LIKE:
            let newState = merge({}, oldState);
            delete newState[action.likeId];
            return newState;
        default:
            return oldState;
    }
};

export default likesReducer;