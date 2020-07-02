import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';
import {Link} from 'react-router-dom';
import FooterNav from '../nav_bar/footer_nav'



class Splash extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
          <div className="splash-all">
            <div className="splash-header">
              {/* <Link to="/trending">
                    <div className="watch-btn">Watch Now</div>
                    </Link> */}
              <NavBarContainer />
            </div>
              <div className="splash-title">
                <h1 className="splash-slogan">Satisfy Your Cravings</h1>
                <p className="splash-subslogan">Real Noms. Real Yums.</p>
              </div>
            <div className="splash-body">
              <div className="splash-videos">
                {/* <div className="splash-vids"> */}
                  <video className="splash-vid" autoPlay muted loop>
                    <source
                      src="https://i.imgur.com/CeLID8W.mp4"
                      type="video/mp4"
                    />
                  </video>
                  <video className="splash-vid" autoPlay muted loop>
                    <source
                      src="https://i.imgur.com/Apgt1hz.mp4"
                      type="video/mp4"
                    />
                  </video>
                  <video className="splash-vid" autoPlay muted loop>
                    <source
                      src="https://i.imgur.com/2N0UPWP.mp4"
                      type="video/mp4"
                    />
                  </video>
                  <video className="splash-vid" autoPlay muted loop>
                    <source
                      src="https://i.imgur.com/a8fhCKJ.mp4"
                      type="video/mp4"
                    />
                  </video>
                  <video className="splash-vid" autoPlay muted loop>
                    <source
                      src="https://i.imgur.com/Q6P8Yf4.mp4"
                      type="video/mp4"
                    />
                  </video>
                
              </div>
            </div>
            <div className="splash-footer">
              <FooterNav />
            </div>
          </div>
        );
   
    }

}



export default Splash;

