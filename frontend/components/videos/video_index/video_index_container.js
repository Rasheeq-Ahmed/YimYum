import VideoIndex from './video_index';
import {connect} from 'react-redux';
import { fetchVideos,fetchVideo } from '../../../actions/video_actions';
// import {fetchUsers} from '../../../actions/'
import { fetchUser, fetchUsers } from "../../../actions/user_actions";
import { addLike, removeLike } from '../../../actions/like_actions';


const mapStateToProps = (state) => ({

  videos: Object.values(state.entities.videos),
  users: state.entities.users || {},
  currentUser: state.entities.users[state.session.id],

})
  // const currentUser = state.entities.users[state.session.id];
  // let creator = state.entities.videos[state.ui.modal.videoId].creator_id;




const mapDispatchToProps = (dispatch) => ({
  fetchVideos: () => dispatch(fetchVideos()),
  fetchVideo: (videoId) => dispatch(fetchVideo(videoId)),
  // addLike: (like) => dispatch(addLike(like)),
  // removeLike: (likeId) => dispatch(removeLike(likeId)),

  // fetchUsers: () => dispatch (fetchUsers())
  fetchUsers: () => dispatch(fetchUsers()),
  fetchUser: (id) => dispatch(fetchUser(id)),
});

export default (connect(mapStateToProps,mapDispatchToProps)(VideoIndex))