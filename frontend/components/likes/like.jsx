import React, { Component } from 'react'

class Like extends Component {
    constructor(props) {
        super(props)
    
      
        this.handleCreate = this.handleCreate.bind(this)
        this.handldRemove = this.handleRemove.bind(this)
        this.showLike = this.showLike.bind(this)
        this.showLikeNum = this.showLikeNum
    }


    handleCreate() {
        this.props.createLike({
            likeable_id: this.props.video.id,
            likeable_type: "Video"
        })
    }

    handleRemove() {
        for (let i = 0; i < this.props.likes.length; i++) {
            if (this.props.likes[i].user_id === this.props.currentUser.id) {
                this.props.removeLike(this.props.likes[i].id);
                return;
            }
        }
    }

    showLike() {
        const {likeUsers, currentUser} = this.props;

        if (likeUsers.includes(currentUser.id)) {

            return (
                <div>
                <img src={window.LikeSymbol}/>
            </div>
            )
        } else {
            return (
                <div>
                    <img src={window.LikeSymbol} onClick={this.handleCreate} />
                </div>
            )
        }
    }

    showLikeNum () {
        const {likes} = this.props;
        if (likes.length === 0){
            return (
                <div className="">Be the first to like this!</div>
            )
        } else {
            return (
                <div className="">{likes.length}</div>
            )
        }
        
    }








    
    render() {
        return (
            <div>
                {this.showLike()}
                {this.showLikeNum}
            </div>
        )
    }
}

export default Like
