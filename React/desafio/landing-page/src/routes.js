import React from 'react';
import {
    Switch,
    Route,
    BrowserRouter
} from 'react-router-dom';

import Home from './Pages/Home';
import Offer from './Pages/Offer';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/offer' component={Offer}/>
            </Switch>
        </BrowserRouter>
    )
}