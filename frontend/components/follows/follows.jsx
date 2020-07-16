import React from 'react';
import { Link } from "react-router-dom";

class Follows extends React.Component {
    constructor(props) {
        super(props);
        this.fetchFollow = this.fetchFollow.bind(this);
        this.following = this.following.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    fetchFollow(followingId) {
        const follows = Object.values(this.props.follows);

        for (let i = 0; i < follows.length; i++) {
            const match = (follows[i].follower_id === this.props.currentUser && follows[i].following_id === followingId);
            if (match) {
                return follows[i].id;
            }
        }
    }

    following(followingId) {
        const follows = Object.values(this.props.follows);

        for (let i = 0; i < follows.length; i++) {
            const match = (follows[i].follower_id === this.props.currentUser && follows[i].following_id === followingId);
            if (match) {
                return true;
            }
        }
        return false;
    }

    handleClick() {
        const follow = {
            follower_id: this.props.currentUser,
            following_id: this.props.followingId,
        };

        if (this.following(follow.following_id)) {
            const followId = this.fetchFollow(follow.following_id);
            this.props.deleteFollow(followId);
        } else {
            this.props.createFollow(follow);
        }
    }


    render() {



        let follow;

        if (parseInt(this.props.match.params.user_id) !== this.props.currentUser) {
            follow = (this.following(this.props.followingId)) ?
                <button className="following-button" onClick={this.handleClick}>Following</button>
                :
                <button className="follow-button" onClick={this.handleClick}>Follow</button>;

        } else follow = null; 
        // const follows = Object.values(this.props.follows);
        // const followers = follows.filter(follow => follow.following_id === this.props.followingId)
        //     .sort((a, b) => (a.username > b.username) ? 1 : ((b.username > a.username) ? -1 : 0))
        //     .map(follower => {
        //         const users = this.props.users;
        //         if (this.props.users.length < 2) return null;
        //         return (
        //             // <li key={follower.id} className="follower-and-following-list-item">{follower.follower_id}</li>
        //             <li key={follower.id} className="follower-and-following-list-item">
        //                 <Link className="follower-and-following-list-item-link" to={`/users/${follower.follower_id}`}>
        //                     {users.filter(user => user.id === follower.follower_id)[0].username}
        //                 </Link>
        //             </li>
        //         )
        //     });

        // const following = follows.filter(follow => follow.follower_id === this.props.followingId)
        //     .sort((a, b) => (a.username > b.username) ? 1 : ((b.username > a.username) ? -1 : 0))
        //     .map(followed => {
        //         return (
        //             <li key={followed.id} className="follower-and-following-list-item">
        //                 <Link className="follower-and-following-list-item-link" to={`/users/${followed.following_id}`}>
        //                     {followed.username}
        //                 </Link>
        //             </li>
        //         )
        //     });

        // const count = (followers.length) ?
        //     followers.length
        //     :
        //     "0";
        // const followerS = (count === 1) ?
        //     "follower"
        //     :
        //     "followers";
        // const count2 = (following.length) ?
        //     following.length
        //     :
        //     "0";
        // // const following = (count === 1) ?
        // //     "follower"
        // //     :
        // //     "followers";

        // let follow;

        // if (parseInt(this.props.match.params.user_id) !== this.props.currentUser) {
        //     follow = (this.following(this.props.followingId)) ?
        //         <button className="following-button" onClick={this.handleClick}>Following</button>
        //         :
        //         <button className="follow-button" onClick={this.handleClick}>Follow</button>;

        // } else follow = null;

        return (
            <div className='follow-all'>
                {/* <button onClick>
                    Follow
                </button> */}
                {follow}

















                {/* {follow}
                <div className="followers-and-following-container">
                    <h2 className="followers-count">{count}
                        <div className="followers visible">{followerS}
                            <ul className="hidden follower-and-following-list">{followers}</ul>
                        </div>
                    </h2>
                    <h2 className="following-count">{count2}
                        <div className="following visible">following
                        <ul className="hidden follower-and-following-list">{following}</ul>
                        </div>
                    </h2>
                </div> */}
            </div>
        )
    }
}

export default Follows; 