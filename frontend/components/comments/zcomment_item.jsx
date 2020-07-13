// import React, { Component } from 'react'
// import { fetchComments } from '../../actions/comment_actions'
// // import video_index from '../videos/video_index/video_index'

// class CommentItem extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = this.props.comment
//             //  commentAuthor: this.props.users[this.props.comment.user_id],
            
    
        
//         this.renderDelete = this.renderDelete.bind(this)
//         this.handleDelete = this.handleDelete.bind(this)
//     }

//     // componentDidMount () {
//     //     this.props.fetchComments()
//     //     this.forceUpdate();
//     // }


//     handleDelete(e) {
//         e.preventDefault();
//         // if (this.props.comment) {
//             this.props.deleteComment(this.props.comment.id)
        
//             // this.forceUpdate();
            
            
//     }

//     renderDelete() {
//         if (!this.props.currentUser) {
//             return null;
//         }

//         let commentAuthor = this.props.users[this.props.comment.user_id]


//         if (commentAuthor.id === this.props.currentUser.id) {
//             return (
//                 <button onClick={this.handleDelete}>Delete</button>
//             )
//         } else {
//             return null;
//         }
//     }   
    

    
//     render() {

//         let commentAuthor = this.props.users[this.props.comment.user_id]
//         // console.log(this.props)
//         return (
//             <div className="commentItem-all">
//                 <div className="commentItem-body">
//                     <div className="commentItem-pic">
//                         <img src={commentAuthor.profilePhoto} alt=""/>
//                     </div>
//                     <div className="commentItem-info">
//                         <h1>{commentAuthor.username}</h1>
//                         <p>{this.props.comment.body}</p>
//                         {this.renderDelete()}
//                     </div>

//                 </div>

                
//             </div>
//         )
//     }
// }

// export default CommentItem
