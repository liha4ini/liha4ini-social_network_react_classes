import React from 'react';
import ReactDOM from 'react-dom';


import {BrowserRouter} from "react-router-dom";
import {alertFoo, RootStateType} from './redux/state'

import './index.css';
import App from "./App";


export const rerenderMyApp = (state: RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} alertFoo={alertFoo}/>
        </BrowserRouter>
        , document.getElementById('root')
    );
}