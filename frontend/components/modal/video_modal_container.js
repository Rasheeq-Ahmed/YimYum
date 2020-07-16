import VideoModal from './video_modal';
import {connect} from 'react-redux';
import { fetchVideo, updateVideo, removeVideo, fetchVideos } from '../../actions/video_actions';
import { fetchUser, fetchUsers } from '../../actions/user_actions'
import {closeModal,openModal} from '../../actions/modal_actions';
import { fetchComments, fetchComment, createComment, deleteComment } from '../../actions/comment_actions'


const mapStateToProps = (state, ownProps) => {
    const currentUser = state.entities.users[state.session.id];

    // let currentUserLike = state.entities.like === {} ? null : state.entities.like
    let creator = state.entities.videos[state.ui.modal.videoId].creator_id;
    // let followerIds = null;
    let followStatus = false;
    if (creator) {
        followStatus = state.entities.users[creator].followerIds.includes(currentUser.id)
    } else {
        followStatus = false;
    }

    return{
        currentVideo: state.entities.videos[state.ui.modal.videoId],
        currentUser: currentUser,
        users: state.entities.users,
        formType: 'show',
        comments: Object.values(state.entities.comments),
        followStatus: followStatus
        // currentUserLike: currentUserLike
    }
    
}


const mapDispatchToProps = dispatch => ({
    fetchUsers: () => dispatch(fetchUsers()),
    fetchUser: id => dispatch(fetchUser(id)),
    fetchComments: (videoId) => dispatch(fetchComments(videoId)),
    fetchComment: comment => dispatch(fetchComment(comment)),
    deleteComment: id => dispatch(deleteComment(id)),
    createComment: comment => dispatch(createComment(comment)),
    fetchVideo: (videoId) => dispatch (fetchVideo(videoId)),
    fetchVideos: () => dispatch(fetchVideos()),
    removeVideo: videoId => dispatch(removeVideo(videoId)),
    updateVideo: (formData, videoId) => dispatch(updateVideo(formData, videoId)),
    
    closeModal: () => dispatch (closeModal()),
    // openModal: () => dispatch (openModal()),


})

export default connect(mapStateToProps,mapDispatchToProps)(VideoModal)