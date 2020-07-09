import {RECEIVE_ALL_VIDEOS,RECEIVE_VIDEO, REMOVE_VIDEO} from '../actions/video_actions';
import { RECEIVE_ALL_LIKES, RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_actions'
import { merge } from "lodash";


const videosReducer = ( state = {}, action) => {
    let newObj = {};
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_ALL_VIDEOS:
            return Object.assign({},state,action.videos)
        case RECEIVE_VIDEO:
            return Object.assign({}, state,{[action.video.id]: action.video});
        case REMOVE_VIDEO:
            let newState = Object.assign({}, state)
            delete newState[action.videoId]
            return newState
        
        
        
        case RECEIVE_LIKE:
            newObj[action.like.video_id] = state[action.like.video_id];
            newObj[action.like.video_id].likers.push(action.like.user_id);
            newState = merge({}, state, newObj);
            return newState;
        case REMOVE_LIKE:
            let temp = state[action.like.video_id];
            let filtered_likers = temp.likers.filter(
                id => id !== action.like.user_id
            );
            temp.likers = filtered_likers;
            newState = merge({}, state, { [action.like.video_id]: temp });
            return newState;
        default:
            return state; 
    }
}


export default videosReducer;