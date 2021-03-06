import React, { Component } from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import Graph from './Graph'
import LeftNav from './LeftNav'
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
      castVote: false,
      item: null
    }
    this.allItems = this.allItems.bind(this)
  }

  componentWillMount(){
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
    const {item_id, users_id, vote_yes} = this.state;
    const {addUserVote} = this.props;
    addUserVote(item_id, users_id, vote_yes)
    // this.props.getUser()
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
            <div className="full-d">
              <p >{elem.full_description}</p>
              <ol >(view <a href={"https://www.congress.gov/bill/116th-congress/house-bill/6172/summary/00"}>Source)</a></ol>
            </div>
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
        <div className="title">
         <h1 className="title">Compare Votes</h1>
        </div>
        <Graph/>
        <LeftNav/>

        {/* start of popup */}
        <div className="fouth">
      <h2 className="right">Start Voting</h2>
      <button className="btn btn-background-circle see-votes" data-modal-target="#modal3">View</button>
      <div className="modal" id="modal3">
        <div className="modal-header">
          <div className="title">Bills to vote on</div>
          <button data-close-button className="close-button">&times;</button>
        </div>
        <div className="newbody">
          <div className="hours">
          <div className="left-nav">
          {itemsMap}
       </div>
          </div>
        </div>
      </div>
      <div id="overlay"></div>

    </div>

        {/* end of popup  */}
      </div>
    )
  }
  
}
const mapStateToProps = state => state
const mapDispatchToProps = {getUser, addUserVote }
export default connect(mapStateToProps, mapDispatchToProps )(Dash)
