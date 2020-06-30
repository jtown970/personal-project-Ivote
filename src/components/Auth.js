import React, { Component } from 'react'
import axios from 'axios'
import '../styles/App.css';
import { connect } from 'react-redux'
import {loginUser} from '../redux/authReducer'
import {registerUser} from '../redux/authReducer'

 class Auth extends Component {
  constructor(){
    super()
    this.state = {
      isRegistering: false,
      user_name: '',
      password: '',
      location: ''
    } 
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  toggleRegister(e) {
    
    this.setState({
      isRegistering: !this.state.isRegistering
    })
  }

  register = (e) => {
    e.preventDefault();
    const {user_name, password, location} = this.state
    axios.post(`/auth/register`, {user_name, password, location})
    .then( res => {
      this.props.registerUser(res.data)
      this.props.history.push('/dash')
    })
    .catch(err => {
      console.log('err in register', err)
    })
  }

  login = (e) => {
    e.preventDefault();
    const {user_name, password} = this.state
    axios.post(`/auth/login`, {user_name, password})
    .then(res => {
      this.props.loginUser(res.data)
      this.props.history.push('/dash')
    })
    .catch(err => {
      alert('Could not log in')
      console.log('err with login', err)
    })
  }



  render() {
    const {user_name, password, location} = this.state;
    return (
      <div className="login-form">
        <form onSubmit={(e) => this.login(e)} >
          <div className="inner-form">
            <input 
              className="input-field"
              type="text"
              placeholder="username...."
              name="user_name"
              value={user_name}
              onChange={e => this.changeHandler(e)} />
            <input 
              className="input-field"
              type="password"
              placeholder="password..."
              name="password"
              value={password}
              onChange={e => this.changeHandler(e)} />
            {!this.state.isRegistering?(
            <div>
              <p>Enter State to Register</p>
              <button 
              className="state-btn"
              onMouseEnter={e => this.toggleRegister()} 
              // onMouseLeave={e => this.toggleRegister()} 
              >Hover to add State</button>
            </div>
            ):(
            <div>
              <input 
              className="input-field"
              type="text"
              placeholder="State..."
              name="location"
              value={location}
              onChange={e => this.changeHandler(e)}/>
            </div>
            )}
            <button 
              className="login-btn"
              type="submit"
              value="Login"
              onClick={this.login} >Login</button>
            <button 
              className="login-btn"
              type="submit"
              value="register"
              onClick={this.register} >Register</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = reduxState => reduxState;
const mapDispatchToProps = {registerUser, loginUser}
export default connect(mapStateToProps, mapDispatchToProps)(Auth)
