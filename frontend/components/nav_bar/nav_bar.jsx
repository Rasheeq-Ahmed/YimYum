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
            <div className="nav-left">
                <button className="logo">LOGO</button>
                <button className="yim-yum">YimYum</button>
            </div>
        );

        const midDisplay = (
            <div className="trending-box">
                <h1 className="trending">Trending</h1>
            </div>
        );

        const authDisplay = this.props.currentUser ? (
            <div className="user-btn">
                <button onClick={this.props.logout}>Logout</button>
                <button className="upload-btn">Upload</button>
            </div>
        ) : (
        <div className="guest-btn">
            <Link to='/signup'><button className="signup-btn">Sign Up</button></Link>
            <Link to='/login'><button className="login-btn" >Log In</button></Link>
        </div>
        )
   
        const rightDisplay = (
            <div className="nav-right">
                {authDisplay}
            </div>
        )
        
        return (
            <div className="nav-bar">
            {leftDisplay}
            {midDisplay}
            {rightDisplay}
            </div>
        )
        
    }   
    
}
export default NavBar;