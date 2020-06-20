import React, { Component } from 'react'
import HouseVotes from './HouseVotes'
import axios from 'axios'

export default class dash extends Component {
  constructor(){
    super()
    this.state = {
      items: []
    }
    this.allItems = this.allItems.bind(this)
  }

  componentDidMount(){
    this.allItems()
  }

  allItems(){
    axios.get(`/items`)
    .then(res => {
      this.setState({
        items: res.data
      })
    })
  }

  render() {
    console.log(this.state.items)
    let itemsMap = this.state.items((elem) => {
      return <div key={elem.item_id}>
        <span>{elem.item_name}</span>
      </div>
    })
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