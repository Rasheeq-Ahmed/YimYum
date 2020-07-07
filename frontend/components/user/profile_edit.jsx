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
      profilePhoto: this.props.user.profilePhoto,
      photoFile: null,
      photoUrl: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.handlePicFile = this.handlePicFile.bind(this);
    this.handlePicSubmit = this.handlePicSubmit.bind(this);
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
    currentUser.profilePhoto = this.state.profilePhoto;

    this.props.updateUser(currentUser)
      .then(() => this.props.history.push(`/users/${currentUser.id}/`));
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }



  handlePicFile(e) {
    const file = e.currentTarget.files[0];
    const reader = new FileReader();
    reader.onloadend = () =>
      this.setState({ photoFile: file, photoUrl: reader.result });

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ photoUrl: "", photoFile: null });
    }
  }

  handlePicSubmit(e) {

    e.preventDefault();
    const formData = new FormData();



    if (this.state.photoFile) {

      formData.append('user[profile_photo]', this.state.photoFile);
    }

    this.props.updateUserPhoto(this.props.user.id, formData)
      .then(() => {
        this.setState({

          photoFile: null,
          photoUrl: null
        });

      })

  }



  renderProfPic(e) {
    const preview = this.state.photoUrl ? <img src={this.state.photoUrl} /> : null;
    if (this.state.photoFile === null) {
      return (
        <div className="edit-profile-photo">
          <img src={this.state.profilePhoto}/>
          <label htmlFor="pic-upload-btn" className="pic-upload-button">
            Change Profile Photo
            <input id="pic-upload-btn" type="file" accept="image/*" onChange={this.handlePicFile} />
          </label>
        </div>
      )
    } else {
      return (
        <div className="edit-profile-photo">
          {preview}
          <label htmlFor="pic-upload-btn" className="pic-upload-button">
            Change Profile Photo
            <input id="pic-upload-btn" type="file" accept="image/*" onChange={this.handlePicFile} />
          </label>
        </div>
      )
    }
  }














  render() {

    if (!this.props.user) {
      return null;
    }
    // console.log(this.state)
    // console.log(this.props)
    return (
      <div className="profile-edit-all">
        <div className="prof-header">
          <NavBar />
        </div>
        <div className="profile-edit-body">

          <div className="profile-edit-form" >
            <div className="edit-photo">
              <div className="edit-profile-photo">
                {/* <img
                  // className="edit-profile-photo"
                  src={window.defaultPic}
                /> */}
                {this.renderProfPic()}
              </div>
              {/* <button onClick={() => this.props.openModal("update")} className="">
                Change Profile Photo
              </button> */}
            </div>
            <div className="edit-content">
              <h3 className="edit-title">Edit Profile</h3>
              <div className="edit-fields">
                <div className="edit-name">
                <h1>Name</h1>
                <input
                  type="text"
                  value={this.state.name}
                  onChange={this.update("name")}
                />
              </div>
                <div className="edit-bio"
>
                Bio
                {/* <br /> */}
                <textarea
                  value={this.state.bio}
                  onChange={this.update("bio")}
                />
              </div>
              </div>
              <button className="edit-button" onClick={(e) => {this.handleSubmit(e); this.handlePicSubmit(e)} }>
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
