import React from "react";
import { Redirect } from "react-router-dom";
// import UpdateProfilePhotoContainer from "./update_profile_photo_container";
import NavBar from "../nav_bar/nav_bar_container";
import { Link } from "react-router-dom";


class ProfileEdit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.user.name,
      username: this.props.user.username,
      bio: this.props.user.bio,
      // profilePhoto: this.props.user.profilePhoto,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.id);
  }

  handleSubmit(e) {
    e.preventDefault();
    let currentUser = { id: this.props.user.id };
    currentUser.name = this.state.name;
    currentUser.username = this.state.username;
    currentUser.bio = this.state.bio;
    // currentUser.profilePhoto = this.state.profilePhoto;

    this.props.updateUser(currentUser)
      // .then(() => this.props.history.push(`/users/${currentUser.id}/`));
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  render() {

    if (!this.props.user) {
      return null;
    }
    console.log(this.state)
    console.log(this.props)
    return (
      <div className="profile-edit-all">
        <div className="prof-header">
          <NavBar />
        </div>
        <div className="profile-edit-body">

          <div className="profile-edit-form" >
            <div className="edit-photo">
              <div className="edit-profile-photo">
                <img
                  // className="edit-profile-photo"
                  src={window.defaultPic}
                />
              </div>
              <button onClick={() => this.props.openModal("update")} className="">
                Change Profile Photo
              </button>
            </div>
            <div className="edit-content">
              <h3 className="edit-title">Edit Profile</h3>
              <div className="edit-fields">
                Full Name
                <input
                  className="edit-name"
                  type="text"
                  value={this.state.name}
                  onChange={this.update("name")}
                />
              </div>
              <div>
                Username
                <input
                  className="edit-name"
                  type="text"
                  value={this.state.username}
                  onChange={this.update("username")}
                />
              </div>
              <div>
                Bio
                {/* <br /> */}
                <textarea
                  className="edit-bio"
                  value={this.state.bio}
                  onChange={this.update("bio")}
                />
              </div>
              <button className="edit-button" onClick={ (e) => this.handleSubmit(e)}>
                Update
              </button>
            </div>
          </div>

        </div>

      </div>
    );
  }
}

export default ProfileEdit;
