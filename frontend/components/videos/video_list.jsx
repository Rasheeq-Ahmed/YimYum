import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container'
import FooterNav from '../nav_bar/footer_nav'


class VideoList extends React.Component {

    render () {
        
        return (
            <div className='video-all'>
                <div className='video-header'>
                <NavBarContainer/>
                </div>
                <div 
                className='video-body'> 
                VIDEOS GO HERE
                </div>

                <div className='video-footer'>
                    <FooterNav/>
                </div>

            </div>
        )
    }
}


export default VideoList;