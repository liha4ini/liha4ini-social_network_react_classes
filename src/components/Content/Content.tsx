import React from 'react';

import {Posts} from "../Posts/Posts";
import {PostsDataType} from "../../redux/state";

import './content.css'

type ContentPropsType = {
    postsData: PostsDataType[]
    alertFoo: (text: string) => void
}

export const Content = ({postsData, alertFoo}: ContentPropsType) => {
    let textareaValue = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        if (textareaValue.current) {
            alertFoo(textareaValue.current.value)
            textareaValue.current.value = ''
        }
    }

    return (
        <>
            <h1>My Posts</h1>
            <div className='addPost_block'>
                <textarea ref={textareaValue}></textarea>
                <button onClick={addPost}>Add Post</button>
            </div>
            <div className='content'>
                <Posts postsData={postsData}/>
            </div>
        </>
    );
};