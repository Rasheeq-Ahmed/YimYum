import VideoIndex from './video_index';
import {connect} from 'react-redux';
import { fetchVideos } from '../../../actions/video_actions';
// import {fetchUsers} from '../../../actions/'
const mapStateToProps = state => ({
    videos: Object.values(state.entities.videos),
    users: Object.values(state.entities.users)
})


const mapDispatchToProps = dispatch => ({
    fetchVideos: () => dispatch (fetchVideos()),
    // fetchUsers: () => dispatch (fetchUsers())

})

export default connect(mapStateToProps,mapDispatchToProps)(VideoIndex)