import React from 'react';
import {Posts} from "../Posts/Posts";

import './content.css'
import {ProfilePageType} from "../../redux/state";


export const Content = ({postsData}: ProfilePageType) => {

    return (
        <>
            <h1>My Posts</h1>
            <div className='addPost_block'>
                <textarea></textarea>
                <button onClick={() => alert('hello')}>Add Post</button>
            </div>
            <div className='content'>
                <Posts postsData={postsData}/>
            </div>
        </>
    );
};