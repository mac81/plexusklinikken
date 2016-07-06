import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from '../reducers/reducer';
import createLogger from 'redux-logger';

const loggerMiddleware = createLogger({
    level: 'info',
    collapsed: true
});

let finalCreateStore = compose(
    applyMiddleware(thunkMiddleware, loggerMiddleware)
)(createStore);

export default function appStore(initialState) {
    const store = finalCreateStore(reducer, initialState);

    return store;
}
