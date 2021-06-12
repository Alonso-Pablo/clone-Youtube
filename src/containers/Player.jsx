import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getVideoSource } from '../actions';
import { Redirect } from 'react-router-dom';
import NotFound from '../containers/NotFound'

const Player = props => {

    // props.match.params; nos lo da router en el momento que generamos esta ruta
    // <Route exact path="/player/:id" component={Player} />

    const { id } = props.match.params;

    const hasPlaying = Object.keys(props.playing).length > 0; // Para saber cuantos elementos tiene este objeto 

    useEffect(() => {
        props.getVideoSource(id); // de Aqui va a reducer y filtre 
    }, [] ); // pasamos como segundo parametro un arreglo vacio para que no se ejecute infinitas veces y solo se ejecute una vez


    return hasPlaying ? (
        <div className="player">
            <video >
                <source src={props.playing.source} type="video/mp4"/>
            </video>
            <div className="Player-back">
                <button type="button" onClick={() => props.history.goBack()}>
                    Regresar
                </button>
            </div>
        </div>
    ) : <NotFound />  // <Redirect to="/404/" />
}
const mapStateToProps = state => {
    return {
        playing: state.playing,
    }
}

export default connect(mapStateToProps, null)(Player);

/*
// Actions
 export const getVideoSource = payload => ({
    type: 'GET_VIDEO_SOURCE',
    payload,
});

// Reducer:
case 'GET_VIDEO_SOURCE:
    return {
        ...state,
        playing: state.trends.find(item => item.id === Number(action.payload)) //si coincide vamos a tener este elemento. 
    || state.original.find(item => item.ide === Number(action.payload))
    || []
    }

// Lo que pasamos por parametro por url llega como un string. Estamos comparando un string con un valor numerico por eso el Number(action.payload)
*/