import React from 'react';
import {Link} from 'react-router-dom';


class NavBar extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   currentUser: this.props.currentUser,
    // };

    this.logoutUser = this.logoutUser.bind(this);
  }

  // renderUserInfo() {
  //     const {currentUser} = this.props;
  //     return (
  //         <div className="user-info">
  //             <p> Hi {currentUser.username}</p>
  //         </div>
  //     )
  // }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
    // .then();
  }

  authNav() {

    if (this.props.currentUser) {
      return (
        <div className="user-btn">
          <button className="log-btn" onClick={this.logoutUser}>
            Logout
          </button>
          <Link to="/upload">
            <button className="upload-btn">Upload</button>
          </Link>
          <Link to={`/users/${this.props.currentUser.id}`}>
            <button className="upload-btn">Profile</button>
          </Link>
        </div>
      );
    } else {
      return (
        <div className="guest-btn">
          {/* <Link to='/signup'><button className="signup-btn">Sign Up</button></Link> */}
          <Link to="/login">
            <button className="login-btn">Log In</button>
          </Link>
        </div>
      );
    }
  }

  render() {
    const leftDisplay = (
      <Link to="/">
        <div className="nav-left">
          <img src={window.logo} className="logo" />
          <h1 className="yim-yum">YimYum</h1>
        </div>
      </Link>
    );

    const midDisplay = (
      <div className="nav-mid">
        <Link to="/trending">
          <h1 className="watchvids">Watch Trending Videos</h1>
        </Link>
      </div>
    );

    // if (!this.props.currentUser) {
    //   return (
    //     <div className="guest-btn">
    //       {/* <Link to='/signup'><button className="signup-btn">Sign Up</button></Link> */}
    //       <Link to="/login">
    //         <button className="login-btn">Log In</button>
    //       </Link>
    //     </div>
    //   );
    // } else {
    // }

    const rightDisplay = <div className="nav-right">{this.authNav()}</div>;

    return (
        <div className="nav-bar">
        {console.log(this.props)}
        <div className="left-nav">{leftDisplay}</div>
        <div className="mid-nav">{midDisplay}</div>
        <div className="right-nav">{rightDisplay}</div>
      </div>
    );
  }
}
export default NavBar;