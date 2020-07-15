// import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
// import { createFollow, deleteFollow } from '../../actions/follow_actions';
// import Follows from './follows.jsx';

// const msp = (state, ownProps) => {
//     return ({
//         currentUser: state.entities.users[state.session.id].id,
//     });
// };

// const mdp = dispatch => ({
//     createFollow: follow => dispatch(createFollow(follow)),
//     deleteFollow: followId => dispatch(deleteFollow(followId))
// });

// export default withRouter(connect(msp, mdp)(Follows));