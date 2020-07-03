import VideoIndex from './video_index';
import {connect} from 'react-redux';
import { fetchVideos,fetchVideo } from '../../../actions/video_actions';
// import {fetchUsers} from '../../../actions/'
import { fetchUser, fetchUsers } from "../../../actions/user_actions";

const mapStateToProps = state => ({
    videos: Object.values(state.entities.videos),
    users: Object.values(state.entities.users),

})


const mapDispatchToProps = (dispatch) => ({
  fetchVideos: () => dispatch(fetchVideos()),
  fetchVideo: (videoId) => dispatch(fetchVideo(videoId)),

  // fetchUsers: () => dispatch (fetchUsers())
  fetchUsers: () => dispatch(fetchUsers()),
  fetchUser: (id) => dispatch(fetchUser(id)),
});

export default connect(mapStateToProps,mapDispatchToProps)(VideoIndex)