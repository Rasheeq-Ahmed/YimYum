import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import videosReducer from './videos_reducer';
import uiReducer from './ui_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    videos: videosReducer,
    ui: uiReducer
});


export default entitiesReducer