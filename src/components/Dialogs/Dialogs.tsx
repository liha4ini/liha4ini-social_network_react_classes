import React from 'react';

import {DialogItem} from "../DialogItem/DialogItem";
import {MessageItem} from "../MessageItem/MessageItem";

import s from './Dialogs.module.css'


export const Dialogs = () => {

    const dialogsData = [
        {id: 1, name: 'Kate'},
        {id: 2, name: 'John'},
        {id: 3, name: 'Eric'},
    ]

    const messagesData = [
        {id: 1, message: 'Yo'},
        {id: 2, message: 'What are ypu doing?'},
        {id: 3, message: 'I am here'},
    ]

    return (
        <div className={s.dialogsWrapper}>
            <div className={s.usersWrapper}>
                {
                    dialogsData.map(el => {
                        return (
                            <DialogItem name={el.name} id={el.id} key={el.id} />
                        )
                    })
                }
            </div>
            <div className={s.messagesWrapper}>
                {
                    messagesData.map(el => {
                        return (
                            <MessageItem message={el.message} id={el.id} key={el.id} />
                        )
                    })
                }
            </div>
        </div>
    );
};




