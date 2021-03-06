import { connect } from "react-redux";
import { fetchVideos } from "../../actions/video_actions";
import { fetchUser, fetchUsers } from '../../actions/user_actions'
import { createFollow, deleteFollow } from '../../actions/follow_actions'
import Follows from './follows'
import { withRouter } from "react-router-dom";



const mapStateToProps = (state, ownProps) => {
    //   videos: Object.values(state.entities.videos),
    //   users: Object.values(state.entities.users),
    // const user = state.entities.users[ownProps.match.params.id];
    // const currentUser = state.entities.users[state.session.id] || {};
    // let videos = [];
    // let followerIds = null;
    // let followStatus = false;
    // if (user) {
    //     // videos = user.video_ids.map(id => state.entities.videos[id]),
    //         followerIds = this.props.user.followerIds,
    //         followStatus = (followerIds.includes(currentUser.id))
    // } else {
    //     // videos = [null];
    //     followerIds = null;
    //     followStatus = false;
    // }




    return {
        // user,
        // videos,
        currentUser: state.entities.users[state.session.id]
        //     followerIds,
        // followStatus
        // follows: state.entities.follows,

    }

};

const mapDispatchToProps = (dispatch) => ({
    fetchUsers: () => dispatch(fetchUsers()),
    fetchUser: id => dispatch(fetchUser(id)),
    fetchVideos: () => dispatch(fetchVideos()),
    createFollow: follow => dispatch(createFollow(follow)),
    deleteFollow: follow => dispatch(deleteFollow(follow)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Follows))