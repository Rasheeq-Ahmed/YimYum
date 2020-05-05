import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container'
import FooterNav from '../nav_bar/footer_nav'


class VideoUpload extends React.Component {

    render () {
        
        return (
            <div className='video-all'>
                <div className='video-header'>
                <NavBarContainer/>
                </div>
                <div 
                className='video-body'> 
                    <ul className='videos'>
                        <li className='video'>Video1</li>
                        <li className='video'>Video2</li>
                        <li className='video'>Video3</li>
                        <li className='video'>Video4</li>
                        <li className='video'>Video5</li>
                    </ul>
                </div>

                <div className='video-footer'>
                    <FooterNav/>
                </div>

            </div>
        )
    }
}

export default VideoUpload;