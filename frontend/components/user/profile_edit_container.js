import { connect } from "react-redux";
import ProfileEdit from "./profile_edit";
import { updateUser, fetchUser, updateUserPhoto} from "../../actions/user_actions";
// import { fetchUser, fetchUsers } from "../../actions/user_actions";

import { closeModal, openModal } from "../../actions/modal_actions";
import { withRouter } from "react-router-dom";

const msp = (state, ownProps) => {
  return {
    user: state.entities.users[ownProps.match.params.id],
    // currentUser: state.entities.users[state.session.id]
  };
};

const mdp = (dispatch) => {
  return {
    updateUser: (id) => dispatch(updateUser(id)),
    updateUserPhoto: (id, data) => dispatch(updateUserPhoto(id, data)),
    fetchUser: (id) => dispatch(fetchUser(id)),
    closeModal: () => dispatch(closeModal()),
    openModal: (modal) => dispatch(openModal(modal)),
  };
};

export default withRouter(connect(msp, mdp)(ProfileEdit)
)