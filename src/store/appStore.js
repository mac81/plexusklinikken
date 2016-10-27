import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from '../reducers/reducer';
//import createLogger from 'redux-logger';

// const loggerMiddleware = createLogger({
//     level: 'info',
//     collapsed: true
// });

const middlewares = [thunkMiddleware];

if (process.env.NODE_ENV === 'development') {
    const createLogger = require('redux-logger');
    const logger = createLogger();
    middlewares.push(logger);
}

let finalCreateStore = compose(
    applyMiddleware(...middlewares)
)(createStore);

export default function appStore(initialState) {
    const store = finalCreateStore(reducer, initialState);

    return store;
}
