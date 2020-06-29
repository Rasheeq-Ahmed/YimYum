import { connect } from "react-redux";
import { fetchVideos } from "../../actions/video_actions";
import { fetchUser ,fetchUsers} from '../../actions/user_actions'
import Profile from './profile'


const mapStateToProps = (state, ownProps) => {
//   videos: Object.values(state.entities.videos),
//   users: Object.values(state.entities.users),
    const user = state.entities.users[ownProps.match.params.id];
    let videos = [];

    if (user) {
        videos = user.vid_ids.map(id => state.entities.videos[id])
    } else {
        videos = [null];
    }

    return ({
       user, 
       videos,
       currentUser: state.entities.users[state.session.id],
    })

};

const mapDispatchToProps = (dispatch) => ({
  fetchVideos: () => dispatch(fetchVideos()),
  fetchUsers: () => dispatch (fetchUsers()),
  fetchUser: id => dispatch(fetchUser(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
