import * as LikeAPIUtil from '../util/user_api_util';

export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const REMOVE_LIKE = 'REMOVE_LIKE';


const receiveLike = ({like, video}) => ({
    type: RECEIVE_LIKE,
    like,
    video
});
const deleteLike = ({like, video}) => ({
    type: RECEIVE_LIKE,
    like,
    video
});


export const createLike = like => dispatch => {
    return LikeAPIUtil.createLike(like)
        .then(like => dispatch(receiveLike(like)))
}
export const removeLike = id => dispatch => {
    return LikeAPIUtil.removeLike(id)
        .then(like => dispatch(deleteLike(like)))
}

