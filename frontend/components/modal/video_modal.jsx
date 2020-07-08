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
        this.handleVideoLike = this.handleVideoLike.bind(this)

    }




    componentDidMount() {
        this.props.fetchUsers()
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
        if (!this.props.currentUser) {
            return null;
        }

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

    handleVideoLike() {
        if (this.props.currentUserLike.liked !== undefined) {
            if (this.props.currentUserLike.liked === false) {
                this.props.changeLike({
                    id: this.props.currentUserLike.id,
                    liked: true,
                    likeable_id: this.props.currentUserLike.likeable_id,
                    likeable_type: this.props.currentUserLike.likeable_type
                }).then(() => this.props.fetchVideo(this.props.currentVideo.id))
            } else {
                this.props.removeLike(this.props.currentUserLike.id)
                    .then(() => this.props.fetchVideo(this.props.currentVideo.id))
            }
        } else {
            this.props.addLike({
                liked: true,
                likeable_id: this.props.currentVideo.id,
                likeable_type: 'Video'
            }).then(() => this.props.fetchVideo(this.props.currentVideo.id))
        }
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

    console.log(this.ownProps)
    // console.log(this.state)
    // let vidCreator = this.props.currentVideo.creator_id

    // if (!vidCreator) {
    //     return null;
    // }

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
                {/* <div className="vModal-right-content"> */}

                <div className="vModal-user">
                    <Link to={`/users/${this.props.currentVideo.creator_id}`} onClick={() => this.props.closeModal()}>
                    <div className="vModal-user-pic">
                        <img src={this.props.users[this.props.currentVideo.creator_id].profilePhoto} alt=""/>
                    </div>
                    </Link>
                    <div className="vModal-user-details">
                        <div className="vModal-user-info">
                            <Link to={`/users/${this.props.currentVideo.creator_id}`} onClick={() => this.props.closeModal()}>
                                <h1>{this.props.currentVideo.creator}</h1>
                            </Link>
                            <Link to={`/users/${this.props.currentVideo.creator_id}`} onClick={() => this.props.closeModal()}>
                                <h2>{this.props.users[this.props.currentVideo.creator_id].name}</h2>
                            </Link>
                        </div>
                        <button>Follow</button>
                    </div>
                </div>

                <div className="vModal-caption">
                    {this.props.currentVideo.caption}
                    {this.renderDelete()}
                </div>
                <div className="vModal-vidStats">
                    <img src={window.likeSymbol} alt="likes" onClick={this.handleVideoLike}/>
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
                </div>
                <div className="vModal-comments">
                  Comments gonna go here  
                </div> */}
                {/* </div> */}

            </div>      
            
        </div>
    );
}
};


            


export default VideoModal;