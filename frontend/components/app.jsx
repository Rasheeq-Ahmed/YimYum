import React from 'react';
import {Route, Switch} from 'react-router-dom';
import SignupContainer from './session/signup_container';
import Splash from './splash/splash';
import NavBarContainer from './nav_bar/nav_bar_container';
import LoginContainer from './session/login_container';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import VideoIndexContainer from './videos/video_index/video_index_container';
import VideoUploadContainer from './videos/video_upload_container';
import Modal from './modal/modal'
import ProfileContainer from './user/profile_container';
import ProfileEditContainer from './user/profile_edit_container';
import Test from './test/test';
// import VideoShowContainer from './videos/video_show/video_show_container'


const App = () => (
  <div>
    <Modal />
    <Switch>
    <Route exact path="/" component={Splash} />
    <AuthRoute path="/signup" component={SignupContainer} />
    <AuthRoute path="/login" component={LoginContainer} />
    <ProtectedRoute  path="/users/:id/edit" component={ProfileEditContainer} />
    <ProtectedRoute path="/users/:id" component={ProfileContainer} />

    <Route path="/test" component={Test} />

    <Route path="/trending" component={VideoIndexContainer} />
    <ProtectedRoute path="/upload" component={VideoUploadContainer} />
    </Switch>
    {/* <Route path="/videos/1" component={VideoShow}/> */}
  </div>
);

export default App;

