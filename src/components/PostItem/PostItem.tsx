import React from 'react';

import s from './postItem.module.css';

type PostItemPropsType = {
    message: string
}

export const PostItem = (props: PostItemPropsType) => {
    return (
        <div className={s.wrapper}>
            <img className={s.logo} src="https://avatars.mds.yandex.net/i?id=2a00000179fac26c1049ef26a78eb267c622-4304165-images-thumbs&n=13" alt="logo"/>
            <span className={s.message}>{props.message}</span>
        </div>
    );
};
