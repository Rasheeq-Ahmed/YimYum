import VideoIndexItem from './video_index_item';
import {connect} from 'react-redux';
import { fetchVideo } from '../../../actions/video_actions';
import {openModal} from '../../../actions/modal_actions'

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id],
    videos: state.entities.videos
})


const mapDispatchToProps = dispatch => ({
    fetchVideo: (videoId) => dispatch (fetchVideo(videoId)),
    openModal: modal => dispatch(openModal(modal))
})

export default connect(mapStateToProps,mapDispatchToProps)(VideoIndexItem)