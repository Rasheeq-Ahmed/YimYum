import React from 'react';


class Like extends React.Component {
    constructor(props) {
        super(props);
        this.fetchLike = this.fetchLike.bind(this);
        this.liking = this.liking.bind(this);
        // this.handleClick = _.throttle(this.handleClick.bind(this), 250); 
        this.handleClick = this.handleClick.bind(this)
        // this.handleClick = this.handleClick.bind(this);
        // this.handleComment = this.handleComment.bind(this);
        this.ready = null;
    }

    fetchLike(likeableId) {
        const likes = Object.values(this.props.likes);

        for (let i = 0; i < likes.length; i++) {
            const match = (likes[i].user_id === this.props.currentUser.id && likes[i].likeable_id === likeableId);
            if (match) {
                return likes[i].id;
            }
        }
    }

    liking(likeableId) {
        const likes = Object.values(this.props.likes);

        for (let i = 0; i < likes.length; i++) {
            const match = (likes[i].user_id === this.props.currentUser.id && likes[i].likeable_id === likeableId);
            if (match) {
                return true;
            }
        }
        return false;
    }

    handleClick() {
        this.ready = true;
        const like = {
            user_id: this.props.currentUser.id,
            likeable_type: "Video",
            likeable_id: this.props.videoId,
        };

        if (this.liking(like.likeable_id)) {
            const likeId = this.fetchLike(like.likeable_id);
            this.props.deleteLike(likeId);
        } else {
            this.props.createLike(like);
        }
        this.ready = false;
    }

    // handleComment(e) {
    //     // $('.add-comment').first().focus(); 
    //     // $('.add-comment').next().focus(); 
    //     // Thank you to Alex Volynsky for helping me with the logic. 
    //     const commentButton = document.getElementsByClassName("post-options-comment");
    //     const elementsArr = Array.from(commentButton);
    //     const index = elementsArr.indexOf(e.target);
    //     document.getElementsByClassName("add-comment")[index].focus();
    // }

    render() {
        const likes = Object.values(this.props.likes);
        const likeCount = likes.filter(like => like.likeable_id === this.props.postId).length;

        const count = (likeCount !== 0) ?
            likeCount
            :
            null;

        if (this.liking(this.props.postId)) {
            return (
                <div className="post-options">
                    <button className="post-options-heart-filled" onClick={this.handleClick}>Like</button>
                    <div className="like-count">{count}</div>
                    {/* <div className="post-options-comment" onClick={(e) => { this.handleComment(e) }}></div> */}
                    {/* <div className="post-options-bookmark"></div> */}
                </div>
            )
        }
        else {
            return (
                <div className="post-options">
                    <button className="post-options-heart" onClick={this.handleClick}>Like</button>
                    <div className="like-count">{count}</div>
                    {/* <div className="post-options-comment" onClick={(e) => { this.handleComment(e) }}></div> */}
                    {/* <div className="post-options-bookmark"></div> */}
                </div>
            )
        }
    }
}

export default Like; 