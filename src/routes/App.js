import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../containers/Home';
import ChooseAccount from '../containers/ChooseAccount';
import SignIn from '../containers/SignIn'
import NotFound from '../containers/NotFound';


const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/chooseaccount" component={ChooseAccount} />
            <Route exact path="/signin" component={SignIn} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default App;