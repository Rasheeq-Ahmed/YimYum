import { connect } from "react-redux";
import { createLike, deleteLike } from "../../actions/like_actions";
import Like from "./like";
import { fetchVideo } from "../../actions/video_actions";
import { withRouter } from "react-router-dom";

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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Like))