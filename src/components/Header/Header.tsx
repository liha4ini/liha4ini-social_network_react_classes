import React from 'react';

import './header.css';
import logo from '../../accets/logo_main.png'

export const Header = () => {
    return (
        <div className='header'>
            <img className='header_logo' src={logo} alt="logo"/>
        </div>
    );
};