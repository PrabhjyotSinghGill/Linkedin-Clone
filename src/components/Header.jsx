import React from 'react';
import "../views/Header.css";
import HeaderOption from './HeaderOption.jsx';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';

function Header(){
    return <div className="header">
        <div className="header__left">
            <img src="linkedin.svg" alt=""></img>
            <div className="header__search">
                {/*SearchIcon*/}
                <SearchIcon></SearchIcon>
                <input type="text"></input>
            </div>
        </div>
        <div className="header__right">
            <HeaderOption Icon={HomeIcon} title="Home"></HeaderOption>
            <HeaderOption Icon={SupervisorAccountIcon} title="My Network"></HeaderOption>
        </div>
    </div>
}
export default Header