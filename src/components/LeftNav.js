import React from 'react'
import HouseVotes from './HouseVotes'
import {withRouter, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getUser} from '../redux/authReducer'



 function LeftNav(props) {
  if(props.location.pathname !== '/'){
    // console.log(props.auth.user.user_name)
    return (
      <div className="left-nav">
        <p>House Reps</p>
        <p>AZ</p>
        <HouseVotes/>
      </div>
    )  

  } else {
    return ""
  }
}

// function mapStateToProps (reduxState) {
//   return (reduxState)
// }

const mapStateToProps = state => state
export default withRouter(connect(mapStateToProps, {getUser})(LeftNav))