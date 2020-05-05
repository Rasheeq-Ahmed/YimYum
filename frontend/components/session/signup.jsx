import React from 'react';
import {Link} from 'react-router-dom';
import LoginNavBar from '../nav_bar/login_nav'
import FooterNav from '../nav_bar/footer_nav';



class Signup extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            username: '',
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this)
    };

    componentDidMount() {
        this.props.clearSessionErrors();
    }

    renderErrors() {
        return(
            <div className="error-messages">
                {this.props.errors.map((error,i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </div>
        );
    }



    handleInput(type) {
        return (e)=>{
        this.setState({[type]: e.target.value});
        };
    }


    handleSubmit(e) {
        e.preventDefault();

        this.props.createNewUser(this.state)
        .then (()=> this.props.history.push('/trending'))
    }

    render(){
        return (
            <div className="signup-all">
            <header className="signup-header">
                <LoginNavBar/>
            </header>
            <div className="signup-body">
                
                <form className="signup-form-box">
                <div className="form-title">Sign up</div>
                <div className="signup-form">

                        <label>
                            <input 
                                className='signup-input'
                                type="text"
                                value={this.state.email}
                                onChange={this.handleInput('email')}
                                placeholder="Email"
                                />
                        </label>
                        <label>
                            <input 
                                className='signup-input'
                                type="text"
                                value={this.state.username}
                                onChange={this.handleInput('username')}
                                placeholder="Username"
                                />
                        </label>
                        <label>
                            <input
                                className='signup-input'
                                type="password"
                                value={this.state.password}
                                onChange={this.handleInput('password')}
                                placeholder="Password"
                                />
                        </label>
                            {this.renderErrors()}
                            <button className="form-btn" onClick={this.handleSubmit}>Create an account</button>
                            <Link to='/login'><button className="form-btn"> Login</button></Link>
                </div>
                    {/* <form className="login-redirect">Have an account or want to use the demo ?<Link className="link" to="/login"> Click here to log in.</Link></form> */}
                </form>
            </div>
            <footer className="footer-container">
                <FooterNav/>
            </footer>


        </div>
        );
    }
};


export default Signup;