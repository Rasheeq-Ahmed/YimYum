import { merge } from "lodash";

import { RECEIVE_ALL_COMMENTS, RECEIVE_COMMENT, REMOVE_COMMENT} from '../actions/comment_actions'



const commentsReducer =  (state = {}, action) => {
    let oldState = Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_COMMENTS:
            return action.comments;
        case RECEIVE_COMMENT:
            return merge({}, oldState, { [action.comment.id]: action.comment });
        case REMOVE_COMMENT:
            let newState = merge({}, oldState);
            delete newState[action.commentId];
            return newState;
            
        default:
            return oldState;
    }
}

export default commentsReducer;