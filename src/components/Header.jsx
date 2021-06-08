import React from 'react';

import '../assets/styles/components/Header.scss';

const Header = ({children, menuIcon, logoYT, appsIcon, optionsIcon, userIcon}) => (
    <header>
        <div className="header__menu-logo--container">
            <button className="menu-icon" type="button">
                <img src={menuIcon} alt="user icon" />
            </button>
            <img className="header__logo" src={logoYT} alt="logo of clonYoutube" />
        </div>

        {children}

        <div className="header__options">

            <div className="apps-icon">
                <img src={appsIcon} alt="apps icon" />
            </div>
            <div className="options-icon">
                <img src={optionsIcon} alt="options icon" />
            </div>

            <button className="sign-in" type="button">
                <img src={userIcon} alt="user icon" /><span>SIGN IN</span>
            </button>
        </div>
    </header>
);

export default Header;