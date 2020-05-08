import React from 'react'
import {openModal} from '../../../actions/modal_actions';


const VideoIndexItem = ({video}) => (
   
        
            
            <video className='video' value={video.id} src={video.videoUrl}
            muted
            onMouseOver={e =>e.target.play()}
            onMouseOut={e =>e.target.pause()}
            onClick={()=>dispatch(openModal('show',video.id))}
            
            ></video>






)

export default VideoIndexItem;