import { createStore, applyMiddleware, combineReducers } from 'redux';
import promiseMiddleware from 'redux-promise-middleware'
import authReducer from './authReducer';
import userReducer from './userReducer';
import houseReducer from './houseReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    house: houseReducer
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware));