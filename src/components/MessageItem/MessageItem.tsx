import s from "./MessageItem.module.css";
import React from "react";

type MessageItemPropsType = {
    message: string
}

export const MessageItem = ({message}: MessageItemPropsType) => {
    return (
        <div className={s.message}>{message}</div>
    )
}