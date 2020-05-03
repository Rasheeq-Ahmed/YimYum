import React from 'react';
import {connect} from 'react-redux';
import {login} from '../../actions/session_actions';
import Login from './login'


const mapStateToProps = state => ({
    errors: state.errors.session,
    formType: 'Log in'
  });

const mapDispatchToProps = dispatch => ({
    login: formUser => dispatch(login(formUser)),
    demoLogin: formUser => dispatch(login(formUser)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login)