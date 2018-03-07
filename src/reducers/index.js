import { combineReducers } from "redux";

import { RECEIVE_PHOTOS, ADD_COMMENT, ADD_LIKE } from "../actions";

const photos = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_PHOTOS:
      return [...state, ...action.photos];
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

const rootReducer = combineReducers({ photos, comments, likes });

export default rootReducer;
