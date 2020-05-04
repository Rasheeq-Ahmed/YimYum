import React from 'react';
import {connect} from 'react-redux';
import {login, clearSessionErrors} from '../../actions/session_actions';
import Login from './login'



const mapStateToProps = state => ({
    errors: state.errors.session,
    formType: 'Log in'
  });

const mapDispatchToProps = dispatch => ({
    login: formUser => dispatch(login(formUser)),
    clearSessionErrors: () => dispatch(clearSessionErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(Login)