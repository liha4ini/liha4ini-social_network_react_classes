import React from 'react';

import {PostItem} from "../PostItem/PostItem";
import {ProfilePageType} from "../../redux/state";


export const Posts = ({postsData}: ProfilePageType) => {
    console.log(postsData)
    const elements = postsData.map(el => {
        return (
            <PostItem message={el.message} likesCount={el.likesCount} id={el.id} key={el.id} />
        )
    })

    return (
        <div>
            {elements}
        </div>
    );
};