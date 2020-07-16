import React from 'react'
import {Link} from 'react-router-dom'
import LikeContainer from '../likes/like_container'
// import CommentContainer from '../comments/comment_item_container'
import CommentIndexContainer from '../comments/comment_index_container'
// import FollowContainer from '../follows/follow_container'



class VideoModal extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            // caption: '',
            // creator: '',
            body: "",
            video_id: this.props.currentVideo.id,
            // comments: state.entities.comments

        }

        this.renderDelete = this.renderDelete.bind(this)
        this.handleDelete = this.handleDelete.bind(this)

        // this.handleVideoLike = this.handleVideoLike.bind(this)

        // this.handleComment = this.handleComment.bind(this);
        // this.handleDelete = this.handleDelete.bind(this);
        // this.handleChange = this.handleChange.bind(this);
        // this.handleInput = this.handleInput.bind(this);


        // this.renderComments = this.renderComments.bind(this);

    }

    // componentDidMount() {
    //     this.props.fetchUsers()
    //     // this.props.fetchComments(this.)
    //     // this.forceUpdate();

    //     // this.setState({
    //     //     state: this.state
    //     // })
    // }


    // componentDidMount() {
    //     this.props.fetchComments(this.props.currentVideo.id);
    // }

    // componentDidUpdate(prevProps) {
    //     if (prevProps.currentVideo !== this.props.currentVideo) {
    //         this.props.fetchComments(this.props.currentVideo.id);
    //     }
    // }


    // componentDidMount() {
    //     this.props.fetchComments(this.props.currentVideo.id);
    // }

    // componentDidUpdate(prevProps) {
    //     if (prevProps.currentVideo.id !== this.props.currentVideo.id) {
    //         this.props.fetchComments(this.props.currentVideo.id);
    //     }
    // }

  

    // handleInput(e) {
    //     this.setState({ body: e.currentTarget.value});
    // }


    ////////////////////////////// COMMENT //////////////////////////////////

    // handleChange(field) {
    //     return e => this.setState({ [field]: e.target.value });
    // }

    
    // handleComment(e){
    //     e.preventDefault();
    //     if (this.state.body !== "") {
    //         this.props.createComment(this.state);
    //     }
    //     this.setState({body: "", user_id: this.props.currentUser.id, video_id: this.props.currentVideo.id});
    // }


    // handleDeleteComment(e) {
    //     e.preventDefault();
    //     if (this.props.comment) {
    //         this.props.deleteComment(this.props.comment.id)
    //     }
    //     this.forceUpdate();


    // }



// /////////////////////////////////////////////////////////////


// renderComments() {
//     // const comments = Object.values(this.props.comments)
//     let vidComments  = this.props.comments.filter(comment => comment.video_id === this.props.currentVideo.id)

//     return (
//         <div className="comment-outer">
//            { vidComments.map((comment, idx) => (
//                <div className="comment-inner">
//                    {/* <h1>{comment.body}</h1> */}
//                    <CommentContainer comment={comment} deleteComment={this.props.deleteComment}/>
//                </div>
            
//            ))}
//             </div>
//     )

    

// }


/////////////////////// DELETE THE VIDEO //////////////////////////////////////////////

    handleDelete(e) {
        e.preventDefault();
        window.confirm(
            "Are you sure you want to delete this video?"
        ) &&
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


//////////////////////////////////////////////////////////////////////////////////////

 



render () {
    // console.log(this.props)
    // console.log(this.state)

    if (!this.props.currentVideo) {
        return null;
    }

    // let vidComments = this.props.comments.filter(comment => comment.video_id === this.props.currentVideo.id).map(comment => {
    //     return (
    //         <div className="comment-inner">
    //             {/* <h1>{comment.body}</h1> */}
    //             <CommentContainer comment={comment} deleteComment={this.props.deleteComment} />
    //         </div>
    //     )
    // })




    return (
        <div className="video-modal-all">
                <button className="closeVidModal" onClick={() => this.props.closeModal()}>&times;</button>
            <div className="video-modal-left">
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
                        {/* <FollowContainer/> */}
                    </div>
                </div>

                <div className="vModal-caption">
                    {this.props.currentVideo.caption}
                    {this.renderDelete()}
                </div>
                <div className="vModal-vidStats">
                    <LikeContainer video={this.props.currentVideo} />
                    <div className='comment-body'>
                        <img src={window.commentSymbol} className="like-button-liked" />
                        <h1>0</h1>
                    </div>
                    {/* <img src={window.likeSymbol} alt="likes" onClick={this.handleVideoLike}/>
                    <img src={window.commentSymbol} alt="comments"/> */}
                </div>










                <div className="vModal-comments">
                    {/* <div className="comment-form">
                        <form className="comment-inner-form">
                            <input type="text" className="comment-text" placeholder="Add a comment..." defaultValue={this.state.body} onChange={this.handleInput}/>
                            <button onClick={ e => this.handleComment(e)}>Post</button>
                        </form>
                    </div> */}
                      <div className="comment-outer">
                        {/* {vidComments} */}
                        <CommentIndexContainer comments={this.props.comments}/>

                     </div>
                </div> 
                {/* </div> */}

            </div>      
            
        </div>
    );
}
};


            


export default VideoModal;