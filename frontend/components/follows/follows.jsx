import React from 'react';
import { Link } from "react-router-dom";

class Follows extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // followStatus: this.props.user.followerIds.includes(this.props.currentUser.id),
            // refresh: this.props.refresh
        }

        this.renderFollow = this.renderFollow.bind(this)
        this.handleFollow = this.handleFollow.bind(this)
        this.handleUnfollow = this.handleUnfollow.bind(this)
        // this.renderFollowCondition = this.renderFollowCondition.bind(this)
    }


    // componentDidMount(){
    //     this.props.fetchUsers()
    //     this.props.fetchVideos()
    // }

    // componentDidUpdate(prevProps,prevState){
    //     if (prevProps.user.followerIds.length !== this.props.user.followerIds.length) {
    //         this.props.fetchUsers()
    //         this.props.fetchVideos()
    //         this.setState({ state: this.state })

    //         this.forceUpdate()
    //     }
    //     // if (prevState.entities.users[user.id].followerIds.length !== this.props.user.followerIds.length) {
    //     //     this.props.fetchUsers()
    //     //     this.setState({ state: this.state })

    //     //     this.forceUpdate()
    //     // }
    // }


    handleFollow(e) {
        e.preventDefault();
        this.props.createFollow({ followed_user_id: this.props.user.id })
        // this.props.fetchVideos()
        //  this.props.fetchUsers()
        // this.setState({ followStatus: true })
        // this.props.fetchVideos()
        // this.props.fetchUsers()


        // .then(() => this.props.fetchUser(this.props.user.id))
    }

    handleUnfollow(e) {
        e.preventDefault();
        this.props.deleteFollow(this.props.user.id)
            // .then(this.props.fetchVideos(),
            // this.props.fetchUsers()
            // )
        // this.props.fetchVideos()
        // this.props.fetchUsers()
        // this.setState({followStatus: false})
        // this.props.fetchVideos()
        // this.props.fetchUsers()
        // .then(() => {
        //   this.props.fetchUser(this.props.user.id)
        // })
    }


    // renderFollowCondition(){
    //     let followStatus = 
    //     // if (this.props.user) {
    //         return (
    //             {followStatus}
    //             )
                
    //         }
            
            
            
            
            renderFollow() {
        // console.log(this.props)
        // console.log(this.state)
        let {followStatus} = this.state 
        // console.log(this.props.currentUser)

            if (this.props.user.id === this.props.currentUser.id) {
                return null;
            }





                if ( this.props.user.followerIds.includes(this.props.currentUser.id)) {
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
        // if this.props.
        return (
            <div>
                {this.renderFollow()}

            </div>
        )
    }
}


export default Follows; 