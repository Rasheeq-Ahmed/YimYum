import React from 'react';
import {Route, Switch} from 'react-router-dom';
import SignupContainer from './session/signup_container';
import Splash from './splash/splash';
import LoginContainer from './session/login_container';
import VideoList from './videos/video_list'

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import VideoUpload from './videos/video_upload';

const App = () => (
    <div>
        <Route exact path="/" component={Splash} />
        <Route path = "/trending" component = {VideoList} />
        <Route path = "/upload" component = {VideoUpload} />

        <AuthRoute path="/signup" component={SignupContainer} />
        <AuthRoute path="/login" component={LoginContainer} />
    </div>
);

export default App;

