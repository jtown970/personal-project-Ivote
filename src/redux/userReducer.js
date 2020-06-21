import axios from 'axios'

const initialState = {
  userVotes: []
}

const GET_USER_VOTES = 'GET_USER_VOTES'
const USER_VOTES_BY_ID = 'USER_VOTES_BY_ID'
const ADD_USER_VOTES = 'ADD_USER_VOTES'
const DELETE_USER_VOTES = 'DELETE_USER_VOTES'

export function allUserVotes() {
  const userVotes = axios.get(`/user/votes`)
  return {
    type: GET_USER_VOTES,
    payload: userVotes
  }
}

export function userVotesById(userVotes) {
  return {
    type: USER_VOTES_BY_ID,
    payload: userVotes
  }
}

export function addUserVote(userVotes) {
  return {
    type: ADD_USER_VOTES,
    payload: userVotes
  }
}

export function deleteUserVote(userVotes) {
  return {
    type: DELETE_USER_VOTES,
    payload: userVotes
  }
}



export default function (state = initialState, action){
  switch(action.type){
    case GET_USER_VOTES:
      return {...state, userVotes: action.payload}
    default:
      return state
  }
}