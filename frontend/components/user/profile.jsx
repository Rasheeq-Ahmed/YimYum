import React, { Component } from 'react'

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.props.fetchVideos();

    if (this.props.user === undefined) {
      this.props.fetchUsers();
    }
  }

  renderEdit() {
    if (this.props.user.id === this.props.currentUser.id) {
      return (
        <div className="edit-profile-button">
          {/* <Link to={`/users/${this.props.user.id}/edit`} className="edit-link"> */}
          <button>Edit Profile</button>
          {/* </Link> */}
        </div>
      );
    } else {
      return null;
    }
  }

  renderVideos() {
    if (this.props.videos.length === 0) {
      return (
        <div className="zero-video">
          <img src={window.camera} />
          <p>Upload a Video</p>
          <p> Share with your friends </p>
        </div>
      );
    } else {
      return (
        <div className="profile-grid">
          <div className="profile-items">
            {this.props.videos.reverse().map((video, idx) => (
              <ProfileItem key={idx} video={video} />
            ))}
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="prof-all">
        <div className="prof-header"></div>
        <div className="prof-body">
          <div className="prof-content">
            <div className="prof-info-all">
              <div className="prof-info-user">
                <div className="prof-user-pic">
                  <img
                    className="prof-pic"
                    src="https://tinyurl.com/yckwrcj6"
                    alt=""
                  />
                </div>
                <div className="prof-user-names">
                  <h2>Username</h2>
                </div>
              </div>
              <div className="prof-stats">
                <li>0 Following</li>
                <li>0 Followers</li>
                <li>0 Likes</li>
              </div>
              <div className="prof-bio">Placeholder Bio</div>
            </div>
            <div className="prof-vid-all">
              <div className="prof-vid-header">
                <span>Videos</span>
                <span>Likes</span>
              </div>
              <div className="prof-vid-body"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile
