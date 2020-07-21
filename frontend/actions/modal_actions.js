export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
import {fetchVideos} from  '../actions/video_actions'


export const openModal = (modal, id) =>{
    return {
        type: OPEN_MODAL,
        modal: {formType: modal, videoId: id}
    }
}

export const closeModal = () => {
    return {
        type: CLOSE_MODAL
                    // .then(location.reload(), 1000)
                    

    }
}