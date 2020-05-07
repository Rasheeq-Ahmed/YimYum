import React from 'react';
import {Route, Switch} from 'react-router-dom';
import SignupContainer from './session/signup_container';
import Splash from './splash/splash';
import NavBarContainer from './nav_bar/nav_bar_container';
import LoginContainer from './session/login_container';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import VideoIndexContainer from './videos/video_index/video_index_container';
import VideoUploadContainer from './videos/video_upload_container';

const App = () => (
    <div>
        <Route exact path="/" component={Splash} />
        <Route path="/trending" component={VideoIndexContainer} />
        <Route path="/upload" component={VideoUploadContainer} />

        <AuthRoute path="/signup" component={SignupContainer} />
        <AuthRoute path="/login" component={LoginContainer} />
    </div>
);

export default App;

