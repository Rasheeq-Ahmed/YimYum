import React from 'react';
import NavBar from '../nav_bar/nav_bar';
import {Link} from 'react-router-dom';

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
            <Link to="/trending">
            <button className="watch-btn">Watch Now</button>
            </Link>
            <div className='splash-body'>
            <h1 className='splash-title'>Welcome to Yim Yum</h1>
            <p className="splash-description">Real Food. Real Videos</p>
            <video autoPlay muted loop id="splash-video">
            <source src="https://i.imgur.com/eXuOnWv.mp4" type="video/mp4"/>
            </video>
            </div>
            <div className='footer'>
                
            </div>
        </div>
            )
    //     <div className="header">
    //     <div className="hero-video-frame">
    //     <video autoPlay muted loop id="myVideo">
    //         <source src="https://i.imgur.com/eXuOnWv.mp4" type="video/mp4"/>
    //     </video>
    //     </div>
    //     <h1>Where Yims can Yum.</h1>
    // </div>






    }

}



export default Splash;

