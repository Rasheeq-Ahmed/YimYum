import {connect} from 'react-redux';
import {createVideo} from '../../actions/video_actions'
import VideoUpload from './video_upload'


const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
  });


const mapDispatchToProps = dispatch => ({
    createVideo: formData => dispatch(createVideo(formData)),
    // clearSessionErrors: () => dispatch(clearSessionErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoUpload);