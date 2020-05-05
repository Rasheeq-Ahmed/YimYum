import React from 'react';
import {Link} from 'react-router-dom';


class NavBar extends React.Component {
    constructor(props){
        super(props);
    }

    // renderUserInfo() {
    //     const {currentUser} = this.props;
    //     return (
    //         <div className="user-info">
    //             <p> Hi {currentUser.username}</p>
    //         </div>
    //     )
    // }

    render() {
        const leftDisplay = (
                <Link to='/'>
            <div className="nav-left">
                <img src={window.logo} className="logo"/>
                <h1 className="yim-yum">YimYum</h1>
            </div>
                </Link>
        );

        const midDisplay = (
            <div className="nav-mid">
            </div>
        );

        const authDisplay = this.props.currentUser ? (
            <div className="user-btn">
                <button onClick={this.props.logout}>Logout</button>
                <button className="upload-btn">Upload</button>
            </div>
        ) : (
        <div className="guest-btn">
            {/* <Link to='/signup'><button className="signup-btn">Sign Up</button></Link> */}
            <Link to='/signup'><button className="login-btn" >Log In</button></Link>
        </div>
        )
   
        const rightDisplay = (
            <div className="nav-right">
                {authDisplay}
            </div>
        )
        
        return (
            <div className="nav-bar">
                <div className="left-nav">
                {leftDisplay}
                </div>
                <div className="mid-nav">
                {midDisplay}
                </div>
                <div className="right-nav">
                {rightDisplay}
                </div>
            </div>
        )
        
    }   
    
}
export default NavBar;