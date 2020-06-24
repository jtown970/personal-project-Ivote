import axios from 'axios'

const initialState = {
  votes: [],
  user_id: 0,
  loading: false
}

const GET_USER_VOTES = 'GET_USER_VOTES'
const USER_VOTES_BY_ID = 'USER_VOTES_BY_ID'
const ADD_USER_VOTES = 'ADD_USER_VOTES'
const DELETE_USER_VOTES = 'DELETE_USER_VOTES'
const SUM_USER_VOTES_YES = 'SUM_USER_VOTES_YES'
const SUM_USER_VOTES_NO = 'SUM_USER_VOTES_NO'
const SUM_USER_VOTES_YES_ID = 'SUM_USER_VOTES_YES_ID'
const SUM_USER_VOTES_NO_ID = 'SUM_USER_VOTES_NO_ID'

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

export function addUserVote(item_id, users_id, vote_yes) {
  let data = axios.post(`/users/vote`, {item_id, users_id, vote_yes})
  .then(res => res.data)
  return {
    type: ADD_USER_VOTES,
    payload: data
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

export function sumUserVotesYesId() {
  const sumYesVoteById = axios.get(`/user/sum/vote/:id`)
  return {
    type: SUM_USER_VOTES_YES_ID,
    payload: sumYesVoteById
  }
}

export function sumUserVotesNoId() {
  const sumNoVoteById = axios.get(`/h/:id`)
  return {
    type: SUM_USER_VOTES_NO_ID,
    payload: sumNoVoteById
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
    //add votes
    case ADD_USER_VOTES + '_PENDING':
      return { ...state, loading: true }
    case ADD_USER_VOTES + '_FULFILLED':
      console.log('hit fulfillled');
      
      return { ...state, votes: action.payload, loading: false }

    // all user votes
    case GET_USER_VOTES:
      return {...state, votes: action.payload}
      // all yes user votes
    case SUM_USER_VOTES_YES + "_PENDING":
      return state
    case SUM_USER_VOTES_YES + "_FULFILLED":
      return {...state, sumYes: action.payload.data}
    case SUM_USER_VOTES_YES + "_REJECTED":
      return state
      // all user no votes
    case SUM_USER_VOTES_NO + "_PENDING":
      return state
    case SUM_USER_VOTES_NO + "_FULFILLED":
      return {...state, sumNo: action.payload.data}
    case SUM_USER_VOTES_NO + "_REJECTED":
      return state
      // yes votes by id
    case SUM_USER_VOTES_YES_ID + "_PENDING":
      return state 
    case SUM_USER_VOTES_YES_ID + "_FULFILLED":
      return {...state, sumYesVoteById: action.payload.data}
    case SUM_USER_VOTES_YES_ID + "_REJECTED":
      return state 
      // no votes by id
    case SUM_USER_VOTES_NO_ID + "_PENDING":
      return state 
    case SUM_USER_VOTES_NO_ID + "_FULFILLED":
      return {...state, sumNoVoteById: action.payload.data}
    case SUM_USER_VOTES_NO_ID + "_REJECTED":
      return state 
    default:
      return state
  }
}