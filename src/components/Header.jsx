import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { signOut } from '../actions/index'
import gravatar from '../utils/gravatar';

import '../assets/styles/components/Header.scss';


const Header = (props) => {

    const history = useHistory();
    
    const { children, menuIcon, logoYT, appsIcon, optionsIcon, cameraIcon, bellIcon, userIcon,
        isLogged, userLogged,
        userMenuIcon, dolarIcon, ytStudioIcon, switchIcon, signOutIcon } = props;

    console.log(isLogged);
    console.log(userLogged)

    const [ userLogedMenu, setLogedMenu ] = useState(false);

    const handleUserOptions = () => {
        setLogedMenu(!userLogedMenu);
        return userLogedMenu;
    }
    const handleSignOut = () => {
        props.signOut();
        history.push('/chooseaccount');
    }


    return (
    
        <div className="header-header">
            <div className="header__menu-logo--container">
                <a href="#" className="menu-icon" type="button">
                    <img src={menuIcon} alt="user icon" />
                </a>
                <img className="header__logo" src={logoYT} alt="logo of clonYoutube" />
            </div>

            {children}

            <div className="header__options">
                {isLogged &&
                    <div className="header__camera-icon">
                        <img src={cameraIcon} alt="" />
                    </div>
                }

                <div className="apps-icon">
                    <img src={appsIcon} alt="apps icon" />
                </div>

                {!isLogged &&
                <div className="options-icon">
                    <img src={optionsIcon} alt="options icon" />
                </div>
                }

                {!isLogged &&
                <Link to="/chooseaccount" className="header__sign-in" type="button">
                    <img className="header__user-icon" src={userIcon} alt="user icon" />
                    <span className="header__sign-in--span">SIGN IN</span>
                </Link>
                }

                {isLogged &&
                    <div className="header__bell-icon">
                        <img src={bellIcon} alt="bell icon" />
                    </div>
                }


                {isLogged &&
                <div className="header__gravatar-user" onClick={handleUserOptions}>
                    <img src={gravatar(userLogged.email)} alt={userLogged.email} />
                    {userLogedMenu &&
                    <div className="gravatar-user__userloged-menu">

                        <div className="userloged-menu__header">
                            <img className="userloged-menu__header--gravatar-user" src={gravatar(userLogged.email)} alt={userLogged.email} />
                            <div className="userloged-menu__header---username-setting">
                                <span className="userloged-menu__header--username">{userLogged.name}</span>
                                <span className="userloged-menu__header--setting">Manage your Google Account</span>
                            </div>
                        </div>

                        <ul className="userloged-menu__account-options">

                            <li className="account-options__option">
                                <img className="account-options__option--image" src={userMenuIcon} alt="You channel" />
                                <span className="account-options__option--text">Your channel</span>
                            </li>

                            <li className="account-options__option">
                                <img className="account-options__option--image" src={dolarIcon} alt="Purchases and memberships" />
                                <span className="account-options__option--text">Purchases and memberships</span> 
                            </li>

                            <li className="account-options__option">
                                <img className="account-options__option--image" src={ytStudioIcon} alt="YouTube Studio" />
                                <span className="account-options__option--text">YouTube Studio</span> 
                            </li>

                            <li className="account-options__option">
                                <img className="account-options__option--image" src={switchIcon} alt="Switch account" />
                                <span className="account-options__option--text">Switch account</span> 
                            </li>

                            <li className="account-options__option" onClick={handleSignOut}>
                                <img className="account-options__option--image" src={signOutIcon} alt="Sign out" />
                                <span className="account-options__option--text">Sign out</span> 
                            </li>
                        </ul>
                        <ul className="userloged-menu__web-options">
                            <li>Appearance: Device theme</li>
                            <li>Language: English</li>
                            <li>Location: United State</li>
                            <li>Settings</li>
                            <li>Your data in cloneYouTube</li>
                            <li>Help</li>
                            <li>Send feedback</li>
                            <li>Keyboard shortcuts</li>
                        </ul>
                        <div className="userloged-menu__strict-mode"></div>
                    </div>
                    }
                </div>
                }
                
                {/* <svg viewBox="0 0 24 24"><g><path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2z"></path></g></svg> */}
                

            </div>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        isLogged: state.isLogged,
        userLogged: state.userLogged
    }
}
const mapDispatchToProps = {
    signOut,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
