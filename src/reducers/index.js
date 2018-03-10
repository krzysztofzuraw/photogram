import { combineReducers } from "redux";

import {
  RECEIVE_PHOTOS,
  ADD_COMMENT,
  ADD_LIKE,
  REMOVE_PHOTOS,
  REQUEST_PHOTOS
} from "../actions";

const photos = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_PHOTOS:
      return [...state, ...action.photos];
    default:
      return state;
  }
};

const isFetching = (state = false, action) => {
  switch (action.type) {
    case REQUEST_PHOTOS:
      return true;
    case RECEIVE_PHOTOS:
      return false;
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

const appReducer = combineReducers({ photos, comments, likes, isFetching });

const rootReducer = (state, action) => {
  if (action.type === REMOVE_PHOTOS) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
