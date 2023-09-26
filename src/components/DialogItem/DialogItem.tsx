import {NavLink} from "react-router-dom";
import s from "./DialogItem.module.css";
import React from "react";

type DialogItemPropsType = {
    name: string
    id: number
}

export const DialogItem = ({name, id}: DialogItemPropsType) => {
    return (
        <NavLink to={`/messages/${id}`} className={s.user}>{name}</NavLink>
    )
}