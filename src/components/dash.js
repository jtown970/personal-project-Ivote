import React, { Component } from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import Graph from './Graph'
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
      castVote: false
    }
    this.allItems = this.allItems.bind(this)
  }

  componentDidMount(){
    this.allItems()
    this.props.getUser()
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
    const {item_id, users_id, vote_yes} = this.state;
    const {addUserVote} = this.props;
    addUserVote(item_id, users_id, vote_yes)
    this.props.getUser()
    this.setState({
     castVote: !this.state.castVote
    })
    if(this.state.item_id === this.state.item_id){
      this.isVoting()
    }
  }

  render() {
    let itemsMap = this.state.items.map((elem) => {
      return <div key={elem.item_id}>
        <div className="items-list">
        <div>{elem.item_name}</div>
        <div>{elem.description}</div>
        {!this.state.isVoting ? (
          <button className="close-btn" onClick={() => this.isVoting()} >view</button>
        ) : (
          <div>

            <p>{elem.full_description}</p>
            <div className="check-box">
            <span>YES:</span>
              <input type="checkbox" onChange={() => this.setState({vote_yes: true,users_id: this.props.auth.user.user_id, item_id: elem.item_id})}/>
            <span>NO:</span>
              <input type="checkbox" onChange={() => this.setState({vote_yes: false, users_id: this.props.auth.user.user_id, item_id: elem.item_id})}/>
              </div>
              <div className="cast-votes">
              <button 
              className="close-btn"
              onClick={
                () => this.handleCastVote()
              }>Cast Vote</button>
            {/* <p> hello testing toggle</p> */}
            <button className="close-btn" onClick={() => this.isVoting()}>Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
    });
    return (
      <div className="dash">
        {/* <HouseVotes/> */}
        <Graph/>
        {itemsMap}
        {/* dash Component */}
      </div>
    )
  }
  
}
const mapStateToProps = state => state
const mapDispatchToProps = {getUser, addUserVote }
export default connect(mapStateToProps, mapDispatchToProps )(Dash)
