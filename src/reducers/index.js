import { combineReducers } from "redux";

import { REQUEST_PHOTOS } from "../actions/index.js";

const photos = (state = { isFetching: false, photos: [] }, action) => {
  switch (action.type) {
    case REQUEST_PHOTOS:
      return {
        ...state,
        isFetching: true
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({ photos });

export default rootReducer;
