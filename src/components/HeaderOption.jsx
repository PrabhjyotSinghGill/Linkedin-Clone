import React from 'react';
import "../views/HeaderOption.css"
import {Avatar} from "@mui/material"

function HeaderOption({avatar, Icon, title, onClick}){
    return (<div onClick={onClick} className="headerOption">
        {Icon && <Icon className="headerOption__icon"></Icon>}
        {avatar && (
            <Avatar className="headerOption__icon" src={avatar}></Avatar>
        )}
        <h3 className="headerOption__title">{title}</h3>
    </div>);
}

export default HeaderOption;