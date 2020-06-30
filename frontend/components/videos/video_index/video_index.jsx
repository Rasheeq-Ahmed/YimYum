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
        this.props.fetchUsers();
    }

    render () {
        
        // console.log(this.props)
        return (
            <div className='video-all'>
                <div className='video-header'>
                <NavBarContainer/>
                </div>
                <div className='trending-container'> 
                    <div className="trending-left">
                        <div className='trending-title'>
                        <h1>Trending</h1>
                        <p>Watch the latest videos from our community</p>
                        </div>
                        <div className='video-body'> 
                            {this.props.videos.map((video, idx) => (
                                <VideoIndexItem  key={idx} video={video}/>
                            ))}
                        </div>
                    </div>
                    <div className='trending-right'>
                        {/* <div className='suggested-accts'>
                            <div className='sugg-header'>Suggested Accounts</div>
                            <div className='sugg-acc'>

                           </div>
                        </div>
                        <div className='discover'>

                        </div> */}
                    </div>
                </div>
                
                <div className='video-footer'>
                    <FooterNav/>
                </div>

            </div>
        )
    }
}


export default VideoIndex;