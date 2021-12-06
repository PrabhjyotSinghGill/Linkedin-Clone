import React from 'react';
import "../views/HeaderOption.css";
import {Avatar} from "@mui/material";
import {useSelector} from "react-redux";
import {selectUser} from "../features/userSlice.js";

function HeaderOption({avatar, Icon, title, onClick}){
    const user = useSelector(selectUser);
    
    return (<div onClick={onClick} className="headerOption">
        {Icon && <Icon className="headerOption__icon"></Icon>}
        {avatar && (
            <Avatar className="headerOption__icon" src={avatar}></Avatar>
        )}
        <h3 className="headerOption__title">{title}</h3>
    </div>);
}

export default HeaderOption;