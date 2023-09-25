import React from 'react';

import s from './Dialogs.module.css'

export const Dialogs = () => {
    return (
        <div className={s.dialogsWrapper}>
            <div className={s.usersWrapper}>
                <div className={s.user}>Kate</div>
                <div className={s.user}>John</div>
                <div className={s.user}>Mary</div>
            </div>
            <div className={s.messagesWrapper}>
                <div className={s.message}>Yo</div>
                <div className={s.message}>Hi</div>
                <div className={s.message}>Bye</div>
            </div>
        </div>
    );
};

