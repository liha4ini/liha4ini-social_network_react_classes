import React from 'react';

import './navbar.css'

export const NavBar = () => {
    return (
        <div className='navbar'>
            <div className='navbar_item'>
                <a href="#" className='navbar_item_link'>Profile</a>
            </div>
            <div className='navbar_item'>
                <a href="#" className='navbar_item_link'>Messages</a>
            </div>
            <div className='navbar_item'>
                <a href="#" className='navbar_item_link'>News</a>
            </div>
            <div className='navbar_item'>
                <a href="#" className='navbar_item_link'>Music</a>
            </div>
            <div className='navbar_item'>
                <a href="#" className='navbar_item_link'>Settings</a>
            </div>
        </div>
    );
};