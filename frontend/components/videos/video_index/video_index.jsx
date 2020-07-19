import React from 'react';
import NavBarContainer from '../../nav_bar/nav_bar_container'
import FooterNav from '../../nav_bar/footer_nav'
import VideoIndexItem from './video_index_item_container'
import LikeContainer from '../../likes/like_container'
import { Link, withRouter } from "react-router-dom";
import FollowContainer from '../../follows/follow_container'



class VideoIndex extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            // testvideo: {},
            // loggedIn : false,
            refresh: false,
            users: this.props.users,
            videos: this.props.videos
        }
        this.renderVideos = this.renderVideos.bind(this)
        this.profileNav = this.profileNav.bind(this)
        this.scrollToTop = this.scrollToTop.bind(this)
        // this.renderFollowedUsers = this.renderFollowedUsers.bind(this)
    }

    componentDidMount() {
        this.props.fetchUsers();

        // const users = this.props.users
        // console.log(this.state)
        // this.setState({users: users})
        this.props.fetchVideos();

        // this.props.fetchVideo(110);
        // this.setState({testvideo: this.state.entities.videos[0]})

    }


    componentDidUpdate(prevProps){
      if (prevProps.currentUser.followingIds.length !== this.props.currentUser.followingIds.length){
        this.props.fetchUsers();
        this.props.fetchVideos();


      }
    }


    profileNav(e) {
      e.preventDefault();
      this.props.history.push(`/users/${video.creator_id}`);
    }



    scrollToTop(e){
      window.scrollTo({top: 0, behavior: 'smooth'});
      
    }



    // renderFollowedUsers() {
    //   console.log(this.props)
    //   // if (!this.props.videos) {
    //   //   this.props.fetchVideos();


    //   // }

    //   if (!this.props.users) {
    //     this.props.fetchUsers();
    //   }
    //   let followed = this.props.currentUser.followingIds
      
    //   return (
    //     <div>
    //       {followed.map((following,idx) => (
    //         <div className='follow-accts'>
    //           <div className="follow-pic">
    //             {/* <img src={this.props.users.following.profilePhoto} alt=""/> */}
    //           </div>
    //           <div className="follow-info">
    //             <p>{this.props.users.following.username}</p>
    //             <p>{this.props.users.following.name}</p>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
      
       

    //   )    
    // }
    
          
  





    renderVideos() {
      // console.log(this.props)
      // console.log(this.state)
      // let followStatus = this.props.creator_id
      

      
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
                </div>
                  {}
                  <FollowContainer user={this.props.users[video.creator_id]} refresh={this.state.refresh} />
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



            let followed = this.props.currentUser.followingIds
            // const test = 1;
            // console.log(followed)
      if (!this.props.users) {
        this.props.fetchUsers();
      }


      // if (!followed) {
      //   return null;
      // }









      

      if (!this.props.videos) {
        this.props.fetchVideos();


      }
      //  console.log(this.props)
      // console.log(this.state)
      
        return (
          <div className="vIndex-all">
            <div className="vIndex-header">
              {}
              <NavBarContainer />
            </div>
            <div className="vIndex-body">
              <div className="vIndex-left">
          {/* {console.log(this.props.users.test.username)} */}
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

                  <div>
                    {followed.map((following,idx) => (
                      <div className='follow-accts'>
                        <div className="follow-pic">
                          {/* <img src={this.props.users.following.profilePhoto} alt=""/> */}
                        </div>
                        <div className="follow-info">
                          {/* <p>{this.props.users[following].username}</p>
                          <p>{this.props.users[following].name}</p> */}
                        </div>
                      </div>
                    ))}
                  </div>





                    {/* {this.renderFollowedUsers()} */}
                    {/* <div className='follow-accts'>
                        <div className="follow-pic">
                            
                        </div>
                        <div className="follow-info">
                            <p>Username</p>
                            <p>Name</p>
                        </div>
                    </div> */}
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


export default withRouter(React.memo(VideoIndex));





{/* //  <div className="trending-right"> */}
   {/* <div className='suggested-accts'>
                            <div className='sugg-header'>Suggested Accounts</div>
                            <div className='sugg-acc'>

                           </div>
                        </div>
                        <div className='discover'>

                        </div> */}
 {/* </div>; */}