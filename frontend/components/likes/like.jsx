import React from "react";

class Like extends React.Component {
    constructor(props) {
        super(props);
        this.handleLike = this.handleLike.bind(this);
        this.handleUnlike = this.handleUnlike.bind(this);
    }

    handleUnlike(e) {
        e.preventDefault();

        this.props.deleteLike(this.props.video.id)
    }
    handleLike(e) {
        e.preventDefault();

        this.props.createLike({ video_id: this.props.video.id })
    }

    render() {
        if (!this.props.video) {
            return null;
        }
        return (
                    <div className="like-all">
                        {this.props.video.likers.includes(this.props.currentUser.id) ? (
                        <div className='like-body'>
                        <img src={window.likedSymbol} className="like-button-liked" onClick={this.handleUnlike}/>
                        <h1>{this.props.video.likers.length}</h1>
                        </div>
                        ) : (
                        <div className="like-body">
                        <img src={window.likeSymbol} className="like-button-unliked" onClick={this.handleLike}/>
                        <h1>{this.props.video.likers.length}</h1>
                        </div>
                        
                            )}
                    </div>
        );
    }
}

export default Like;
