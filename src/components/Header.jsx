import React from 'react';
import "../views/Header.css";
import HeaderOption from './HeaderOption.jsx';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { auth } from '../firebase';
import { useDispatch, useSelector} from "react-redux";
import {logout,selectUser} from "../features/userSlice.js";

function Header(){
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const logoutOfApp= () =>{
        dispatch(logout())
        auth.signOut();
    };
    return <div className="header">
        <div className="header__left">
            <img src="linkedinhalf.svg" alt=""></img>
            <div className="header__search">
                {/*SearchIcon*/}
                <SearchIcon></SearchIcon>
                <input placeholder="Search" type="text"></input>
            </div>
        </div>
        <div className="header__right">
            <HeaderOption Icon={HomeIcon} title="Home"></HeaderOption>
            <HeaderOption Icon={SupervisorAccountIcon} title="My Network"></HeaderOption>
            <HeaderOption Icon={BusinessCenterIcon} title="Jobs"></HeaderOption>
            <HeaderOption Icon={ChatIcon} title="Messaging"></HeaderOption>
            <HeaderOption Icon={NotificationsIcon} title="Notifications"></HeaderOption>
            <HeaderOption avatar={true} title={user?.displayName} onClick={logoutOfApp}></HeaderOption>
        </div>
    </div>
}
export default Header