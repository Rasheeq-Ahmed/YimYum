import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';
import {Link} from 'react-router-dom';
import {SocialIcon} from 'react-social-icons';

// export default () => (
//     <div className="header">
//         <div className="hero-video-frame">
//         <video autoPlay muted loop id="myVideo">
//             <source src="https://i.imgur.com/eXuOnWv.mp4" type="video/mp4"/>
//         </video>
//         </div>
//         <h1>Where Yims can Yum.</h1>
//     </div>


class Splash extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (

            <div className="splash-all">
                <header>
            {/* <Link to="/trending">
            <div className="watch-btn">Watch Now</div>
            </Link> */}
            <NavBarContainer/>
                </header>
            <div className='splash-body'>
                <h1 className='splash-slogan'>Make Your Day</h1>
                <p className="splash-subslogan">Real Food. Real Videos</p>
                    <video autoPlay muted loop id="splash-video">
                    <source src="https://i.imgur.com/eXuOnWv.mp4" type="video/mp4"/>
                    </video>
            </div>
            <footer className='footer-container'>
            <div className="prof-links">
                < a href="https://www.linkedin.com/in/rasheeq-ahmed-53b7aa91/">LinkedIn</a>
              {/* <SocialIcon url="https://www.linkedin.com/in/rasheeq-ahmed-53b7aa91/"/> */}
                <a href="https://github.com/Rasheeq-Ahmed/">Github</a>
              {/* <SocialIcon url="https://github.com/Rasheeq-Ahmed/"/> */}
            </div>
            </footer>
        </div>
            )
   





    }

}



export default Splash;

