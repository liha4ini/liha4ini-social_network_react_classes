import s from "./MessageItem.module.css";
import React from "react";

type MessageItemPropsType = {
    message: string
    id: number
}

export const MessageItem = ({message, ...props}: MessageItemPropsType) => {
    return (
        <div className={s.message}>{message}</div>
    )
}