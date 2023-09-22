import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Content} from "./components/Content/Content";

function App() {
    return (
            <div className="App">
                <Header />
                <div className='main_block'>

                    <div className='nav_block'>
                        <NavBar />
                    </div>

                    <div className='content_block'>
                        <Content />
                    </div>

                </div>
            </div>
    );
}

export default App;
