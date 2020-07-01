import React from 'react'
import '../styles/App.css';
import {withRouter, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getUser} from '../redux/authReducer'



 function Nav(props) {
  if(props.location.pathname !== '/'){
    // console.log(props.auth.user.user_name)
    return (
      <div className="navigation">
        <section className="nav-list" >
          <div className="user">
          </div>
          <div className="nav-items-btn">
           <p className="user-name" >{props.auth.user.user_name}</p>
           <div className="logout-btn-top">
            <button className="logout-btn">
              <Link className="log-btn" to="/">Logout</Link>
            </button>
            </div>
          </div>
        </section>
      </div>
    )  

  } else {
    return <p className="welcome-text">Welcome to Ivote <br/> login or register</p>
  }
}

// function mapStateToProps (reduxState) {
//   return (reduxState)
// }

const mapStateToProps = state => state
export default withRouter(connect(mapStateToProps, {getUser})(Nav))
