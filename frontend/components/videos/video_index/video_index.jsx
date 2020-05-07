import React from 'react';
import NavBarContainer from '../../nav_bar/nav_bar_container'
import FooterNav from '../../nav_bar/footer_nav'
import VideoIndexItem from './video_index_item'


class VideoIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchVideos();
    }

    render () {
        
        
        debugger
        return (
            <div className='video-all'>
                <div className='video-header'>
                <NavBarContainer/>
                </div>
                <div className='video-body'> 
                
                        {this.props.videos.map((video, idx) => (

                            <VideoIndexItem video={video}/>
                            ))}
                   
                </div>

                <div className='video-footer'>
                    <FooterNav/>
                </div>

            </div>
        )
    }
}


export default VideoIndex;