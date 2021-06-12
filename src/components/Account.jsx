import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import userIcon from '../assets/static/user-icon.svg';
import '../assets/styles/components/Account.scss';
import { getAccount } from '../actions';

const Account = (props) => {
    const history = useHistory();

    const { name, email } = props;

    const handleOnClick = (n, e) => {
        let userInfo = { 
            "name": `${n}`,
            "email": `${e}`
        };
        props.getAccount(userInfo);
        history.push('/')
    }

    return (
        <>
            <div onClick={() => handleOnClick(name,email)}>
                <li className="account">
                    
                    <img className="account__user-icon" src={userIcon} alt="user photo profile" />
                    <div className="account__user-data">
                        <span className="user-data__name">{name}</span>
                        <span className="user-data_email">{email}</span>
                    </div>
                    <div className="account__user-status">
                        <span>Signed out</span>
                    </div>
                </li>
            </div>
        </>
    )
};

const mapDispatchToProps = {
    getAccount,
}

export default connect(null, mapDispatchToProps)(Account);