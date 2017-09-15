import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";

import PhotoGrid from './components/PhotoGrid/PhotoGrid.jsx';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

const router = (
    <Router>
        <Route exact path="/" component={PhotoGrid}/>
    </Router>
)


ReactDOM.render(router, document.getElementById('root'));
registerServiceWorker();
