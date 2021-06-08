import React from 'react';

import '../assets/styles/components/Search.scss';

const Search = ({searchIcon, micIcon}) => (
    <div className="header__search--container">
        <form id="header__search-form">
            <label htmlFor="header-search-input"></label>
                <input type="text" id="header__search-input" placeholder="Search" />
            <button type="button" className="header__search-button">
                <img src={searchIcon} alt="search icon" />
            </button>                
        </form>

        <img src={micIcon} className="header__mic-icon" />
    </div>
);

export default Search