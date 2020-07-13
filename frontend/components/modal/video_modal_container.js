import VideoModal from './video_modal';
import {connect} from 'react-redux';
import { fetchVideo, updateVideo, removeVideo } from '../../actions/video_actions';
import { fetchUser, fetchUsers } from '../../actions/user_actions'
import {closeModal,openModal} from '../../actions/modal_actions';
import { fetchComments, fetchComment, createComment, deleteComment } from '../../actions/comment_actions'


const mapStateToProps = (state, ownProps) => {
    // let currentUserLike = state.entities.like === {} ? null : state.entities.like

    return({
        currentVideo: state.entities.videos[state.ui.modal.videoId],
        currentUser: state.entities.users[state.session.id],
        users: state.entities.users,
        formType: 'show',
        comments: Object.values(state.entities.comments)
        // currentUserLike: currentUserLike
    })
    
}


const mapDispatchToProps = dispatch => ({
    fetchUsers: () => dispatch(fetchUsers()),
    fetchUser: id => dispatch(fetchUser(id)),
    fetchComments: (videoId) => dispatch(fetchComments(videoId)),
    fetchComment: comment => dispatch(fetchComment(comment)),
    deleteComment: id => dispatch(deleteComment(id)),
    createComment: comment => dispatch(createComment(comment)),
    fetchVideo: (videoId) => dispatch (fetchVideo(videoId)),
    removeVideo: videoId => dispatch(removeVideo(videoId)),
    updateVideo: (formData, videoId) => dispatch(updateVideo(formData, videoId)),
    closeModal: () => dispatch (closeModal()),
    // openModal: () => dispatch (openModal()),


})

export default connect(mapStateToProps,mapDispatchToProps)(VideoModal)