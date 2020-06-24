import React, { Component } from 'react';
import './App.css';
import routes from './routes'
import Nav from './components/Nav'
import {connect} from 'react-redux'
import {getUser} from './redux/authReducer'


class App extends Component {

  componentDidMount(){
    this.props.getUser()
  }

  render(){
    return (
      <div className="App">
        <Nav  />
        {routes}
      </div>
    );
  }
}

const mapStateToProps = state => state
export default connect(mapStateToProps, {getUser}) (App);
