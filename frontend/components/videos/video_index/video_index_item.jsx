import React from 'react'
import {openModal} from '../../../actions/modal_actions';


class VideoIndexItem extends React.Component {
    //  = ({video}) => (
        constructor(props) {
            super(props)
        
            this.state = {
                 
            }
        }

        // componentDidMount() {
        //     // this.props.fetchVideo(110)
        //     this.props.fetchComments(this.props.video.id)
        // }
        
        









    render () {
        let video = this.props.video
        if (!video){
            return null;
        }
        return (
                <video className='video' value={video.id} src={video.videoUrl}
                muted
                onMouseOver={e =>e.target.play()}
                onMouseOut={e =>e.target.pause()}
                onClick={()=>dispatch(openModal('show',video.id))}
                
                ></video>
        )

    }

}


export default VideoIndexItem;