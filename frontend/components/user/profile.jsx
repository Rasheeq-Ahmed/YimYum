import React, { Component } from 'react'

class Profile extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
          <div className="prof-all">
            <div className="prof-header"></div>
            <div className="prof-body">
              <div className="prof-content">
                <div className="prof-info-all">
                  <div className="prof-info-user">
                    <div className="prof-user-pic">
                      <img className="prof-pic" src="https://tinyurl.com/yckwrcj6" alt="" />
                    </div>
                    <div className="prof-user-names">
                      <h2>Username</h2>
                    </div>
                  </div>
                  <div className="prof-stats">
                      <li>0 Following</li>
                      <li>0 Followers</li>
                      <li>0 Likes</li>
                  </div>
                  <div className="prof-bio">Placeholder Bio</div>
                </div>
                <div className="prof-vid-all">
                  <div className="prof-vid-header">
                    <span>Videos</span>
                    <span>Likes</span>
                  </div>
                  <div className="prof-vid-body">

                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default Profile
