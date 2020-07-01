  
import axios from 'axios'

const initialState = {
  user: {},
  isLoggedIn: false,
  registering: false,
  user_name: '',
  // password: '',
  location: ''

}

const REGISTER_USER = 'REGISTER_USER'
const  LOGIN_USER = 'LOGIN_USER'
const LOGOUT_USER = 'LOGOUT_USER'
const GET_USER = 'GET_USER'


export function registerUser(auth){
  return {
    type: REGISTER_USER,
    payload: auth
  }
}

export function loginUser(auth){
  return {
    type: LOGIN_USER,
    payload: auth
  }
}

export function logoutUser(){
  return {
    type: LOGOUT_USER,
    payload: initialState
  }
}

export function getUser(){
  const user = axios.get(`/auth/user`)
    return {
      type: GET_USER,
      payload: user 
    }
}


export default function (state = initialState, action){
  switch(action.type){
    case REGISTER_USER:
      return {...state, auth:action.payload, user_name:action.payload.user_name, location:action.payload.location, isLoggedIn: true}
    case LOGIN_USER:
      return {...state, user: action.payload, isLoggedIn: true}

    case GET_USER + "_PENDING":
        return state
    case GET_USER + "_FULFILLED":
        return {...state, user: action.payload.data, isLoggedIn: true}
    case GET_USER + "_REJECTED":
        return state
    case LOGOUT_USER:
      return initialState
    default:
      return initialState
  }
}