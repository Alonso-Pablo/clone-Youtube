import React from 'react';
// Components:
import Search from '../components/Search';

// Assets;
    // Search:
import searchIcon from '../assets/static/search-icon.svg'
import micIcon from '../assets/static/mic-icon.svg';


const NotFound = () => {

    const search = {searchIcon, micIcon};

    return (
    <>
        <span>¡Vaya! Esta página no está disponible.</span>
        <span>Prueba a realizar otra búsqueda.</span>
        <Search {...search} />
    </>
    )
};

export default NotFound;