import React, { Component } from 'react'
import ProfileItem from './profile_item'
import VideoIndexItem from "../videos/video_index/video_index_item_container";
import NavBar from '../nav_bar/nav_bar_container'
import { Link, withRouter } from "react-router-dom";
// import FollowContainer from '../follows/follow_container';


class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
        confirmDelete: false
    };

    this.renderEdit = this.renderEdit.bind(this)
    this.renderVideos = this.renderVideos.bind(this)
    this.renderFollow = this.renderFollow.bind(this)
    this.handleFollow = this.handleFollow.bind(this)
    this.handleUnfollow = this.handleUnfollow.bind(this)
  }

  componentDidMount() {
    this.props.fetchUsers();
    this.props.fetchVideos()
    // .then(
    //   this.props.fetchUsers()
    // )

    // this.props.fetchUser(this.props.match.params.id);

    if (this.props.user === undefined) {
      this.props.fetchUsers();
    }
  }


  // componentDidUpdate(prevProps) {
  //   if (prevProps.user.bio !== this.props.user.bio) {
  //     this.props.fetchUsers()
  //   }
  // }



/////////////////////////// Follows ////////////////////////////////

  handleFollow(e) {
    e.preventDefault();
    this.props.createFollow({ followed_user_id: this.props.user.id })
      // .then(() => this.props.fetchUser(this.props.user.id))
  }

  handleUnfollow(e) {
    e.preventDefault();
    this.props.deleteFollow(this.props.user.id)
    // .then(() => {
    //   this.props.fetchUser(this.props.user.id)
    // })
  } 




renderFollow() {
  console.log(this.props)
  
  // console.log(this.props.currentUser)
  if (this.props.followStatus === true) {
    return(
    <div className="follow-all">
        <button
          className="profile-button"
          onClick={this.handleUnfollow}>
          Unfollow
        </button>
      </div>
      ) 
  } else {
      return (
        <div className="follow-all">
          <button
            className="profile-button"
            onClick={this.handleFollow}>
            Follow
          </button>
        </div>
      )
    } 
}


  /////////////////////////////////////// EDIT PROFILE /////////////////////////////////////////

  renderEdit() {
   
    if (this.props.user.id === this.props.currentUser.id) {
      return (
        <div className="edit-profile-button">
          <Link to={`/users/${this.props.user.id}/edit`} className="edit-link">
            Edit Profile
          </Link>
        </div>
      );
    } else {
      return null;
    }
  }





////////////////////////////////////////   Profile Videos    /////////////////////////////////////////////////////

  renderVideos() {
    
    if (this.props.videos.length === 0) {
      return (
          <Link to='/upload'>
        <div className="zero-video">
          <img src={window.videoIcon} />
          <p>Upload a Video</p>
          {/* <p> Share with your friends </p> */}
        </div>
          </Link>
      );
    } else {
      return (
        <div className="profile-grid">
          <div className="profile-items">
            {this.props.videos.reverse().map((video, idx) => (
              <div className="profile-video">
                <VideoIndexItem key={idx} video={video} />
              </div>
            ))}
          </div>
        </div>
      );
    }
  }

  render() {
    if (!this.props.user) {
      this.props.fetchUsers()
        return null;
    }
    if (!this.props.videos) {
      return null;
    }
    return (
      <div className="prof-all">
      {/* {console.log(this.props)}
        {console.log(this.state)} */}
        <div className="prof-header">
          <NavBar />
        </div>
        <div className="prof-body">
          <div className="prof-content">
            <div className="prof-info-all">
              <div className="prof-info-user">

                {this.renderFollow()}
                {/* <FollowContainer/> */}
                <div className="prof-user-pic">
                  <img
                    className="prof-pic"
                    src={this.props.user.profilePhoto}
                    alt=""
                  />
                </div>
                <div className="prof-user-names">
                  <h2>{this.props.user.username}</h2>
                  <h3>{this.props.user.name}</h3>
                  {this.renderEdit()}
                </div>
              </div>
              <div className="prof-stats">
                <li>{this.props.videos.length} Videos</li>
                <li>0 Following</li>
                <li>0 Followers</li>
              </div>
              <div className="prof-bio">
                {this.props.user.bio}
              </div>
            </div>
            <div className="prof-vid-all">
              <div className="prof-vid-header">
                {/* <span>Videos</span> */}
                {/* <img src={window.videoIcon} /> */}
                {/* <span>Likes</span> */}
              </div>
              <div className="prof-vid-body">{this.renderVideos()}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Profile)
