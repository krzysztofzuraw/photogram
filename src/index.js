import React from "react";
import ReactDOM from "react-dom";
import createHistory from "history/createBrowserHistory";
import { Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import PhotoGridContainer from "./components/PhotoGrid/PhotoGridContainer.jsx";
import SinglePhotoContainer from "./components/SinglePhoto/SinglePhotoContainer.jsx";
import store from "./store";
import registerServiceWorker from "./registerServiceWorker";

import "./index.css";

const history = createHistory();

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={PhotoGridContainer} />
        <Route path="/photo/:photoId" component={SinglePhotoContainer} />
      </Switch>
    </Router>
  </Provider>
);

ReactDOM.render(router, document.getElementById("root"));
registerServiceWorker();
