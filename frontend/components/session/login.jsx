import React from 'react';
import LoginNavBar from '../nav_bar/login_nav'
import { login } from '../../util/session_api_util';
import FooterNav from '../nav_bar/footer_nav';

class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            username: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this)
    };
    
    componentDidMount() {
        this.props.clearSessionErrors();
    }

    handleInput(type) {
        return (e)=>{
        this.setState({[type]: e.target.value});
        };
    }

    // handleDemoUser(e) {
    //     e.preventDefault();
    //     const user = {username: 'demo', password: 'demopass'}
    //     this.props.demoLogin(user)
    //     .then (()=> this.props.history.push('/trending'))

    // }


    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state)
        .then (()=> this.props.history.push('/'))
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



    
    render(){
        return (
            <div className="login-all">
                <header className="login-header">
                    <LoginNavBar/>
                </header>
                <div className="login-body">
                    {/* <img src={window.formbackground}/> */}
                    <form className="login-form-box">
                    <div className="form-title">Log in</div>
                    <div className="login-form">

                        <label>
                                <input 
                                    className='login-input'
                                    type="text"
                                    value={this.state.username}
                                    onChange={this.handleInput('username')}
                                    placeholder="Username"
                                    />
                                </label>
                            <label>
                                <input
                                    className='login-input'
                                    type="password"
                                    value={this.state.password}
                                    onChange={this.handleInput('password')}
                                    placeholder="Password"
                                    />
                            </label>
                                {this.renderErrors()}
                                <button className="form-btn" onClick={this.handleSubmit}>Login</button>
                                <button className="form-btn" onClick={this.handleDemoUser}>Demo Login</button>
                    </div>
                    </form>
                </div>
                <footer className="footer-container">
                    <FooterNav/>
                </footer>
            </div>
        );
    }
};


export default Login;