import React from 'react';
import {Route} from 'react-router-dom';
import SignupContainer from './session/signup_container';
import Home from './home/home';

const App = () => (
    <div>
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={SignupContainer} />
    </div>
);

export default App;

