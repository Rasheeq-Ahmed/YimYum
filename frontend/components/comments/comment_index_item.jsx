import React from 'react';

class CommentIndexItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        //    comment: this.props.comment,
           deleted: "false"
        }

        this.handleDelete = this.handleDelete.bind(this);
    }


    // componentDidMount() {
    //     this.props.fetchComments(this.props.currentVideo.id);
    //     // this.setState({deleted: "false"})
    // }


    componentDidMount() {
        this.props.fetchComments(this.props.currentVideo.id);
        // this.setState({ deleted: "false" })
    }

    // componentDidUpdate(prevProps) {
    //     if (prevProps.comments.length !== this.props.comments.length) {
    //         this.props.fetchComments(this.props.currentVideo.id);
    //     }
    // }

    // componentDidUpdate(prevProps) {
    //     if (prevProps.currentVideo.id !== this.props.currentVideo.id) {
    //         this.props.fetchComments(this.props.currentVideo.id);
    //     }
    // }




    handleDelete(e) {
        e.preventDefault();
        // this.props.fetchComments(this.props.currentVideo.id)

        // this.setState({ deleted: "true" })
        this.props.deleteComment(this.props.comment.id)
        this.props.fetchVideos()

        // .then(
        //     // this.forceUpdate(),
            this.props.fetchComments(this.props.currentVideo.id)
            this.props.fetchVideos()
        // )
        // // .then(
        // // )



        this.props.fetchComments(this.props.currentVideo.id)
        
        //     this.props.fetchComments(this.props.currentVideo.id),
        //     this.setState({deleted: "true"}),
            // this.props.deleteComment(this.props.comment.id)
        // )
        
        // this.setState({deleted: ''})
        // if (this.state.deleted = '') return;
        // this.setState({comment: ''})
        // this.setState({refresh: "true"})
        // this.props.openModal('show', this.props.currentVideo.id)
    }

    renderDeleteBtn() {
        if (this.props.user && this.props.comment) {
            if (this.props.user.id === this.props.comment.user_id) {
                return (
                    <button className="delete-comment-btn" onClick={(e) =>this.handleDelete(e)}>
                        <i className="fa fa-trash"></i>
                    </button>
                )
            }
        }
        return null;
    }

    render() {
        // console.log(this.state)
        // console.log(this.props)
        // this.props.fetchComments(this.props.currentVideo.id)
        if (!this.props.comment) {
            return null;
        }

        


        let commentAuthor = this.props.users[this.props.comment.user_id]

        return (
            <li className="commentItem-all">
                    <div className="commentItem-body">
                        <div className="commentItem-pic">
                            <img src={commentAuthor.profilePhoto} alt="" />
                        </div>
                        <div className="commentItem-info">
                            <h1>{commentAuthor.username}</h1>
                            <p>{this.props.comment.body}</p>
                        {this.renderDeleteBtn()}
                        </div>
                    </div>
            </li>
        )
    }
}

export default CommentIndexItem;