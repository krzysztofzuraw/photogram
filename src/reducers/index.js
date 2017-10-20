import { combineReducers } from "redux";

import {
  REQUEST_PHOTOS,
  RECEIVE_PHOTOS,
  ADD_COMMENT,
  REMOVE_COMMENT
} from "../actions/index.js";

const photos = (state = { isFetching: false, photos: [] }, action) => {
  switch (action.type) {
    case REQUEST_PHOTOS:
      return {
        ...state,
        isFetching: true
      };
    case RECEIVE_PHOTOS:
      return {
        ...state,
        isFetching: false,
        photos: action.photos
      };
    default:
      return state;
  }
};

const comments = (state = [], action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return [
        {
          author: action.author,
          photoId: action.photoId,
          text: action.comment
        },
        ...state
      ];
    case REMOVE_COMMENT:
      return state;
    default:
      return state;
  }
};

const rootReducer = combineReducers({ photos, comments });

export default rootReducer;
