import VideoIndex from './video_index';
import {connect} from 'react-redux';
import { fetchVideos,fetchVideo } from '../../../actions/video_actions';
// import {fetchUsers} from '../../../actions/'
import { fetchUser, fetchUsers } from "../../../actions/user_actions";
import { createLike, removeLike } from '../../../actions/like_actions';


const mapStateToProps = (state) => ({
  videos: Object.values(state.entities.videos),
  users: state.entities.users,
  currentUser: state.entities.users[state.session.id],
});


const mapDispatchToProps = (dispatch) => ({
  fetchVideos: () => dispatch(fetchVideos()),
  fetchVideo: (videoId) => dispatch(fetchVideo(videoId)),
  createLike: (like) => dispatch(createLike(like)),
  removeLike: (id) => dispatch(removeLike(id)),

  // fetchUsers: () => dispatch (fetchUsers())
  fetchUsers: () => dispatch(fetchUsers()),
  fetchUser: (id) => dispatch(fetchUser(id)),
});

export default connect(mapStateToProps,mapDispatchToProps)(VideoIndex)