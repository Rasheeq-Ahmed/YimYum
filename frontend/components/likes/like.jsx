import React from "react";
import {withRouter} from 'react-router-dom'

class Like extends React.Component {
    constructor(props) {
        super(props);
        this.handleLike = this.handleLike.bind(this);
        this.handleUnlike = this.handleUnlike.bind(this);
        this.handleRedirect = this.handleRedirect.bind(this);
    }

    handleUnlike(e) {
        e.preventDefault();
            this.props.deleteLike(this.props.video.id)
    }
    handleLike(e) {
        e.preventDefault();
        this.props.createLike({ video_id: this.props.video.id })
    }

    handleRedirect(e) {
        e.preventDefault();
        this.props.history.push('/login')
        this.props.closeModal()
    }


    render() {
        if (!this.props.video) {
            return null;
        }

        if (!this.props.currentUser) {
            return (
            <div className="like-all">
            <div className="like-body">
                <img src={window.likeSymbol} className="like-button-unliked" onClick={this.handleRedirect} />
                <h1>{this.props.video.likers.length}</h1>
            </div>
            </div>
            )
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
