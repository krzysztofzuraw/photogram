import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PhotoGrid from "./components/PhotoGrid/PhotoGrid.jsx";
import SinglePhoto from "./components/SinglePhoto/SinglePhoto.jsx";
import registerServiceWorker from "./registerServiceWorker";

import "./index.css";

const router = (
  <Router>
    <Switch>
      <Route exact path="/" component={PhotoGrid} />
      <Route path="/photo/:photoId" component={SinglePhoto} />
    </Switch>
  </Router>
);

ReactDOM.render(router, document.getElementById("root"));
registerServiceWorker();
