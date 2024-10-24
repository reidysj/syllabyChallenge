import {
  POST_USER,
  SET_USER,
  SET_ERROR,
  FETCH_PENDING_USERS,
  SET_PENDING_USERS,
  SET_IS_DELETING,
  SET_DELETED,
  POST_USER_SUCCESS,
} from "../actions/usersActions";

export const initialState = {
  user: "",
  isPosting: false,
  isFetching: false,
  error: "",
  pendingUsers: [],
  isDeleting: false,
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_USER:
      return {
        ...state,
        isPosting: true,
      };
    case POST_USER_SUCCESS:
      console.log("payload", action.payload);
      return {
        ...state,
        pendingUsers: state.pendingUsers.filter(
          (user) => user.id !== action.payload.id
        ),
      };
    case SET_USER:
      return {
        ...state,
        isPosting: false,
        error: "",
        user: action.payload,
      };
    case SET_ERROR:
      return {
        ...state,
        isPosting: false,
        error: action.payload,
      };
    case FETCH_PENDING_USERS:
      return {
        ...state,
        isFetching: true,
      };
    case SET_PENDING_USERS:
      return {
        ...state,
        isFetching: false,
        error: "",
        pendingUsers: action.payload,
      };
    case SET_IS_DELETING:
      return {
        ...state,
        isDeleting: true,
      };
    case SET_DELETED:
      return {
        ...state,
        pendingUsers: state.pendingUsers.filter(
          (user) => user.id !== action.payload.id
        ),
        isDeleting: false,
      };
    default:
      return state;
  }
};
