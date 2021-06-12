import React from 'react';

import '../assets/styles/components/Search.scss';

const Search = ({searchIcon, micIcon}) => (
    <div className="header__search--container">
        <form className="header__search-form">

            <input type="text" className="header__search-input" placeholder=" Search" />

            <button type="button" className="header__search-button">
                <img src={searchIcon} alt="search icon" />
            </button> 

        </form>
        <div  className="header__mic-icon">
            <img src={micIcon} />
        </div>
    </div>
);

export default Search