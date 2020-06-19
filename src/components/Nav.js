import React from 'react'
import {withRouter, Link} from 'react-router-dom'
import {connect} from 'react-redux'


 function Nav(props) {
  if(props.location.pathname !== '/'){
    console.log(props)
    return (
      <div className="navigation">
        <section className="nav-list" >
          <div className="user">
          </div>
          <div className="nav-logout-btn">
           <p className="user-name" >{props.auth.user_name}</p>
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

function mapStateToProps (reduxState) {
  return (reduxState)
}
export default withRouter(connect(mapStateToProps)(Nav))
