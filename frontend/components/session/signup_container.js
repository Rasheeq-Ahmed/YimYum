import {connect} from 'react-redux';
import {signup} from '../../actions/session_actions'
import Signup from './signup'
import { clearSessionErrors} from '../../actions/session_actions';


const mapStateToProps = state => ({
    errors: state.errors.session,
    formType: 'Sign Up'
  });


const mapDispatchToProps = dispatch => ({
    createNewUser: formUser => dispatch(signup(formUser)),
    clearSessionErrors: () => dispatch(clearSessionErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);