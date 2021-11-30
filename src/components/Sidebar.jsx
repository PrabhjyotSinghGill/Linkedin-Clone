import React from 'react';
import "../views/Sidebar.css";
import {Avatar} from "@mui/material";

function Sidebar(){

    return(<div className="sidebar">
        <div className="sidebar__top">
            <img src="nat.jpg" alt=""></img>
            <Avatar src="gill.jpg" className="sidebar__avatar"></Avatar> 
            <h2>Prabhjyot Singh Gill</h2>  
            <h4>prabhjyotsinghgill@gmail.com</h4>
        </div>
        <div className="sidebar__stats">
            <div className="sidebar__stat">
                <p>Who viewed you</p>
                <p className="sidebar__statNumber">2,543</p>
            </div>
            <div className="sidebar__stat">
                <p>Views on post</p>
                <p className="sidebar__statNumber">2,448</p>
            </div>
        </div>
        <div className="sidebar__bottom">
            <p>Recent</p>
        </div>
    </div>);
}
export default Sidebar