import React from 'react';
import NavBarContainer from '../../nav_bar/nav_bar_container'
import FooterNav from '../../nav_bar/footer_nav'
import VideoIndexItem from './video_index_item_container'
import LikeContainer from '../../likes/like_container'
import { Link, withRouter } from "react-router-dom";



class VideoIndex extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            testvideo: {},
            loggedIn : false
        }
        this.renderVideos = this.renderVideos.bind(this)
        this.profileNav = this.profileNav.bind(this)
        this.scrollToTop = this.scrollToTop.bind(this)
    }

    componentDidMount() {
        this.props.fetchUsers();
        this.props.fetchVideos();
        // this.props.fetchVideo(110);
        // this.setState({testvideo: this.state.entities.videos[0]})

    }


    // componentDidUpdate(prevProps){
    //   if (prevProps.currentUser !== this.props.currenUser){
    //     this.setState({loggedIn: true})
    //   }
    // }


    profileNav(e) {
      e.preventDefault();
      this.props.history.push(`/users/${video.creator_id}`);
    }



    scrollToTop(e){
      window.scrollTo({top: 0, behavior: 'smooth'});
      
    }

    renderVideos() {
      // console.log(this.props)
      // console.log(this.state)

      if (!this.props.videos) {
        this.props.fetchVideos();


      }

      if (!this.props.users) {
        this.props.fetchUsers();
      }

      return (
        <div className="video-body">
          <div className="top-btn">
            <img className="back-top" src={window.backTop} alt="" onClick={e => this.scrollToTop(e)} />

          </div>
          {this.props.videos.reverse().map((video, idx) => (
            <div key={idx} className="index-all">
              <div className="index-header">
                <Link to={`/users/${video.creator_id}`}>
                <div className="index-user-pic">
                    <img src={this.props.users[video.creator_id].profilePhoto}/>
                </div>
                </Link>
                <div className="index-user-details">
                  <div className="index-user-info">
                    <Link to={`/users/${video.creator_id}`}>
                    <h1>{video.creator}</h1>
                    </Link>
                    <Link to={`/users/${video.creator_id}`}>
                      <h2>{this.props.users[video.creator_id].name}</h2>
                    </Link>
                  </div>
                  <button>Follow</button>
                </div>
              </div>
              <div className="index-body">
                <div className="index-caption">{video.caption}</div>
                <div className="index-video">
                  <VideoIndexItem key={idx} video={video} />
                </div>
                <div className="index-actions">
                   <LikeContainer key={idx} video={video} videoId={video.id} likes={this.props.likes} />

                  <div className='comment-body'>
                    <img src={window.commentSymbol} className="like-button-liked" />
                    <h1>0</h1>
                  </div>
                  {/* <img src={window.commentSymbol} alt="comments"/> */}


                  {/* <img src={window.shareSymbol} alt="shares"/> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    }

    render () {

      if (!this.props.videos) {
        this.props.fetchVideos();


      }

      if (!this.props.users) {
        this.props.fetchUsers();
      }
        
        // console.log(this.props)
        return (
          <div className="vIndex-all">
            <div className="vIndex-header">
              {/* <NavBarContainer /> */}
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
                
               {this.renderVideos()}
              </div>

              <div className="vIndex-right">

              </div>
            </div>

            <div className="vIndex-footer">
              {/* <FooterNav /> */}
            </div>
          </div>
        );
    }
}


export default withRouter(VideoIndex);





//  <div className="trending-right">
   {/* <div className='suggested-accts'>
                            <div className='sugg-header'>Suggested Accounts</div>
                            <div className='sugg-acc'>

                           </div>
                        </div>
                        <div className='discover'>

                        </div> */}
 {/* </div>; */}