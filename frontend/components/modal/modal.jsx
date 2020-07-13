import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import VideoModalContainer from './video_modal_container';
import ConfirmationModalContainer from './confirmation_modal_container'

function Modal({ id, modal, closeModal }) {
    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
        case 'show':
            component = <VideoModalContainer />;
        // case 'confirmation':
        //     component = <ConfirmationModalContainer />;
            break;
        default:
            return null;
    }
    
    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => {e.stopPropagation()}}>
                {component}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    let tempModal
    if (!state.ui.modal) {
        tempModal = null
    } else {
        tempModal = state.ui.modal.formType
    }
    let tempId
    if (!state.ui.modal) {
        tempId = null
    } else {
        tempId = state.ui.modal.id
    }
    return {
        modal: tempModal,
        id: tempId
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);