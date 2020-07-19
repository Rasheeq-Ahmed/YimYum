import VideoIndexItem from './video_index_item';
import {connect} from 'react-redux';
import { fetchVideo } from '../../../actions/video_actions';
import {openModal} from '../../../actions/modal_actions'
import {fetchComments} from '../../../actions/comment_actions'
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id],
    videos: state.entities.videos
})


const mapDispatchToProps = dispatch => ({
    fetchVideo: (videoId) => dispatch (fetchVideo(videoId)),
    fetchComments: (videoId) => dispatch (fetchComments(videoId)),
    openModal: modal => dispatch(openModal(modal))
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(VideoIndexItem))