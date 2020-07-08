import {RECEIVE_ALL_VIDEOS, RECEIVE_VIDEO} from '../actions/video_actions'
import {RECEIVE_LIKE, DELETE_LIKE} from '../actions/like_actions'
import {merge} from 'lodash';

const likesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case RECEIVE_LIKE:
            return action.like;
        case RECEIVE_VIDEO:
            if (action.payload.like) {
                return action.payload.like;
            } else {
                return {};
            }
        case DELETE_LIKE:
            return {};
        default:
            return oldState;
    }
};


export default likesReducer;