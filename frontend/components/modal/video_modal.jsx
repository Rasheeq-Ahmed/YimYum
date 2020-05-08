import React from 'react'
import {Link} from 'react-router-dom'

class VideoModal extends React.Component {
    constructor(props) {
        super(props)
    }


render () {
    // const {currentVideo, currentUser} = this.props;
    
    // return (
    //     <div className="show-all">

    //         <div classname="video-player">
    //             <div className='show-video'>
    //                 <video autoPlay loop src={this.props.currentVideo.videoUrl} ></video>
    //             </div>
    //             <div className='show-video-description'>

    //             </div>
    //         </div>

    //     </div>
    //     )

    return (
        <div className="video-modal-all">
            <div className="modal-left">
                <div className="modal-video">
            <video controls loop src={this.props.currentVideo.videoUrl}></video>
                </div>
            </div>
            <div className="modal-right">
                <div className="modal-vidinfo">

                    <div className='modal-user'>
                        <p>@DemoUser</p>
                        
                        
                    </div>
                    <div className="modal-details">
                    </div>
                </div>
                <div className="modal-comments">
                    
                </div>
            </div>      
            
        </div>
    );
}
};


            


export default VideoModal;