import axios from 'axios'
const initialState = {
  houseVotes: [],
  houseRep: []
}

const GET_HOUSE = "GET_HOUSE";
const SUM_HOUSE_YES_VOTES = 'SUM_HOUSE_YES_VOTES'
const SUM_HOUSE_NO_VOTES = 'SUM_HOUSE_NO_VOTES'
const HOUSE_MEMBERS = 'HOUSE_MEMBERS'

export function getHouse(house) {
  return {
      type: GET_HOUSE,
      payload: house
  }
}




export function sumAllHouseYes(){
const sumHouseYes = axios.get(`/house/sum/yes/votes`)
  return {
    type: SUM_HOUSE_YES_VOTES,
    payload: sumHouseYes
  }
}

export function sumAllHouseNo(){
  const sumHouseNo = axios.get(`/house/sum/no/votes`)
    return {
      type: SUM_HOUSE_NO_VOTES,
      payload: sumHouseNo
    }
  }

  export function houseMembers(){
    const members = axios.get(`/house/reps`)
      return {
        type: HOUSE_MEMBERS,
        payload: members
      }
    }

export default function (state = initialState, action){
  switch(action.type){
      // case GET_HOUSE:
      //     return {...state, houseVotes: action.payload}
      // testing get house
      // case GET_HOUSE + "_PENDING":
      //   return state
      // case GET_HOUSE + "_FULFILLED":
      //   return {...state, houseVotes: action.payload}
      // case GET_HOUSE + "_REJECTED":
      //   return state
      //testing get house 
      // all yes house votes
      case SUM_HOUSE_YES_VOTES + "_PENDING":
        return state
      case SUM_HOUSE_YES_VOTES + "_FULFILLED":
        return {...state, sumHouseYes: action.payload.data}
      case SUM_HOUSE_YES_VOTES + "_REJECTED":
        return state
       // all no house votes
      case SUM_HOUSE_NO_VOTES + "_PENDING":
        return state
      case SUM_HOUSE_NO_VOTES + "_FULFILLED":
        return {...state, sumHouseNo: action.payload.data}
      case SUM_HOUSE_NO_VOTES + "_REJECTED":
        return state
      // get all house reps
      case HOUSE_MEMBERS + "_PENDING":
        return state
      case HOUSE_MEMBERS + "_FULFILLED":
        return {...state, houseRep: action.payload.data}
      case HOUSE_MEMBERS + "_REJECTED":
        return state
      default:
          return state
  }
}