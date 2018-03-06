import { combineReducers } from "redux";

import { RECEIVE_PHOTOS, ADD_COMMENT, ADD_LIKE } from "../actions";

const photos = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_PHOTOS:
      return [...state, ...action.photos];
    case ADD_LIKE:
      return [...state, state.filter(photo => photo.id === action.photoId)];
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

const rootReducer = combineReducers({ photos, comments });

export default rootReducer;
