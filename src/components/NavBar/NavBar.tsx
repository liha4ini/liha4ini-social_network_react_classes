import React, {useState} from 'react';
import {NavLink} from "react-router-dom";

import './navbar.css'
import {SidebarType} from "../../redux/state";


export const NavBar = ({sidebarItems}: SidebarType) => {

    const elements = sidebarItems.map(item => {
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