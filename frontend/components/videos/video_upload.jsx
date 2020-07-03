import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container'
import FooterNav from '../nav_bar/footer_nav'


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
        }
    }

    handleSubmit(e){
        const formData = new FormData();
        formData.append('video[caption]', this.state.caption)
        formData.append('video[creator_id]', this.state.creator_id)
        if (this.state.videoFile) {
            formData.append('video[media]', this.state.videoFile)
        }

        this.props.createVideo(formData)
            .then( () => {
                this.setState({
                    caption: '',
                    videoFile: null,
                })
            }).then(()=> this.props.history.push(`/users/${this.state.creator_id}`))

    }

    


    render () {
        const preview = this.state.videoUrl ? <video controls src={this.state.videoUrl}/> : null;
        
        if (this.state.videoFile===null) {
            return (
                <div className='video-form-all'>
                    <div className='video-form-header'>
                        <NavBarContainer/>
                    </div>
                    <div className='video-form-body'>
                        {/* <div>
                        Upload Video
                        </div>
                        <div>
                            Post a video to your account
                        </div> */}
                        <div className='video-form-left'>
                            <div className="upload-field">
                                <form>
                                    
                                    <img onClick={this.handleFile}src={window.upload}/>
                                <input
                                    type='file'
                                    onChange={this.handleFile}
                                    className="videofile-upload"
                                    />

                                    </form>
                            </div>
                        </div>
                        <div className='video-form-right'>
                            <form className="video-details">
                                <div className="inner-form">
                                <label>Caption
                                    <input 
                                    type='text'
                                    id="video-caption"
                                    value={this.state.caption}
                                    onChange={this.handleInput('caption')} />
                                </label>
                                </div>
                                <div className='upload-buttons'>
                                    {/* <button className="upload-btn1"disabled>Cancel</button> */}
                                    <button onClick={this.handleSubmit} disabled className="upload-btn1">Post</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='video-footer'>
                        <FooterNav/>
                    </div>
    
                </div>
            )
        } else {
            return (
                <div className='video-form-all'>
                <div className='video-form-header'>
                <NavBarContainer/>
                </div>
                <div className='video-form-body'>
                    {/* <div>
                    Upload Video
                    </div>
                    <div>
                        Post a video to your account
                    </div> */}
                    <div className='video-form-left'>
                        <div className="upload-field">
                            <div className='preview'>
                         {preview}
                            </div>
                        </div>
                    </div>
                    <div className='video-form-right'>
                        <form  className="video-details">
                            <div className="inner-form">
                            <label>Caption
                                <input 
                                type='text'
                                id="video-caption"
                                value={this.state.caption}
                                onChange={this.handleInput('caption')} />
                            </label>
                            </div>
                            <div className='upload-buttons'>
                                {/* <button className="upload-btn">Cancel</button> */}
                                <button onClick={this.handleSubmit} className="upload-btn">Post</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='video-footer'>
                    <FooterNav/>
                </div>

            </div>
            )
        }
        
        
       
       
    }
}


export default VideoUpload;