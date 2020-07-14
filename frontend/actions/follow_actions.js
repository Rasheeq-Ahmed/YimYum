import * as FollowAPIUtil from "../util/follow_api_util";

export const RECEIVE_ALL_FOLLOWS = "RECEIVE_ALL_FOLLOWS";
export const RECEIVE_FOLLOW = "RECEIVE_FOLLOW";
export const REMOVE_FOLLOW = "REMOVE_FOLLOW";

const receiveAllFollows = follows => {
    return {
        type: RECEIVE_ALL_FOLLOWS,
        follows
    };
};
const receiveFollow = follow => {
    return {
        type: RECEIVE_FOLLOW,
        follow
    };
};
const removeFollow = followId => {
    return {
        type: REMOVE_FOLLOW,
        followId
    };
};

export const fetchFollows = () => dispatch => (
    FollowAPIUtil.fetchFollows() //ajax call from backend
        .then(follows => dispatch(receiveAllFollows(follows)),
    ) //dispatched and sent to reducer
)


export const fetchFollow = follow => dispatch => (
    FollowAPIUtil.fetchFollow(follow)
        .then(follow => dispatch(receiveFollow(follow)),
    )
)

export const createFollow = follow => dispatch => (
    FollowAPIUtil.createFollow(follow)
        .then(
            follow => dispatch(receiveFollow(follow)),
        )
)


export const deleteFollow = (followId) => (dispatch) => (
    FollowAPIUtil.deleteFollow(followId).then(
        (follow) => dispatch(removeFollow(follow)),

    )
)
