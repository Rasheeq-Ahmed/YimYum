import * as CommentAPIUtil from "../util/comment_api_util";

export const RECEIVE_ALL_COMMENTS = "RECEIVE_ALL_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

const receiveAllComments = comments => {
    return {
        type: RECEIVE_ALL_COMMENTS,
        comments
    };
};
const receiveComment = comment => {
    return {
        type: RECEIVE_COMMENT,
        comment
    };
};
const removeComment = commentId => {
    return {
        type: REMOVE_COMMENT,
        commentId
    };
};

export const fetchComments = (videoId) => dispatch => (
    CommentAPIUtil.fetchComments(videoId) //ajax call from backend
        .then(comments => dispatch(receiveAllComments(comments)),
            ) //dispatched and sent to reducer
)


export const fetchComment = commentId => dispatch => (
    CommentAPIUtil.fetchComment(commentId)
        .then(comment => dispatch(receiveComment(comment)),
            )
            )

export const createComment = comment => dispatch => (
    CommentAPIUtil.createComment(comment)
        .then(
            comment => dispatch(receiveComment(comment)),
            )
)


export const deleteComment = (commentId) => (dispatch) => (
    CommentAPIUtil.deleteComment(commentId).then(
        (comment) => dispatch(removeComment(comment))
            // .then(location.reload(), 3000)
        
    )
    )
    