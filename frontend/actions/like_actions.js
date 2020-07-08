import * as LikeApiUtil from "../util/like_api_util";

export const RECEIVE_ALL_LIKES = "RECEIVE_ALL_LIKES";
export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";

export const fetchAllLikes = () => dispatch => {
    return LikeApiUtil.fetchAllLikes().then(likes => dispatch(receiveAllLikes(likes)));

};
export const fetchLike = (like) => dispatch => {
    return LikeApiUtil.fetchLike(like).then(like => dispatch(receiveLike(like)));
};
export const createLike = (like) => dispatch => {
    return LikeApiUtil.createLike(like).then(like => dispatch(receiveLike(like)));
};
export const deleteLike = (likeId) => dispatch => {
    return LikeApiUtil.deleteLike(likeId).then((like) => dispatch(removeLike(like)));
};


const receiveAllLikes = likes => {
    return {
        type: RECEIVE_ALL_LIKES,
        likes
    };
};
const receiveLike = like => {
    return {
        type: RECEIVE_LIKE,
        like
    };
};
const removeLike = like => {
    return {
        type: REMOVE_LIKE,
        likeId: like.id
    };
};