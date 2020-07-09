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
            <div>
                <div className="like-button-div">
                    <div className="like-button">
                        {this.props.video.likers.includes(this.props.currentUser.id) ? (
                            <div className="like-button-liked" onClick={this.handleUnlike}>
                                <span className="like-icon">&#9829;</span>
                            </div>
                        ) : (
                                <div className="like-button-unliked" onClick={this.handleLike}>
                                    <span>&#9825;</span>
                                </div>
                            )}
                    </div>
                </div>
            </div>
        );
    }
}

export default Like;
