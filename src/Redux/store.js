import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import rootReducer from './reducer';

const store = createStore(rootReducer, applyMiddleware(logger));
// const store = createStore(rootReducer
//     , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;