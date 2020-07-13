import { connect } from 'react-redux';
import Confirmation from './confirmation_modal';
import { closeModal } from '../../actions/modal_actions';
import { deleteComment } from '../../actions/comment_actions';
import { withRouter } from 'react-router';

const msp = (state) => ({
    currentVideo: state.entities.users[state.session.id],
});

const mdp = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    deleteComment: (videoId) => dispatch(deleteComment(videoId))
});

export default withRouter(connect(null, mdp)(Confirmation));