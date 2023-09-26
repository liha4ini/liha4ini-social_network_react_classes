import React from 'react';

import {DialogItem} from "../DialogItem/DialogItem";
import {MessageItem} from "../MessageItem/MessageItem";

import s from './Dialogs.module.css'


export const Dialogs = () => {
    return (
        <div className={s.dialogsWrapper}>
            <div className={s.usersWrapper}>
                <DialogItem name='Kate' id={1} />
                <DialogItem name='John' id={2} />
                <DialogItem name='Eric' id={3} />
            </div>
            <div className={s.messagesWrapper}>
                <MessageItem message={'Yo'} />
                <MessageItem message={"Hi"} />
                <MessageItem message={'Bye'} />
            </div>
        </div>
    );
};




