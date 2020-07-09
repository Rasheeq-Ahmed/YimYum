import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createLike, deleteLike } from '../../actions/like_actions';
import Like from './like';

const msp = (state, ownProps) => {
    return ({
        currentUser: state.entities.users[state.session.id],
        video: ownProps.videoId,
    });
};

const mdp = dispatch => ({
    createLike: like => dispatch(createLike(like)),
    deleteLike: like => dispatch(deleteLike(like))
});

export default withRouter(connect(msp, mdp)(Like));