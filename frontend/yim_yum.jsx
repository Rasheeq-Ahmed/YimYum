import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from '../frontend/store/store';
import Root from './components/root';
// import * as ACTIONS from './actions/session_actions';

//Test IMPORTS
import {fetchComments, fetchComment, createComment, deleteComment} from './actions/comment_actions'
import {fetchVideos} from './actions/video_actions'
import { removeVideo } from "./actions/video_actions";


//

document.addEventListener('DOMContentLoaded', () => {
let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  //test
    window.dispatch = store.dispatch
    window.getState = store.getState
    window.fetchVideos = fetchVideos
    window.removeVideo = removeVideo
    window.fetchComments = fetchComments
    window.fetchComment = fetchComment
    window.createComment = createComment
    window.deleteComment = deleteComment
    window.store = store


  //
    // const store = configureStore();
    const root = document.getElementById('root');
//    window.logout = ACTIONS.logout
    ReactDOM.render(<Root store={store}/>, root)

  })