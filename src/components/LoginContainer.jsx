import React from 'react';
import '../assets/styles/components/LoginContainer.scss'
const LoginContainer = ({children}) => {

    return (
        <>
            <div className="login--blank"></div>
            <div className="login">
                {children}
            </div>
            <div className="login-footer">
                <span>English (United States)</span>
                <ul>
                    <li>
                        <a href="https://support.google.com/accounts?hl=en" target="_blank">Help</a>
                    </li>
                    <li>
                        <a href="https://accounts.google.com/TOS?loc=AR&hl=en&privacy=true" target="_blank">Privacy</a>
                    </li>
                    <li>
                        <a href="https://accounts.google.com/TOS?loc=AR&hl=en" target="_blank">Terms</a>
                    </li>
                </ul>
            </div>
            <div className="login--blank"></div>
        </>
    )
}

export default LoginContainer;
