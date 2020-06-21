import React, { Component } from 'react'
import axios from 'axios';
import {connect} from 'react-redux';
import {allUserVotes} from '../redux/userReducer';

class UserVotes extends Component {
  // constructor(){
  //   super()
  //   this.state = {
  //     user_name: '',
  //     location: '',
  //     vote_yes: null
  //   }
  // }

  componentDidMount(){
    axios.get(`/users/votes`).then(res => {
      this.props.allUserVotes(res.data)
    })
}

  userById(){
    
  }
  render() {

    const userMap = this.props.userVotes.votes.map( elem => {
      return <div key={`userVotesId_${elem.user_votes_id}`}>
          <span className='rep-name'>{elem.item_name}</span>
          <span>{elem.location}</span>
          {/* <span>{elem.vote_yes}</span> */}
      </div>
      
    })
    console.log(userMap);
    return (
      <div>
        user votes
        {userMap}
      </div>
    )
  }
}

const mapStateToProps = state => state;
// const mapDispatchToProps = {allUserVotes}

export default connect(mapStateToProps, {allUserVotes})(UserVotes);
