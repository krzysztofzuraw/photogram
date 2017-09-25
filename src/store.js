import { createStore, compse } from "redux";
import { browserHistory } from "react-router";

import rootReducer from "./reducers";

const defaultState = {
  photos: []
};

const store = createStore(
  rootReducer,
  defaultState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
