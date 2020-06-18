import axios from 'axios'

const initialState = {
  user: null,
  isLoggedIn: false
}

const  LOGIN_USER = 'LOGIN_USER'
const LOGOUT_USER = 'LOGOUT_USER'
const GET_USER = 'GET_USER'

export function loginUser(user){
  return {
    type: LOGIN_USER,
    payload: initialState
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
    case LOGIN_USER:
      return {...state, user: action.payload, isLoggedIn: true}
    case LOGOUT_USER:
      return initialState
      
    default:
      return initialState
  }
}