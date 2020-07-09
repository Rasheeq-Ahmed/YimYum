import { connect } from "react-redux";
import { createLike, deleteLike } from "../../actions/like_actions";
import Like from "./like";
import { fetchVideo } from "../../actions/video_actions";

const mapStateToProps = (state, ownProps) => {
    const currentUser = state.entities.users[state.session.id];
    const video = ownProps.video;
    return {
        currentUser,
        video
    };
};

const mapDispatchToProps = dispatch => {
    return {
        createLike: like => dispatch(createLike(like)),
        deleteLike: id => dispatch(deleteLike(id)),
        fetchVideo: id => dispatch(fetchVideo(id))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Like);