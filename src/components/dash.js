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
    // this.props.getCartDataYesVotes()

  }

  allItems(){
    axios.get(`/items`)
    .then(res => {
      this.setState({
        items: res.data
      })
    })
  }

  seeHouseVotes(){
    this.setState({
      seeHouseVotes: !this.state.seeHouseVotes
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
          {!this.state.seeHouseVotes ? (
            <button onClick={() => this.seeHouseVotes()}>See all house Votes</button>
            ) : (
            <Bar
            data={this.state.props.chartData1}
            options={{
              title:{
                display:this.props.displayTitle,
                text:'Largest Cities In '+this.props.location,
                fontSize:25,
                scales: {
                  yAxes: [{
                      ticks: {
                          beginAtZero: true
                      }
                  }]
              }
              },
              legend:{
                display:this.props.displayLegend,
                position:this.props.legendPosition
              }
            }}
          />
          )}



        dash Component
        {/* <HouseVotes/> */}
    <div>{this.props.rep_name}</div>
        {itemsMap}


        <div className="house-voting">
        </div>
      </div>
    )
  }
}
