import VideoModal from './video_modal';
import {connect} from 'react-redux';
import { fetchVideo } from '../../actions/video_actions';
import {closeModal} from '../../actions/modal_actions';

const mapStateToProps = state => ({
    currentVideo: state.entities.videos[state.ui.modal.videoId],
    formType: 'show'
})


const mapDispatchToProps = dispatch => ({
    fetchVideo: (videoId) => dispatch (fetchVideo(videoId)),
    closeModal: () => dispatch (closeModal())
})

export default connect(mapStateToProps,mapDispatchToProps)(VideoModal)