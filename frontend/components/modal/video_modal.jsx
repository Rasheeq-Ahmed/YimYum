import React from 'react'
import {Link} from 'react-router-dom'

class VideoModal extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            caption: '',
            creator: ''
        }

        this.renderDelete = this.renderDelete.bind(this)
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

    renderDelete(){
        if (this.props.currentVideo.creator_id === this.props.currentUser.id){
            return (
                <button onClick={this.handleDelete}>Delete</button>
            )
        } else {
            return null;
        }
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

    console.log(this.props)


    if (!this.props.currentVideo) {
        return null;
    }
    // console.log(this.props.currentVideo.id)
    return (
        <div className="video-modal-all">
            <div className="video-modal-left">
                <button className="closeVidModal" onClick={() => this.props.closeModal()}>&times;</button>
                <div className="video-modal-video">
                    <video className='vid' controls loop src={this.props.currentVideo.videoUrl}></video>
                </div>
            </div>
            <div className="video-modal-right">
                <div className="vModal-user">
                    <Link to={`/users/${this.props.currentVideo.creator_id}`}>
                    <div className="vModal-user-pic"></div>
                    </Link>
                    <div className="vModal-user-details">
                        <div className="vModal-user-info">
                            <Link to={`/users/${this.props.currentVideo.creator_id}`}>
                                <h1>{this.props.currentVideo.creator}</h1>
                            </Link>
                            <Link to={`/users/${this.props.currentVideo.creator_id}`}>
                                <h2>Full Name</h2>
                            </Link>
                        </div>
                        <button>Follow</button>
                    </div>
                </div>

                <div className="vModal-caption">
                    {this.props.currentVideo.caption}
                </div>
                <div className="vModal-vidStats">
                    <img src={window.likeSymbol} alt="likes"/>
                    <img src={window.commentSymbol} alt="comments"/>
                </div>








                {/* <div className="video-modal-vidinfo">

                    <div className='video-modal-user'>
                        <p>{this.props.currentVideo.creator}</p>
                        <p>{this.props.currentVideo.caption}</p>
                        {this.renderDelete()}    
                    </div>
                    <div className="video-modal-details">
                    </div>
                </div> */}
                <div className="video-modal-comments">
                    
                </div>
            </div>      
            
        </div>
    );
}
};


            


export default VideoModal;