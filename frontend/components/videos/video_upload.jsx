import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container'
import FooterNav from '../nav_bar/footer_nav'


class VideoUpload extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            caption: '',
            videoFile: null,
            videoURL: null

        }
    }

    // componentDidMount() {
    //     this.props.fetchVideos();
    // }


    handleInput(type) {
        return (e)=>{
        this.setState({[type]: e.target.value});
        };
    }



    render () {
        
        
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
                            <div className='upload-text'>Select video to upload</div>
                            <div className='upload-subtext'>Or drag and drop a field</div>
                            <ul>
                                <li>MP4 or WebM</li>
                                <li>720x1280 resolution or higher</li>
                                <li>Up to 60 seconds</li>
                            </ul>

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
                                <button className="upload-btn">Cancel</button>
                                <button className="upload-btn">Post</button>

                            </div>
                            


                        </form>

                    </div>
                        {/* {this.props.videos.map((video, idx) => (

                            <VideoIndexItem video={video}/>
                            ))}
                    */}
                </div>






                <div className='video-footer'>
                    <FooterNav/>
                </div>

            </div>
        )
    }
}


export default VideoUpload;