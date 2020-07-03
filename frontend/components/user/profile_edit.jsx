import React from "react";
import HeaderContainer from "../header/header_container";
import { Redirect } from "react-router-dom";
import UpdateProfilePhotoContainer from "./update_profile_photo_container";
import NavBar from "../nav_bar/nav_bar_container";

class ProfileEdit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.user.name,
      bio: this.props.user.bio,
      profilePhoto: this.props.user.profilePhoto,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.id);
  }

  handleSubmit(e) {
    let currentUser = { id: this.props.user.id };
    currentUser.name = this.state.name;
    currentUser.bio = this.state.bio;
    currentUser.profilePhoto = this.state.profilePhoto;
    e.preventDefault();

    this.props
      .updateUser(currentUser)
      .then(() => this.props.history.push(`/users/${currentUser.id}/`));
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  render() {
    return (
      <div className="profile-edit-all">
        <div className="profile-edit-header">
          <NavBar />
        </div>
        <div className="profile-edit-form" onSubmit={this.handleSubmit}>
          <div className="edit-photo">
            <div>
              <img
                className="edit-profile-photo"
                src={this.props.user.profilePhoto}
              />
            </div>
            <button onClick={() => this.props.openModal("update")} className="">
              Change Profile Photo
            </button>
          </div>
          <div className="edit-content">
            <h3 className="edit-title">Edit Profile</h3>
            <div>
              Name
              <input
                className="edit-name"
                type="text"
                value={this.state.name}
                onChange={this.update("name")}
              />
            </div>
            <div>
              Bio
              <br />
              <textarea
                className="edit-bio"
                value={this.state.bio}
                onChange={this.update("bio")}
              />
            </div>
            <button className="edit-button" onClick={this.handleSubmit}>
              Update
            </button>
          </div>
        </div>

       
      </div>
    );
  }
}

export default ProfileEdit;
