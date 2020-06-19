import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
// import getHouse from '../redux/houseReducer'
// import { connect } from 'react-redux'

class HouseVotes extends Component {
  constructor(){
    super()
    this.state = {
      houseVoter: [],
    }
    this.getHouseVotes = this.getHouseVotes.bind(this)
  }

  componentDidMount(){
    this.getHouseVotes()
  }

  getHouseVotes(){
    axios.get(`/house/votes`, this.state.houseVoter)
    .then(res => {
      this.setState({
        houseVoter: res.data,
      })
    })

  }
  
  
  render() {
    console.log(this.state.houseVoter);

    let houseVotesMap = this.state.houseVoter.map((elem) => {
      return <Link  className="house-voters" key={elem.house_votes_id}>
        <div>{elem.rep_name}</div>
        <div>{elem.location}</div>
        <div>{elem.item_name}</div>
        <div>{elem.voted_yes}</div>
        <div>{elem.passed}</div>
      </Link>
    })
    return (
      <div>
        <div>{houseVotesMap}</div>
        house votes
      </div>
    )
  }
}


export default (HouseVotes)
