import React from 'react';
import {Link} from 'react-router-dom';


class NavBar extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   currentUser: this.props.currentUser,
    // };

    this.state ={
      refresh: false
    }

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

// componentDidUpdate(){
//   this.setState({refresh: true})
// }




  logoutUser(e) {
    e.preventDefault();
    this.props.logout()
    // .then(() => this.props.history.push("/trending"));
  }



  render() {
    // const leftDisplay = (
    //   <Link to="/">
        
    //   </Link>
    // );

    // const midDisplay = (
    //   <div className="nav-mid">
        
    //   </div>
    // );

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

    // const rightDisplay = <div className="nav-right">{this.authNav()}</div>;

    const authNav = this.props.currentUser ? (
      <div className="user-nav">
        <button className="nav-btn" onClick={this.logoutUser}>
          Logout
        </button>
        <Link className="logo-link" to="/upload">
          <img className="upload" src={window.uploadSymbol} />
        </Link>
        <Link to={`/users/${this.props.currentUser.id}`}>
          <button className="nav-btn">Profile</button>
        </Link>
      </div>
    ) : (
      <div className="guest-btn">
        {/* <Link to='/signup'><button className="signup-btn">Sign Up</button></Link> */}
        <Link to="/login">
          <button className="nav-btn">Log In</button>
        </Link>
      </div>
    );


      console.log(this.props)


    return (
      <div className="nav-all">
      {/* {console.log(this.props.currentUser)} */}
        <div className="nav-left">
            <Link to="/" className="logo-link">
              <img src={window.logo} className="logo" />
            </Link>
             <Link to="/" className="logo-link">
              <h1 className="yim-yum">YimYum</h1>
             </Link>
        </div>

        <div className="nav-mid">
          <Link className='logo-link' to="/trending">
            <h1 className="watchvids">Watch Trending Videos</h1>
          </Link>
        </div>

        <div className="nav-right">
          {authNav}
        </div>
      </div>
    );
  }
}
export default NavBar;