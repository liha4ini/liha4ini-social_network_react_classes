import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import {BrowserRouter} from "react-router-dom";
import state from './redux/state'

import './index.css';

ReactDOM.render(
    <BrowserRouter>
        <App state={state} />
    </BrowserRouter>
    , document.getElementById('root')
);