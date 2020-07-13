import React from 'react';
import { Link } from 'react-router-dom';

class Confirmation extends React.Component {
    constructor(props) {
        super(props);

        this.handleDelete = this.handleDelete.bind(this)
    }

    handleDelete() {
        this.props.deleteComment(this.props.comment.id)
        this.props.closeModal();
    }



    render() {
        return (
            <div>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <div className="option-1" onClick={this.handleDelete}>Go Back to Home Page</div>
                </Link>
                <div className="option-2" onClick={() => (this.props.closeModal())}>Cancel</div>
            </div>
        )
    }
}
export default Confirmation;