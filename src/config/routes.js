import React from 'react';
import { Router, Route, IndexRoute , browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './configStore';

import App from '../App';
import ProductContainer from '../containers/productContainer';


const routes = (
    <Provider store={store} >
        <Router history={browserHistory}>
            <Route path="/" component={App} >
                <IndexRoute component={ProductContainer} />
            </Route>
        </Router>
    </Provider>
);

export default routes;