import React from 'react';
import {Route} from "react-router-dom";

import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Content} from "./components/Content/Content";
import {Dialogs} from "./components/Dialogs/Dialogs";

import './App.css';



function App() {
    return (
            <div className="App">
                <Header />
                <div className='main_block'>

                    <div className='nav_block'>
                        <NavBar />
                    </div>

                    <div className='content_block'>
                        <Route path='/profile' component={Content} />
                        <Route path='/messages' component={Dialogs} />
                    </div>

                </div>
            </div>
    );
}

export default App;
