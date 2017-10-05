import { combineReducers } from "redux";

import { REQUEST_PHOTOS, RECEIVE_PHOTOS } from "../actions/index.js";

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

const rootReducer = combineReducers({ photos });

export default rootReducer;
