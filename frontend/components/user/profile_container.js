import { connect } from "react-redux";
import { fetchVideos } from "../../../actions/video_actions";
import { fetchUser ,fetchUsers} from '../../actions/user_actions'


const mapStateToProps = (state, ownProps) => {
//   videos: Object.values(state.entities.videos),
//   users: Object.values(state.entities.users),
    const user = state.entities.users[ownProps.match.params.id];
    let videos = [];

    if (user) {
        // posts = user.post_
    }

};

const mapDispatchToProps = (dispatch) => ({
  fetchVideos: () => dispatch(fetchVideos()),
  // fetchUsers: () => dispatch (fetchUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoIndex);
