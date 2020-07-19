import {connect} from 'react-redux';
import {createVideo} from '../../actions/video_actions'
import VideoUpload from './video_upload'
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
  });


const mapDispatchToProps = dispatch => ({
    createVideo: formData => dispatch(createVideo(formData)),
    // clearSessionErrors: () => dispatch(clearSessionErrors())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(VideoUpload))