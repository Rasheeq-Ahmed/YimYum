import React from 'react';
import {Route, Switch} from 'react-router-dom';
import SignupContainer from './session/signup_container';
import Splash from './splash/splash';
import NavBarContainer from './nav_bar/nav_bar_container';
import LoginContainer from './session/login_container';
import VideoList from './videos/video_list'

import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
    <div>
        <Route exact path="/" component={Splash} />
        <Route path = "/trending" component = {VideoList} />
        <AuthRoute path="/signup" component={SignupContainer} />
        <AuthRoute path="/login" component={LoginContainer} />
    </div>
);

export default App;

