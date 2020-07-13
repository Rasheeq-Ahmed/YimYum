import { connect } from "react-redux";
import { fetchComments, fetchComment, createComment, deleteComment } from '../../actions/comment_actions'
import CommentItem from "./zcomment_item";

const mapStateToProps = (state) => ({
    // videos: Object.values(state.entities.videos),
    users: state.entities.users,
    currentUser: state.entities.users[state.session.id],
    // likes: state.entities.likes,
});

const mapDispatchToProps = dispatch => {
    return {
        fetchComments: () => dispatch(fetchComments()),
        fetchComment: comment => dispatch(fetchComment(comment)),
        // deleteComment: id => dispatch(deleteComment(id)),
        createComment: comment => dispatch(createComment(comment)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CommentItem);