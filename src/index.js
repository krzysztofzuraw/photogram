import React from "react";
import ReactDOM from "react-dom";
import createHistory from "history/createBrowserHistory";
import { Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";

import PhotoGridContainer from "./components/PhotoGrid/PhotoGridContainer.jsx";
import SinglePhotoContainer from "./components/SinglePhoto/SinglePhotoContainer.jsx";
import configureStore from "./configureStore";
import registerServiceWorker from "./registerServiceWorker";

import "./index.css";

const history = createHistory();

const { persistor, store } = configureStore();

const router = (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={PhotoGridContainer} />
          <Route path="/photo/:photoId" component={SinglePhotoContainer} />
        </Switch>
      </Router>
    </PersistGate>
  </Provider>
);

ReactDOM.render(router, document.getElementById("root"));
registerServiceWorker();
