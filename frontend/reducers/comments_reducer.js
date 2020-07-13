import { merge } from "lodash";

import { RECEIVE_ALL_COMMENTS, RECEIVE_COMMENT, REMOVE_COMMENT} from '../actions/comment_actions'



const commentsReducer =  (state = {}, action) => {
     Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_COMMENTS:
            return action.comments;
        case RECEIVE_COMMENT:
            return Object.assign({}, state, { [action.comment.id]: action.comment })
        case REMOVE_COMMENT:
            let nextState = Object.assign({}, state);
            delete nextState[action.commentId]
            nextState = Object.assign({}, state);
            return nextState;
        default:
            return state;
    }
}

export default commentsReducer;