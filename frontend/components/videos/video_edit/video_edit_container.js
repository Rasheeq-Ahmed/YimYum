import { connect } from "react-redux";
import { updateVideo, deleteVideo, fetchVideo } from "../../../actions/video_actions";
import VideoEdit from "./video_edit";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state, ownProps) => ({
  video: state.entities.videos[ownProps.match.params.videoId],
  errors: state.errors.video,
  currentUser: state.entities.users[state.session.id],
});

const mapDispatchToProps = (dispatch) => ({
  fetchVideo: (videoId) => dispatch(fetchVideo(videoId)),
  deleteVideo: (videoId) => dispatch(deleteVideo(videoId)),
  updateVideo: (formData, videoId) => dispatch(updateVideo(formData, videoId)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(VideoEdit))
