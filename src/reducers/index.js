import { combineReducers } from "redux";

import {
  ADD_COMMENT,
  ADD_LIKE,
  REMOVE_PHOTOS,
  FETCH_PHOTOS_REQUEST,
  FETCH_PHOTOS_SUCCESS,
  FETCH_PHOTOS_FAILURE
} from "../actions";

const photos = (state = [], action) => {
  switch (action.type) {
    case FETCH_PHOTOS_SUCCESS:
      return [...state, ...action.photos];
    default:
      return state;
  }
};

const isFetching = (state = false, action) => {
  switch (action.type) {
    case FETCH_PHOTOS_REQUEST:
      return true;
    case FETCH_PHOTOS_SUCCESS:
      return false;
    default:
      return state;
  }
};

const errorMessage = (state = null, action) => {
  switch (action.type) {
    case FETCH_PHOTOS_FAILURE:
      return action.message;
    default:
      return state;
  }
};

const comments = (state = [], action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return [
        ...state,
        {
          photoId: action.photoId,
          author: action.author,
          text: action.comment
        }
      ];
    default:
      return state;
  }
};

const likes = (state = [], action) => {
  switch (action.type) {
    case ADD_LIKE:
      return [...state, action.photoId];
    default:
      return state;
  }
};

const appReducer = combineReducers({
  photos,
  comments,
  likes,
  isFetching,
  errorMessage
});

const rootReducer = (state, action) => {
  if (action.type === REMOVE_PHOTOS) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
