import React from 'react';
import NavBarContainer from '../../nav_bar/nav_bar_container'
import FooterNav from '../../nav_bar/footer_nav'


class VideoShow extends React.Component {
    constructor(props) {
        super(props)
   
    }

    // componentDidMount() {
    //     this.props.fetchVideo(this.props.match.params.videoId);
    // }



    render () {
        
        
        return (
            <div className='vidshow-all'>
                <div className='video-show-header'>
                <NavBarContainer/>
                </div>

                <div className='vidshow-body'>
                    <div className='vidshow-left'>
                        <div className="vidfield">
                            <video src=''></video>
                        </div>
                    </div>

                    <div className='vidshow-right'>
                        <div className="vidshow-info">User/VidInfo</div>
                        <div className='vidshow-comments'>Comments</div>
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


export default VideoShow