import React from 'react';
import {Route} from 'react-router-dom';
import SignupContainer from './session/signup_container';
import Home from './home/home';
import NavBarContainer from './nav_bar/nav_bar_container';
import LoginContainer from './session/login_container';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
    <div>
        <Route exact path="/" component={NavBarContainer} />
        <Route exact path="/" component={Home} />
        <AuthRoute path="/signup" component={SignupContainer} />
        <AuthRoute path="/login" component={LoginContainer} />

    </div>
);

export default App;

