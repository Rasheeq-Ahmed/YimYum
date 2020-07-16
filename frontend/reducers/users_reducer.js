import {RECEIVE_CURRENT_USER} from '../actions/session_actions';
import { RECEIVE_USER, RECEIVE_USERS } from "../actions/user_actions";
import { RECEIVE_VIDEO } from "../actions/video_actions";
import { RECEIVE_FOLLOW, REMOVE_FOLLOW } from '../actions/follow_actions';


import { merge } from "lodash";


const usersReducer = ( state = {}, action) => {
    Object.freeze(state);
    let newState = merge({}, state)

    switch (action.type) {
      case RECEIVE_FOLLOW:
        newState[action.follow.followed_user_id].followerIds.push(action.follow.user_id)
        newState[action.follow.user_id].followingIds.push(action.follow.followed_user_id)
        return newState;
      case REMOVE_FOLLOW:
        newState[action.follow.followed_user_id].followerIds = newState[action.follow.followed_user_id].followerIds
          .filter(userId => userId !== action.follow.user_id)
        newState[action.follow.user_id].followingIds = newState[action.follow.user_id].followingIds
          .filter(followedId => followedId !== action.follow.followed_user_id)
        return newState;





      case RECEIVE_CURRENT_USER:
        return Object.assign({}, state, {
          [action.currentUser.id]: action.currentUser,
        });
      case RECEIVE_USER:
        return merge({}, state, { [action.user.id]: action.user });
      case RECEIVE_USERS:
        return action.users;
      case RECEIVE_VIDEO:
        return merge({}, state, { [action.user.id]: action.user });
      default:
        return state;
    }
}


export default usersReducer;