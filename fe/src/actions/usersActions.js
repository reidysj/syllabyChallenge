import { baseAxios, axiosWithAuth } from "../utils/customAxios";

export const POST_USER = "POST_USER";
export const SET_USER = "SET_USER";
export const SET_ERROR = "SET_ERROR";
export const FETCH_PENDING_USERS = "FETCH_PENDING_USERS";
export const SET_PENDING_USERS = "SET_PENDING_USERS";
export const SET_IS_DELETING = "SET_IS_DELETING";
export const SET_DELETED = "SET_DELETED";
export const POST_USER_SUCCESS = "POST_USER_SUCCESS";

export const postUser = (userData) => (dispatch) => {
  dispatch({ type: POST_USER });
  return baseAxios()
    .post("auth/login", userData)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      dispatch({ type: SET_USER, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: SET_ERROR, payload: err.response.data.message });
    });
};

export const requestUser = (userData) => (dispatch) => {
  dispatch({ type: POST_USER });
  return baseAxios()
    .post("contacts", userData)
    .then((res) => {
      dispatch({ type: SET_USER, payload: res.data });
    })
    .catch((err) => {
      console.log("error", err);
      dispatch({ type: SET_ERROR, payload: err.response.data.message });
    });
};

export const getPendingUsers = () => (dispatch) => {
  dispatch({ type: FETCH_PENDING_USERS });
  return axiosWithAuth()
    .get("contacts")
    .then((res) => {
      dispatch({ type: SET_PENDING_USERS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: SET_ERROR, payload: err.response.data.message });
    });
};

export const registerUser = (userData) => (dispatch) => {
  dispatch({ type: POST_USER });
  return axiosWithAuth()
    .post("auth/register", userData)
    .then((res) => {
      console.log(res.data, "response");
      dispatch({ type: POST_USER_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: SET_ERROR, payload: err.response.data.message });
    });
};

export const deletePendingUser = (id) => (dispatch) => {
  dispatch({ type: SET_IS_DELETING });
  return axiosWithAuth()
    .delete(`contacts/${id}`)
    .then((res) => {
      dispatch({ type: SET_DELETED, payload: res.data.user });
    })
    .catch((err) => {
      dispatch({ type: SET_ERROR, payload: err.response.data.message });
    });
};
