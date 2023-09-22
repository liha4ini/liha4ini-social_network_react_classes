import React from 'react';
import {PostItem} from "../PostItem/PostItem";

import s from './posts.module.css';


export const Posts = () => {
    return (
        <div>
            <PostItem message={'Are you ok?'} />
            <PostItem message={'What are ypu doing?'} />
            <PostItem message={'I am here'} />
            <PostItem message={'What is new?'} />
        </div>
    );
};