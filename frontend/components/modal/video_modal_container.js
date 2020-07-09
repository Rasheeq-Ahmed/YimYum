import VideoModal from './video_modal';
import {connect} from 'react-redux';
import { fetchVideo, updateVideo, removeVideo } from '../../actions/video_actions';
import { fetchUser, fetchUsers } from '../../actions/user_actions'
// import { addLike, changeLike, removeLike } from '../../actions/like_actions'
import {closeModal} from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
    // let currentUserLike = state.entities.like === {} ? null : state.entities.like

    return({
        currentVideo: state.entities.videos[state.ui.modal.videoId],
        currentUser: state.entities.users[state.session.id],
        users: state.entities.users,
        formType: 'show',
        // currentUserLike: currentUserLike
    })
    
}


const mapDispatchToProps = dispatch => ({
    fetchUsers: () => dispatch(fetchUsers()),
    fetchUser: id => dispatch(fetchUser(id)),
    // addLike: like => dispatch(addLike(like)),
    // changeLike: like => dispatch(changeLike(like)),
    // removeLike: likeId => dispatch(removeLike(likeId)),
    fetchVideo: (videoId) => dispatch (fetchVideo(videoId)),
    removeVideo: videoId => dispatch(removeVideo(videoId)),
    updateVideo: (formData, videoId) => dispatch(updateVideo(formData, videoId)),
    closeModal: () => dispatch (closeModal())
})

export default connect(mapStateToProps,mapDispatchToProps)(VideoModal)