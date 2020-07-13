import React, { Component } from 'react'
import ProfileItem from './profile_item'
import VideoIndexItem from "../videos/video_index/video_index_item_container";
import NavBar from '../nav_bar/nav_bar_container'
import { Link, withRouter } from "react-router-dom";


class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
        confirmDelete: false
    };

    this.renderEdit = this.renderEdit.bind(this)
    this.renderVideos = this.renderVideos.bind(this)
  }

  componentDidMount() {
    this.props.fetchVideos();
    // this.props.fetchUser(this.props.match.params.id);

    if (this.props.user === undefined) {
      this.props.fetchUsers();
    }
  }

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
                <li>0 Videos</li>
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
