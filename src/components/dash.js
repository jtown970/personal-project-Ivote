import React, { Component } from 'react'
import {connect} from 'react-redux'
import HouseVotes from './HouseVotes'
import axios from 'axios'
import Graph from './Graph'
import {Bar} from 'react-chartjs-2'
import {getUser} from '../redux/authReducer'
import {addUserVote} from '../redux/userReducer'


class Dash extends Component {
  constructor(props){
    super(props)
    this.state = {
      items: [],
      isVoting: false,
      item_id: null,
      users_id: 0,
      vote_yes: null,
    }
    this.allItems = this.allItems.bind(this)
  }

  componentDidMount(){
    this.allItems()
    // this.props.getUser()
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

  handleCastVote(){
    const {item_id, users_id, vote_yes} = this.state
    axios.post(`/users/vote`, {item_id, users_id, vote_yes})

  }

  render() {
    // console.log(this.props.auth.user.user_id)
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
              <input type="checkbox" onChange={() => this.setState({vote_yes: true,users_id: this.props.auth.user.user_id, item_id: elem.item_id})}/>
            <span>NO:</span>
              <input type="checkbox" onChange={() => this.setState({vote_yes: false, users_id: this.props.auth.user.user_id, item_id: elem.item_id})}/>
              <button onClick={() => this.handleCastVote()}>Cast Vote</button>
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
const mapStateToProps = state => state
const mapDispatchToProps = {getUser, addUserVote }
export default connect(mapStateToProps, mapDispatchToProps )(Dash)
