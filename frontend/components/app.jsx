import React from 'react';
import {Route} from 'react-router-dom';
import SignupContainer from './session/signup_container';
import Home from './home/home';
import NavBarContainer from './nav_bar/nav_bar_container';

const App = () => (
    <div>
        <Route  path="/" component={NavBarContainer} />
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={SignupContainer} />
    </div>
);

export default App;

