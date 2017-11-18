import { combineReducers } from "redux";

import {
  REQUEST_PHOTOS,
  RECEIVE_PHOTOS,
  ADD_COMMENT,
  REMOVE_COMMENT
} from "../actions/index.js";
import { Object } from "core-js/library/web/timers";

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

const comments = (state = {}, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      const stateWithNewComment = Object.assign({}, state);
      stateWithNewComment[action.photoId] = [
        {
          author: action.author,
          text: action.comment
        },
        ...(stateWithNewComment[action.photoId] || [])
      ];
      return stateWithNewComment;
    case REMOVE_COMMENT:
      const stateWithCommentRemoved = Object.assign({}, state);
      stateWithCommentRemoved[action.photoId] = [
        ...state[action.photoId].slice(0, action.position),
        ...state[action.photoId].slice(action.position + 1)
      ];
      return stateWithCommentRemoved;
    default:
      return state;
  }
};

const rootReducer = combineReducers({ photos, comments });

export default rootReducer;
