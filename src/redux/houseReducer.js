import axios from 'axios'
const initialState = {
  houseVotes: []
}

const GET_HOUSE = "GET_HOUSE";
const SUM_HOUSE_YES_VOTES = 'SUM_HOUSE_YES_VOTES'
const SUM_HOUSE_NO_VOTES = 'SUM_HOUSE_NO_VOTES'

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

export default function (state = initialState, action){
  switch(action.type){
      case GET_HOUSE:
          return {...state, houseVotes: action.payload}
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
      default:
          return state
  }
}