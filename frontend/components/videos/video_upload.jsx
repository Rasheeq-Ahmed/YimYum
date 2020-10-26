import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container'
import FooterNav from '../nav_bar/footer_nav'
import { Link, withRouter } from "react-router-dom";




class VideoUpload extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            caption: '',
            videoFile: null,
            videoUrl: null,
            creator_id: this.props.currentUser.id,
        }

        this.handleInput = this.handleInput.bind(this)
        this.handleFile = this.handleFile.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleRefresh = this.handleRefresh.bind(this)
    }

    // componentDidMount() {
    //     this.props.fetchVideos();
    // }


    handleInput(type) {
        return (e)=>{
        this.setState({[type]: e.target.value});
        };
    }

    handleFile(e) {
        const file = e.currentTarget.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            this.setState({videoFile: file, videoUrl: reader.result});
        }
        if (file) {
            reader.readAsDataURL(file);
        } else {
          this.setState({ videoUrl: '', videoFile: null})
        }
    }

    handleRefresh(e){
    e.preventDefault();
    this.setState({ mssg: "Refresh" })
  }


    handleSubmit(e){
      e.preventDefault();
        const formData = new FormData();
        formData.append('video[caption]', this.state.caption)
        formData.append('video[creator_id]', this.state.creator_id)
        if (this.state.videoFile) {
            formData.append('video[media]', this.state.videoFile)
        }

        this.props.createVideo(formData)
         this.setState({
                    caption: '',
                    videoFile: null,
                })
          window.alert("Video has been uploaded!")
          this.props.history.push(`/users/${this.props.currentUser.id}`)


          // this.props.history.goBack();
          // this.props.history.push('/trending')

        

    }

    //    this.props.createVideo(formData)
    //         .then( () => {
    //             this.setState({
    //                 caption: '',
    //                 videoFile: null,
    //             })
    //         }).then(()=> this.props.history.push(`/users/${this.currentUser.id}`))

    // }

    


    render () {
      console.log(this.props)
        const preview = this.state.videoUrl ? <video controls src={this.state.videoUrl}/> : null;
        
        if (this.state.videoFile===null) {
            return (
              <div className="upload-all">
                <div className="upload-header">
                  <NavBarContainer />
                </div>

                <div className="upload-body">
                  {/* <div>
                        Upload Video
                        </div>
                        <div>
                            Post a video to your account
                        </div> */}

                  <div className="upload-title">
                    <h1>Upload video</h1>
                    <div className="upload-subtitle">
                      <p>
                        This video will be publish to @
                        {this.props.currentUser.username}
                      </p>
                    </div>
                  </div>

                  <div className="upload-main">
                    <div className="upload-left">
                      <div className="upload-field">
                        {/* <form> */}
                                    <label htmlFor='vid-upload' className='video-label'>
                                    <img src={window.upload}/>
                                        
                                    </label>
                                    <input
                                        id='vid-upload'
                                        type="file"
                                        onChange={this.handleFile}
                                        className="upload-video-input"
                                        accept="video/mp4,video/x-m4v,video/*"
                                    />
                      </div>
                    </div>
                    <div className="upload-right">
                      <form className="upload-form">
                        <div className="upload-caption">
                          <label className='caption-label'>
                            Caption
                            <input
                              type="text"
                              className="caption-input"
                              value={this.state.caption}
                              onChange={this.handleInput("caption")}
                            />
                          </label>
                        </div>
                      </form>
                      <div className="upload-buttons">
                        {/* <button className="upload-btn1"disabled>Cancel</button> */}
                        <button
                          onClick={this.handleSubmit}
                          disabled
                          className="upload-btn"
                        >
                          Post
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="upload-footer">
                  <FooterNav />
                </div>
              </div>
            );
        } else {
            return (
              <div className="upload-all">
                <div className="upload-header">
                  <NavBarContainer />
                </div>

                <div className="upload-body">
                  {/* <div>
                        Upload Video
                        </div>
                        <div>
                            Post a video to your account
                        </div> */}

                  <div className="upload-title">
                    <h1>Upload video</h1>
                    <div className="upload-subtitle">
                      <p>
                        This video will be publish to @
                        {this.props.currentUser.username}
                      </p>
                    </div>
                  </div>

                  <div className="upload-main">
                    <div className="upload-left">
                      <div className="upload-field">
                        {/* <form> */}
                        <div className="video-label">
                        {preview}

                        </div>
                      </div>
                    </div>
                    <div className="upload-right">
                      <form className="upload-form">
                        <div className="upload-caption">
                          <label className="caption-label">
                            Caption
                            <input
                              type="text"
                              className="caption-input"
                              value={this.state.caption}
                              onChange={this.handleInput("caption")}
                            />
                          </label>
                        </div>
                      <div className="upload-buttons">
                        {/* <button className="upload-btn1"disabled>Cancel</button> */}
                        <button
                          onClick={(e) => {this.handleSubmit(e); this.handleRefresh(e)}}
                          className="upload-btn"
                        >
                          Post
                        </button>
                      </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="upload-footer">
                  <FooterNav />
                </div>
              </div>
            );
        }
        
        
       
       
    }
}


export default withRouter(VideoUpload);