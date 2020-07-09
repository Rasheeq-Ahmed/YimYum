import * as LikeApiUtil from "../util/like_api_util";

export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";

const receiveLike = like => {
    return {
        type: RECEIVE_LIKE,
        like
    };
};

const removeLike = like => {
    return {
        type: REMOVE_LIKE,
        like
    };
};

export const createLike = videoId => dispatch =>
    LikeApiUtil.createLike(videoId).then(res => {
        dispatch(receiveLike(res));
    });

export const deleteLike = videoId => dispatch =>
    LikeApiUtil.deleteLike(videoId).then(res => dispatch(removeLike(res)));
