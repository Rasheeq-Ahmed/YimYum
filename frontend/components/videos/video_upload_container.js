import {connect} from 'react-redux';
import {createVideo, fetchVideos} from '../../actions/video_actions'
import VideoUpload from './video_upload'
import { fetchUser ,fetchUsers} from '../../actions/user_actions'

import { withRouter } from 'react-router-dom';


const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
  });


const mapDispatchToProps = dispatch => ({
    fetchVideos: () => dispatch(fetchVideos()),
    fetchUsers: () => dispatch (fetchUsers()),
    fetchUser: id => dispatch(fetchUser(id)),
    createVideo: formData => dispatch(createVideo(formData)),
    // clearSessionErrors: () => dispatch(clearSessionErrors())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(VideoUpload))