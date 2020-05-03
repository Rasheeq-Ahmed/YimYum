import React from 'react';

class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            username: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this)
    };
    
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
    





    render(){
        return (
            <div className="auth-form">
                <form className="login-form">
                <label>Username:
                        <input 
                            className='form-input'
                            type="text"
                            value={this.state.username}
                            onChange={this.handleInput('username')}
                            placeholder="Username"
                        />
                        </label>
                    <label>Password:
                        <input
                            className='form-input'
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                            placeholder="Password"
                        />
                    </label>
                    <button className="form-btn" onClick={this.handleSubmit}>Login</button>
                    <button className="form-btn" onClick={this.handleDemoUser}>Demo Login</button>
                </form>
            </div>
        );
    }
};


export default Login;