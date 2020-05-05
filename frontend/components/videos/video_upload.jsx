import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container'
import FooterNav from '../nav_bar/footer_nav'


class VideoUpload extends React.Component {

    render () {
        
        return (
            <div className='upload-all'>
                <div className='upload-header'>
                <NavBarContainer/>
                </div>
                <div 
                className='upload-body'> 
                  
                </div>

                <div className='upload-footer'>
                    <FooterNav/>
                </div>

            </div>
        )
    }
}

export default VideoUpload;