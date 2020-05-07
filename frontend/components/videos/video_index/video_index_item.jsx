import React from 'react'



const VideoIndexItem = ({video}) => (
   
        <div className='video'>
            {/* {props.videos.id}  */}
            <video src={video.videoUrl}
            muted
            onMouseOver={e =>e.target.play()}
            onMouseOut={e =>e.target.pause()}
            >
                
            </video>
        </div>





)

export default VideoIndexItem;