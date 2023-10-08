import React from 'react';
import ReactDOM from 'react-dom';


import {BrowserRouter} from "react-router-dom";
import {alertFoo, changeTextPost, RootStateType} from './redux/state'

import './index.css';
import App from "./App";


export const rerenderMyApp = (state: RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} alertFoo={alertFoo} changeTextPost={changeTextPost}/>
        </BrowserRouter>
        , document.getElementById('root')
    );
}