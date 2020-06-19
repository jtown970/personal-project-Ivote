import { createStore, applyMiddleware, combineReducers } from 'redux';
import promiseMiddleware from 'redux-promise-middleware'
import authReducer from './authReducer';
import userReducer from './userReducer';
import houseReducer from './houseReducer';
import { composeWithDevTools } from 'redux-devtools-extension'


const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    house: houseReducer
})

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(promiseMiddleware)));