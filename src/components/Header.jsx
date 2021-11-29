import React from 'react';
import "../views/Header.css";
import SearchIcon from '@mui/icons-material/Search';

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
        <div className="header__right"></div>
    </div>
}
export default Header