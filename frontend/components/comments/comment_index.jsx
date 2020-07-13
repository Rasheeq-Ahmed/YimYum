import React from 'react';
import { withRouter } from 'react-router-dom';
import CommentIndexItem from './comment_index_item_container';
import { openModal,closeModal } from '../../actions/modal_actions'


class CommentIndex extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            body: '',
            comments: this.props.comments
            

    
    }

        this.handleChange = this.handleChange.bind(this);
        this.handleComment = this.handleComment.bind(this);
    }



    componentDidMount() {
       this.props.fetchComments(this.props.currentVideo.id);
    }

    // componentDidUpdate(prevState) {
    //     if (prevState.comments.id === this.state.comments.id) {
    //         this.props.fetchComments(this.props.currentVideo.id);
    //     }
    // }




    handleChange(e) {
        e.preventDefault();
        this.setState({ body: e.currentTarget.value })
        this.props.fetchComments(this.props.currentVideo.id)

    }

    handleComment(e) {
        e.preventDefault();
        // if (!this.props.currentUser) this.props.history.push('/login');

        if (this.state.body === '') return;
        this.setState({ body: "", user_id: this.props.currentUser.id, video_id: this.props.currentVideo.id });
        let video_id = this.props.currentVideo.id;
        this.props.createComment({ body: this.state.body, video_id })
        this.props.fetchComments(this.props.currentVideo.id)

    }


    // handleDelete(e) {
    //     e.preventDefault();
    //     this.props.deleteComment(comment.id);
    //     // this.setState({deleted: ''})
    //     // if (this.state.deleted = '') return;
    //     // this.setState({comment: ''})
    //     // this.setState({refresh: "true"})
    //     // this.props.openModal('show', this.props.currentVideo.id)
    // }







    render() {
        console.log(this.props)
        // let {comments} = this.state
        // let commentList = this.props.fetchComments(this.props.currentVideo.id).values;

        return(
        <div className="comment-all">

            


            <ul className="comment-list">
                {this.props.comments.map((comment, idx) => {
                    return <CommentIndexItem
                    comment={comment}
                    users={this.props.users}
                    user={this.props.currentUser}
                    currentVideo={this.props.currentVideo}
                    deleteComment={this.props.deleteComment}
                    fetchComments={this.props.fetchComments}
                    // openModal={this.props.openModal()}
                    />
                })}






            </ul>

                <div className="comment-form">

                    <form className="comment-inner-form">
                        <input type="text" className="comment-text" placeholder="Add a comment..." defaultValue={this.state.body} onChange={this.handleChange} />
                        <button onClick={e => this.handleComment(e)}>Post</button>
                    </form>

                </div>








        </div>










        )




    }



}





export default withRouter(CommentIndex);