import React from 'react';
import {Route} from "react-router-dom";

import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Content} from "./components/Content/Content";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {RootStateType} from "./redux/state";

import './App.css';

type AppPropsType = {
    state: RootStateType
}

function App({state}: AppPropsType) {

    return (
            <div className="App">
                <Header />
                <div className='main_block'>

                    <div className='nav_block'>
                        <NavBar />
                    </div>

                    <div className='content_block'>
                        <Route path='/profile' render={() => <Content postsData={state.profilePage.postsData} />} />
                        <Route path='/messages' render={() => <Dialogs />} />
                    </div>

                </div>
            </div>
    );
}

export default App;
