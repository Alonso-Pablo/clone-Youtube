import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


import LoginContainer from '../components/LoginContainer'
import Account from '../components/Account'

import '../assets/styles/ChooseAccount.scss';


const ChooseAccount = props => {

    const { users } = props

    // console.log(users.map(item => console.log(item.user.email)))


    return (
        <>
            <LoginContainer>

                <section className="choose-account">

                    <div className="google-logo">
                        <svg viewBox="0 0 75 24" width="75" height="24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <g><path fill="#ea4335" d="M67.954 16.303c-1.33 0-2.278-.608-2.886-1.804l7.967-3.3-.27-.68c-.495-1.33-2.008-3.79-5.102-3.79-3.068 0-5.622 2.41-5.622 5.96 0 3.34 2.53 5.96 5.92 5.96 2.73 0 4.31-1.67 4.97-2.64l-2.03-1.35c-.673.98-1.6 1.64-2.93 1.64zm-.203-7.27c1.04 0 1.92.52 2.21 1.264l-5.32 2.21c-.06-2.3 1.79-3.474 3.12-3.474z"></path></g>
                            <g><path fill="#34a853" d="M58.193.67h2.564v17.44h-2.564z"></path></g>
                            <g><path fill="#4285f4" d="M54.152 8.066h-.088c-.588-.697-1.716-1.33-3.136-1.33-2.98 0-5.71 2.614-5.71 5.98 0 3.338 2.73 5.933 5.71 5.933 1.42 0 2.548-.64 3.136-1.36h.088v.86c0 2.28-1.217 3.5-3.183 3.5-1.61 0-2.6-1.15-3-2.12l-2.28.94c.65 1.58 2.39 3.52 5.28 3.52 3.06 0 5.66-1.807 5.66-6.206V7.21h-2.48v.858zm-3.006 8.237c-1.804 0-3.318-1.513-3.318-3.588 0-2.1 1.514-3.635 3.318-3.635 1.784 0 3.183 1.534 3.183 3.635 0 2.075-1.4 3.588-3.19 3.588z"></path></g>
                            <g><path fill="#fbbc05" d="M38.17 6.735c-3.28 0-5.953 2.506-5.953 5.96 0 3.432 2.673 5.96 5.954 5.96 3.29 0 5.96-2.528 5.96-5.96 0-3.46-2.67-5.96-5.95-5.96zm0 9.568c-1.798 0-3.348-1.487-3.348-3.61 0-2.14 1.55-3.608 3.35-3.608s3.348 1.467 3.348 3.61c0 2.116-1.55 3.608-3.35 3.608z"></path></g>
                            <g><path fill="#ea4335" d="M25.17 6.71c-3.28 0-5.954 2.505-5.954 5.958 0 3.433 2.673 5.96 5.954 5.96 3.282 0 5.955-2.527 5.955-5.96 0-3.453-2.673-5.96-5.955-5.96zm0 9.567c-1.8 0-3.35-1.487-3.35-3.61 0-2.14 1.55-3.608 3.35-3.608s3.35 1.46 3.35 3.6c0 2.12-1.55 3.61-3.35 3.61z"></path></g>
                            <g><path fill="#4285f4" d="M14.11 14.182c.722-.723 1.205-1.78 1.387-3.334H9.423V8.373h8.518c.09.452.16 1.07.16 1.664 0 1.903-.52 4.26-2.19 5.934-1.63 1.7-3.71 2.61-6.48 2.61-5.12 0-9.42-4.17-9.42-9.29C0 4.17 4.31 0 9.43 0c2.83 0 4.843 1.108 6.362 2.56L14 4.347c-1.087-1.02-2.56-1.81-4.577-1.81-3.74 0-6.662 3.01-6.662 6.75s2.93 6.75 6.67 6.75c2.43 0 3.81-.972 4.69-1.856z"></path></g>
                        </svg>
                    </div>

                    <div className="choose-account__container">

                        <h1>Choose an account</h1>

                        <ul className="accounts">
                            
                            {users.map(object =>
                                <Account key={object.id}
                                {...object.user} />)}


                            <li className="account__other-options">
                                <Link to="/signin">
                                    <svg aria-hidden="true" fill="#5f6368" width="20px" height="20px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10c5.52,0,10-4.48,10-10C22,6.48,17.52,2,12,2z M7.07,18.28 c0.43-0.9,3.05-1.78,4.93-1.78s4.51,0.88,4.93,1.78C15.57,19.36,13.86,20,12,20S8.43,19.36,7.07,18.28z M18.36,16.83 c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93,0.59-6.36,2.33C4.62,15.49,4,13.82,4,12c0-4.41,3.59-8,8-8c4.41,0,8,3.59,8,8 C20,13.82,19.38,15.49,18.36,16.83z"></path><path d="M12,6c-1.94,0-3.5,1.56-3.5,3.5S10.06,13,12,13c1.94,0,3.5-1.56,3.5-3.5S13.94,6,12,6z M12,11c-0.83,0-1.5-0.67-1.5-1.5 C10.5,8.67,11.17,8,12,8c0.83,0,1.5,0.67,1.5,1.5C13.5,10.33,12.83,11,12,11z"></path></svg>
                                    <span>Use another account</span>
                                </Link>
                            </li>
                            <li className="account__other-options">
                                <svg aria-hidden="true" fill="#5f6368" width="20px" height="20px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M9,12 C11.21,12 13,10.21 13,8 C13,5.79 11.21,4 9,4 C6.79,4 5,5.79 5,8 C5,10.21 6.79,12 9,12 Z M9,6 C10.1,6 11,6.9 11,8 C11,9.1 10.1,10 9,10 C7.9,10 7,9.1 7,8 C7,6.9 7.9,6 9,6 Z M9,13 C6.33,13 1,14.34 1,17 L1,20 L17,20 L17,17 C17,14.34 11.67,13 9,13 Z M15,18 L3,18 L3,17.01 C3.2,16.29 6.3,15 9,15 C11.7,15 14.8,16.29 15,17 L15,18 Z M18,11 L15,11 L15,9 L18,9 L20,9 L23,9 L23,11 L20,11 L18,11 Z"></path></svg>
                                <span>Remove an account</span>
                            </li>
                        </ul>
                   
                    </div>

                </section>

            </LoginContainer>
        </>
    )
}

const mapStateToProps = state => {
    return {
        users: state.users,
    }
}

export default connect(mapStateToProps, null)(ChooseAccount);