import React, { Component } from 'react'
import HouseVotes from './HouseVotes'
import axios from 'axios'
import Graph from './Graph'
import {Bar} from 'react-chartjs-2'


export default class dash extends Component {
  constructor(){
    super()
    this.state = {
      items: [],
      isVoting: false,
      seeHouseVotes: false,
      // seeUserVotes: false,
      // seeSessionVotes: true
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
  
  isVoting(){
    this.setState({
      isVoting: !this.state.isVoting
    })
  }

  render() {
    // console.log(this.state.items)
    let itemsMap = this.state.items.map((elem) => {
      return <div key={elem.item_id}>
        <div>{elem.item_name}</div>
        <div>{elem.description}</div>
        {!this.state.isVoting ? (
          <button onDoubleClick={() => this.isVoting()} >view</button>
        ) : (
          <div>
            <p>{elem.full_description}</p>
            <span>YES:</span>
              <input type="checkbox"/>
            <span>NO:</span>
              <input type="checkbox"/>
            <p> hello testing toggle</p>
            <button onClick={() => this.isVoting()}>Close</button>
          </div>
        )}
      </div>
    });
    return (
      <div>
        <Graph/>
        {itemsMap}
        dash Component
      </div>
    )
  }
}
