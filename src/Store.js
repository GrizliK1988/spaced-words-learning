/* eslint-disable no-undef */
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import learningSets from './reducers/LearningSetsReducer';

const reducers = combineReducers({
    learningSets,
});

export default createStore(
    reducers,
    compose(applyMiddleware(thunkMiddleware),
        typeof window !== 'undefined' && window.devToolsExtension ? window.devToolsExtension() : f => f)
);