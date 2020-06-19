const initialState = {
  houseVotes: []
}

const GET_HOUSE = "GET_HOUSE";

export function getHouse(house) {
  return {
      type: GET_HOUSE,
      payload: house
  }
}

export default function (state = initialState, action){
  switch(action.type){
      case GET_HOUSE:
          return {...state, houseVotes: action.payload}
      default:
          return state
  }
}