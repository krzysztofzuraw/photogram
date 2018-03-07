import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistCombineReducers } from "redux-persist";
import storage from "redux-persist/es/storage";

import rootReducer from "./reducers";

const configureStore = () => {
  const config = {
    key: "root",
    storage: storage
  };

  const persistReducers = persistCombineReducers(config, {
    rootReducer
  });

  const store = createStore(
    persistReducers,
    compose(
      applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );
  const persistor = persistStore(store);

  return { store, persistor };
};

export default configureStore;
