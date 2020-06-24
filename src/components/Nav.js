import React from 'react'
import {withRouter, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getUser} from '../redux/authReducer'



 function Nav(props) {
  if(props.location.pathname !== '/'){
    console.log(props.auth.user.user_name)
    return (
      <div className="navigation">
        <section className="nav-list" >
          <div className="user">
          </div>
          <div className="nav-logout-btn">
           <p className="user-name" >{props.auth.user.user_name}</p>
           
            <button className="logout-btn">
              <Link className="nav-btn" to="/">Logout</Link>
            </button>
          </div>
        </section>
        Nav
      </div>
    )  

  } else {
    return "Welcome to Ivote login or register"
  }
}

// function mapStateToProps (reduxState) {
//   return (reduxState)
// }

const mapStateToProps = state => state
export default withRouter(connect(mapStateToProps, {getUser})(Nav))
