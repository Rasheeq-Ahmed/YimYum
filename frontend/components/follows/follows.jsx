import React from 'react';
import { Link } from "react-router-dom";

class Follows extends React.Component {
    constructor(props) {
        super(props);

        this.renderFollow = this.renderFollow.bind(this)
        this.handleFollow = this.handleFollow.bind(this)
        this.handleUnfollow = this.handleUnfollow.bind(this)
    }


    handleFollow(e) {
        e.preventDefault();
        this.props.createFollow({ followed_user_id: this.props.user.id })
        // .then(() => this.props.fetchUser(this.props.user.id))
    }

    handleUnfollow(e) {
        e.preventDefault();
        this.props.deleteFollow(this.props.user.id)
        // .then(() => {
        //   this.props.fetchUser(this.props.user.id)
        // })
    }




    renderFollow() {
        console.log(this.props)

        // console.log(this.props.currentUser)
        if (this.props.followStatus === true) {
            return (
                <div className="follow-all">
                    <button
                        className="profile-button"
                        onClick={this.handleUnfollow}>
                        Unfollow
                    </button>
                </div>
            )
        } else {
            return (
                <div className="follow-all">
                    <button
                        className="profile-button"
                        onClick={this.handleFollow}>
                        Follow
                    </button>
                </div>
            )
        }
    }










    render () {
        return (
            <div>
                {this.renderFollow()}

            </div>
        )
    }
}


export default Follows; 