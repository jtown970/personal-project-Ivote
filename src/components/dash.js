import React, { Component } from 'react'
import HouseVotes from './HouseVotes'

export default class dash extends Component {
  render() {
    return (
      <div>
        dash Component
        <HouseVotes/>
    <div>{this.props.rep_name}</div>
      </div>
    )
  }
}


// return <Link  className="house-voters" key={elem.house_votes_id}>
//         <div>{elem.rep_name}</div>
//         <div>{elem.location}</div>
//         <div>{elem.item_name}</div>
//         <div>{elem.voted_yes}</div>
//         <div>{elem.passed}</div>
//       </Link>