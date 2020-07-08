import {RECEIVE_ALL_VIDEOS,RECEIVE_VIDEO, REMOVE_VIDEO} from '../actions/video_actions';
import { merge } from 'lodash';
import { RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_actions';


const videosReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = merge({}, state);

    switch (action.type) {
        case RECEIVE_ALL_VIDEOS:
            return action.videos
        case RECEIVE_VIDEO:
            newState[action.video.id] = action.video
            return newState
        case REMOVE_VIDEO:
            delete newState[action.videoId]
            return newState
        case RECEIVE_LIKE:
            // debugger

            newState[action.video.id] = action.video
            return newState;
        case REMOVE_LIKE:
            // debugger
            newState[action.video.id] = action.video
            return newState
        // case RECEIVE_COMMENT:

        //     // newState[action.comment.id] = action.comment
        //     newState[action.comment.video_id].comment_ids.push(action.comment.id);
        //     return newState
        // case REMOVE_COMMENT:
        //     delete newState[action.comment.id]
        //     return newState
        default:
            return state
    }
}

export default videosReducer;


// const videosReducer = (state = {}, action) => {
//     Object.freeze(state);
//     switch (action.type) {
//         case RECEIVE_ALL_VIDEOS:
//             return Object.assign({}, state, action.videos)
//         case RECEIVE_VIDEO:
//             return Object.assign({}, state, { [action.video.id]: action.video });
//         case REMOVE_VIDEO:
//             let newState = Object.assign({}, state)
//             delete newState[action.videoId]
//             return newState
//         default:
//             return state;
//     }
// }
