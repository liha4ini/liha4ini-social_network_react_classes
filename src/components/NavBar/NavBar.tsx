import React, {useState} from 'react';
import {NavLink} from "react-router-dom";

import './navbar.css'


export const NavBar = () => {

    const navBarItems = [
        {
            id: 1,
            title: 'Profile',
            link: '/profile'
        },
        {
            id: 2,
            title: 'Messages',
            link: '/messages'
        },
        {
            id: 3,
            title: 'News',
            link: '/news'
        },
        {
            id: 4,
            title: 'Music',
            link: '/music'
        },
        {
            id: 5,
            title: 'Settings',
            link: '/settings'
        },
    ]

    const elements = navBarItems.map(item => {
        return (
            <div key={item.id} className='navbar_item'>
                <NavLink
                    to={item.link}
                    className='navbar_item_link'
                >
                    {item.title}
                </NavLink>
            </div>
        )
    })

    return (
        <div className='navbar'>
            {
                elements
            }
        </div>
    );
};