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
const SUM_USER_VOTES_YES_ID = 'SUM_USER_VOTES_YES_ID'

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

export function sumUserVotesYesId(userVotes) {
  return {
    type: SUM_USER_VOTES_YES_ID,
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
      return {...state, votes: action.payload}
    case SUM_USER_VOTES_YES + "_PENDING":
      return state
    case SUM_USER_VOTES_YES + "_FULFILLED":
      return {...state, sumYes: action.payload.data}
    case SUM_USER_VOTES_YES + "_REJECTED":
      return state
    case SUM_USER_VOTES_NO + "_PENDING":
      return state
    case SUM_USER_VOTES_NO + "_FULFILLED":
      return {...state, sumNo: action.payload.data}
    case SUM_USER_VOTES_NO + "_REJECTED":
      return state
    case SUM_USER_VOTES_YES_ID:
      return {...state }
    default:
      return state
  }
}