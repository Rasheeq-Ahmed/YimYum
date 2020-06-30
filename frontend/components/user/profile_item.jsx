import React from "react";
import { Link } from "react-router-dom";

class ProfileItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    //   console.log(this.props.video[id])
      if (!this.props.video) return null;

    return (
        <div >
            <div>
                {this.props.video.videoUrl}
            </div>
        </div>
    );
  }
}

export default ProfileItem;
