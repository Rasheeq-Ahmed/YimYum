import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from '../frontend/store/store';
import Root from './components/root';
// import * as ACTIONS from './actions/session_actions';



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
    // const store = configureStore();
    const root = document.getElementById('root');
//    window.logout = ACTIONS.logout
    ReactDOM.render(<Root store={store}/>, root)
})