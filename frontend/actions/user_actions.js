import * as User_APIUtil from "../util/user_api_util";


export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USERS = "RECEIVE_USERS";

const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user,
});
const receiveUsers = (users) => ({
  type: RECEIVE_USERS,
  users,
});

export const fetchUser = (id) => (dispatch) => {
  return User_APIUtil.fetchUser(id).then(({ user }) => {
    dispatch(receiveUser(user));
  });
};

export const fetchUsers = () => (dispatch) => {
  return User_APIUtil.fetchUsers().then((users) => {
    dispatch(receiveUsers(users));
  });
};

export const updateUser = (id) => (dispatch) => {
  return User_APIUtil.updateUser(id).then(({ user }) => {
    dispatch(receiveUser(user));
  });
};

export const updateUserPhoto = (id, data) => (dispatch) => {
  return User_APIUtil.updateUserPhoto(id, data).then(({ user }) => {
    dispatch(receiveUser(user));
  });
};
