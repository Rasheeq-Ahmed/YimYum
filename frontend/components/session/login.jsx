import React from 'react';
import LoginNavBar from '../nav_bar/login_nav'
import { login } from '../../util/session_api_util';
import FooterNav from '../nav_bar/footer_nav';
import { NavLink } from "react-router-dom";

class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            username: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this)
        this.demoLogin = this.demoLogin.bind(this)
    };
    
    componentDidMount() {
        this.props.clearSessionErrors();
    }

    handleInput(type) {
        return (e)=>{
        this.setState({[type]: e.target.value});
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state)
        .then (()=> this.props.history.push('/trending'))
    }
    

    demoLogin() {
        const userInput= document.getElementById("userInput");
        const passInput= document.getElementById("passInput");
        const demoUser='YimYumDemoUser';
        const demoPass='yummypass';
        let userIn = 0;
        let passIn = 0;


        const user = {username: "YimYumDemoUser", password: "yummypass"}

        const passFill = () => {
            if (passIn <= demoPass.length) {
                passInput.value = demoPass.substr(0, passIn++);
                setTimeout(() => passFill(), 100);
            }   else { setTimeout(
                () => this.props.login(user),
                    300
                );
            }
        }
    
        const userFill = () => {
            if (userIn <= demoUser.length) {
                userInput.value = demoUser.substr(0, userIn++);
                setTimeout(() => userFill(), 100);
            }else {
                passFill()
            }
    
            
        };
        userFill();
    }


    // handleDemoUser(e) {
    //     e.preventDefault();
    //     const user = {username: 'demo', password: 'demopass'}
    //     this.props.demoLogin(user)
    //     .then (()=> this.props.history.push('/trending'))

    // }


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
                                    id="userInput"
                                    value={this.state.username}
                                    onChange={this.handleInput('username')}
                                    placeholder="Username"
                                    />
                                </label>
                            <label>
                                <input
                                    className='login-input'
                                    id='passInput'
                                    type="password"
                                    value={this.state.password}
                                    onChange={this.handleInput('password')}
                                    placeholder="Password"
                                    />
                            </label>
                                {this.renderErrors()}
                                <button className="form-btn" onClick={this.handleSubmit}>Login</button>
                                <button className="form-btn" onClick={this.demoLogin}>Demo Login</button>
                    </div>
                    <div className="signup-redirect">Need an account<NavLink className="link" to="/signup">? Click here to sign up.</NavLink></div>
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