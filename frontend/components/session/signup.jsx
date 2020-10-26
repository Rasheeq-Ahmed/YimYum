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
            <div className="signup-header">
              <div className="nav-left">
                <Link to="/" className="logo-link">
                  <img src={window.logo} className="logo" />
                </Link>
                <Link to="/" className="logo-link">
                  <h1 className="yim-yum">YimYum</h1>
                </Link>
              </div>
            </div>
            <div className="signup-body">
              <form className="signup-form-box">
                <div className="form-title">Sign up</div>
                <div className="signup-form">
                  <label>
                    <input
                      className="signup-input"
                      type="text"
                      value={this.state.email}
                      onChange={this.handleInput("email")}
                      placeholder="Email"
                    />
                  </label>
                  <label>
                    <input
                      className="signup-input"
                      type="text"
                      value={this.state.username}
                      onChange={this.handleInput("username")}
                      placeholder="Username"
                    />
                  </label>
                  <label>
                    <input
                      className="signup-input"
                      type="password"
                      value={this.state.password}
                      onChange={this.handleInput("password")}
                      placeholder="Password"
                    />
                  </label>
                  {this.renderErrors()}
                  <button className="form-btn" onClick={this.handleSubmit}>
                    Create an account
                  </button>
                  <Link to="/login">
                    <button className="form-btn"> Login</button>
                  </Link>
                </div>
                <div className="signup-redirect">
                   <p> Have an account? Click </p>
              <Link className="link" to="/login">
               <p>here</p> 
              </Link>
              <p>to sign up.</p>
                  </div>
              </form>
            </div>
            {/* <footer className="footer-container">
              <FooterNav />
            </footer> */}
          </div>
        );
    }
};


export default Signup;