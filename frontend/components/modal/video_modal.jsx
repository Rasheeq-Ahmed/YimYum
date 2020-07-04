import React from 'react'
import {Link} from 'react-router-dom'

class VideoModal extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            caption: '',
            creator: ''
        }


        this.handleDelete = this.handleDelete.bind(this)

    }




    componentDidMount() {
        this.setState({
            caption: this.props.currentVideo.caption,
            creator: this.props.currentVideo.creator
        })
    }



    handleDelete(e) {
        e.preventDefault();
        this.props.removeVideo(this.props.currentVideo.id)
        .then (() => {
        this.props.closeModal();

        })
    }


    confirmDelete(e) {
        e.preventDefault();
        
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

    // console.log(this.state)


    if (!this.props.currentVideo) {
        return null;
    }
    // console.log(this.props.currentVideo.id)
    return (
        <div className="video-modal-all">
            <div className="modal-left">
                <button className="closeVidModal" onClick={() => this.props.closeModal()}>&times;</button>
                <div className="modal-video">
                    <video className='vid' controls autoPlay loop src={this.props.currentVideo.videoUrl}></video>
                </div>
            </div>
            <div className="modal-right">
                <div className="modal-vidinfo">

                    <div className='modal-user'>
                        <p>{this.props.currentVideo.creator}</p>
                        <p>{this.props.currentVideo.caption}</p>
                        <Link to
                        ></Link><button onClick={this.handleDelete}>Delete</button>    
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