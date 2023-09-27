import React from 'react';
import {PostItem} from "../PostItem/PostItem";

import s from './posts.module.css';


export const Posts = () => {
    return (
        <div>
            <PostItem message={'Are you ok?'} likesCount={0} />
            <PostItem message={'What are ypu doing?'} likesCount={0} />
            <PostItem message={'I am here'} likesCount={0} />
            <PostItem message={'What is new?'} likesCount={0} />
        </div>
    );
};