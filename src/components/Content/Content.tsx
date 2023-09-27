import React from 'react';
import {Posts} from "../Posts/Posts";

import './content.css'
import {ProfilePageType} from "../../redux/state";


export const Content = ({postsData}: ProfilePageType) => {

    return (
        <div className='content'>
            <Posts postsData={postsData} />
        </div>
    );
};