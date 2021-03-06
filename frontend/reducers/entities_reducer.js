import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import videosReducer from './videos_reducer';
import likesReducer from './likes_reducer'
import commentsReducer from './comments_reducer';
import uiReducer from './ui_reducer';
// import followsReducer from './follow_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    videos: videosReducer,
    comments: commentsReducer,
    likes: likesReducer,
    // follows: followsReducer,
    ui: uiReducer
});


export default entitiesReducer