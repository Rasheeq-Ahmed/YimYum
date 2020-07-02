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
            <div className='vIndex-all'>
                <div className='vIndex-header'>
                <NavBarContainer/>
                </div>
                <div className='vIndex-body'> 
                    <div className='vIndex-left'>
                        <div className="vIndex-nav">
                            <h1 className="foryou">For You</h1>
                        </div>
                        <div className="vIndex-follow">

                        </div>

                        <div className="vIndex-prof">

                        </div>

                    {/* <h1>Trending</h1>
                    <p>Watch the latest videos from our community</p> */}
                    </div>

                    <div className="vIndex-mid">
                        <div className='video-body'> 
                            {/* {this.props.videos.map((video, idx) => (
                                <VideoIndexItem  key={idx} video={video}/>
                            ))} */}
                        </div>
                    </div>
                   
                </div>
                
                <div className='vIndex-footer'>
                    <FooterNav/>
                </div>

            </div>
        )
    }
}


export default VideoIndex;





//  <div className="trending-right">
   {/* <div className='suggested-accts'>
                            <div className='sugg-header'>Suggested Accounts</div>
                            <div className='sugg-acc'>

                           </div>
                        </div>
                        <div className='discover'>

                        </div> */}
 {/* </div>; */}