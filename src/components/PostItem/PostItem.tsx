import React from 'react';

import s from './postItem.module.css';

type PostItemPropsType = {
    message: string
    likesCount: number
}

export const PostItem = ({likesCount, message}: PostItemPropsType) => {
    return (
        <div className={s.wrapper}>
            <div className={s.textBlock}>
                <img className={s.logo} src="https://avatars.mds.yandex.net/i?id=2a00000179fac26c1049ef26a78eb267c622-4304165-images-thumbs&n=13" alt="logo"/>
                <span className={s.message}>{message}</span>
            </div>
            <div className={s.likesBlock}>
                Likes Count: {likesCount}
            </div>
            <span className={s.underLine}></span>
        </div>
    );
};
