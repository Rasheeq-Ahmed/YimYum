import { connect } from 'react-redux';
import CommentIndex from './comment_index';
import { fetchComments, createComment, deleteComment } from '../../actions/comment_actions';
import {fetchVideos} from '../../actions/video_actions'
import CommentIndexItem from './comment_index_item';
import { withRouter } from 'react-router-dom';
// import { openModal} from '../../actions/modal_actions'
const mapStateToProps = state => ({
    // currentUser: state.entities.users[state.session.id],
    // currentVideo: state.entities.videos[state.ui.modal.videoId],
    // users: state.entities.users,



    // comments: Object.values(state.entities.comments)
})

const mapDispatchToProps = dispatch => ({
    fetchVideos: () => dispatch(fetchVideos())
    // fetchComments: videoId => dispatch(fetchComments(videoId)),
    // createComment: comment => dispatch(createComment(comment)),
    // deleteComment: commentId => dispatch(deleteComment(commentId)),
    // openModal: () => dispatch(openModal()),

})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentIndexItem))