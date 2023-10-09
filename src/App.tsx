import React from 'react';
import {Route} from "react-router-dom";

import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Content} from "./components/Content/Content";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {alertFoo, changeTextPost, RootStateType} from "./redux/state";

import './App.css';

type AppPropsType = {
    state: RootStateType
    alertFoo: () => void
    changeTextPost: (text: string) => void
}

function App({state, alertFoo, changeTextPost}: AppPropsType) {

    return (
            <div className="App">
                <Header />
                <div className='main_block'>

                    <div className='nav_block'>
                        <NavBar sidebarItems={state.sidebar.sidebarItems} />
                    </div>

                    <div className='content_block'>
                        <Route path='/profile' render={() => <Content
                            postsData={state.profilePage.postsData}
                            alertFoo={alertFoo}
                            newTextMessage={state.profilePage.newTextMessage}
                            changeTextPost={changeTextPost}
                        />} />
                        <Route path='/messages' render={() => <Dialogs
                            messagesData={state.dialogsPage.messagesData}
                            dialogsData={state.dialogsPage.dialogsData}
                        />} />
                    </div>

                </div>
            </div>
    );
}

export default App;
