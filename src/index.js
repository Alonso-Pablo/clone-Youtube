import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';

import App from './routes/App';

// Aqui irian los datos de nuestra API (fake)
const initialState = 
{
    "totalUsers": 2,
    "idGenerator": 2,
    "isplaying": {},
    "isLogged": true,
    "userLogged": {
        "name": "Capitan Sidoku",
        "email": "Sidokunoice@gmail.com"
    },
    "users": [
        {
            "id": 1,
            "user": {
                "name": "Alonso Nicolás Pablo",
                "email": "pablo_nicolasalonso@yahoo.com",
            }
        },
        {
            "id": 2,
            "user": {
                "name": "The Best Developer",
                "email": "the_best_developer@gmail.com",
            }
        },
    ],
    "queueList": [],
}
// Store para el Provider; el segundo parametro seria el estado inicial
const store = createStore(reducer, initialState);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById("app")

);