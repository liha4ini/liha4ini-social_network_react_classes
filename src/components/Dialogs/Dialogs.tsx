import React from 'react';

import {DialogItem} from "../DialogItem/DialogItem";
import {MessageItem} from "../MessageItem/MessageItem";

import s from './Dialogs.module.css'
import {DialogsPageType} from "../../redux/state";


export const Dialogs = ({dialogsData, messagesData}: DialogsPageType) => {

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




