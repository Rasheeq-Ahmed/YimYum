import React from 'react';
import NavBarContainer from '../../nav_bar/nav_bar_container'
import FooterNav from '../../nav_bar/footer_nav'
import VideoIndexItem from './video_index_item_container'


class VideoIndex extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            testvideo: {}
        }

    }

    componentDidMount() {
        this.props.fetchVideos();
        this.props.fetchUsers();
        // this.props.fetchVideo(110);
        // this.setState({testvideo: this.state.entities.videos[0]})

    }

    render () {
        
        console.log(this.props.videos[0])
        return (
          <div className="vIndex-all">
            <div className="vIndex-header">
              <NavBarContainer />
            </div>
            <div className="vIndex-body">
              <div className="vIndex-left">
                <div className="vIndex-nav">
                    <div className="nav-foryou">
                        <img src={window.house} alt="for-you" />
                        <h1 className="foryou">For You</h1>
                    </div>
                    <div className="nav-follow">
                        <img src={window.following} alt="follow" />
                        <h1 className="following">Following</h1>
                    </div>
                </div>
                <div className="vIndex-follow">
                    <h1 className="top-accounts">Your top accounts</h1>
                    <div className='follow-accts'>
                        <div className="follow-pic">
                            
                        </div>
                        <div className="follow-info">
                            <p>Username</p>
                            <p>Name</p>
                        </div>
                    </div>
                    <div className="see-all">
                        <p>See All</p>
                        <img src={window.dropdownArrow}/>
                    </div>
                </div>

                <div className="vIndex-prof"></div>

                {/* <h1>Trending</h1>
                    <p>Watch the latest videos from our community</p> */}
              </div>

              <div className="vIndex-mid">
                <div className="video-body">
                  {/* {this.props.videos.map((video, idx) => (
                                <VideoIndexItem  key={idx} video={video}/>
                            ))} */}
                </div>
              </div>
            </div>

            <div className="vIndex-footer">
              <FooterNav />
            </div>
          </div>
        );
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