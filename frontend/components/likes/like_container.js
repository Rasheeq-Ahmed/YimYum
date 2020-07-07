import {removeLike, createLike} from '../../actions/like_actions'
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Like from './like'

const msp = (state, ownProps) => {

    const allLikes = state.entities.videos[ownProps.video.id].like_ids;
    const likes = Object.values(state.entities.likes). filter(like => allLikes.includes(like.id));

    const likeUsers = ownProps.video.like_ids.map(id => {
        return state.entities.likes[id].user_id
    })


    const currentUser = state.entities.users[state.session.id]


    return ({
        likes,
        likeUsers,
        currentUser
    })
}

const mdp = dispatch => ({
    createLike: like = dispatch(createLike(like)),
    removeLike: id => dispatch(removeLike(id))
});

export default withRouter(connect(msp,mdp)(Like))