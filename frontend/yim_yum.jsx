import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from '../frontend/store/store'



document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    const store = configureStore();
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    ReactDOM.render(<h1>Welcome to YimYum</h1>, root)
})