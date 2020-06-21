import axios from 'axios'

const initialState = {
  votes: []
}

const GET_USER_VOTES = 'GET_USER_VOTES'
const USER_VOTES_BY_ID = 'USER_VOTES_BY_ID'
const ADD_USER_VOTES = 'ADD_USER_VOTES'
const DELETE_USER_VOTES = 'DELETE_USER_VOTES'
const SUM_USER_VOTES_YES = 'SUM_USER_VOTES_YES'
const SUM_USER_VOTES_NO = 'SUM_USER_VOTES_NO'

export function allUserVotes(userVotes) {
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

export function sumUserVoteYes() {
  const sumYes = axios.get(`/users/sum/votes/yes`)
  return {
    type: SUM_USER_VOTES_YES,
    payload: sumYes
  }
}

export function sumUserVoteNo() {
  const sumNo = axios.get(`/users/sum/votes/no`)
  return {
    type: SUM_USER_VOTES_NO,
    payload: sumNo
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
      return {...state, votes: action.payload}
    default:
      return state
  }
}