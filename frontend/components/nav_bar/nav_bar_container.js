import React from 'react';
import {connect} from 'react-redux';
import NavBar from './nav_bar';
import { logout } from '../../actions/session_actions'
import { fetchUsers } from '../../actions/user_actions';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    users: state.entities.users
});


const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    fetchUsers: () => dispatch(fetchUsers())
});




export default withRouter(connect(mapStateToProps,mapDispatchToProps)(NavBar))