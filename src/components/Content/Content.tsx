import React from 'react';

import {Posts} from "../Posts/Posts";
import {PostsDataType} from "../../redux/state";

import './content.css'

type ContentPropsType = {
    postsData: PostsDataType[]
    alertFoo: () => void
    newTextMessage: string
    changeTextPost: (text: string) => void
}

export const Content = ({postsData, alertFoo, newTextMessage, changeTextPost}: ContentPropsType) => {
    let textareaValue = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
            alertFoo()
            changeTextPost('')
    }

    const onTextChange = () => {
        if (textareaValue.current) {
            changeTextPost(textareaValue.current.value)
        }
    }

    return (
        <>
            <h1>My Posts</h1>
            <div className='addPost_block'>
                <textarea ref={textareaValue} value={newTextMessage} onChange={onTextChange}></textarea>
                <button onClick={addPost}>Add Post</button>
            </div>
            <div className='content'>
                <Posts postsData={postsData} newTextMessage={newTextMessage}/>
            </div>
        </>
    );
};