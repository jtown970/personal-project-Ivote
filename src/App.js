import React, { Component } from 'react';
import './styles/App.css';
import routes from './routes'
import Nav from './components/Nav'
import Footer from './components/Footer'
import {connect} from 'react-redux'
import {getUser} from './redux/authReducer'


class App extends Component {

  componentDidMount(){
    this.props.getUser()
  }

  render(){
    return (
      <div className="App">
        <Nav />
        {routes}
        <Footer/>
      </div>
    );
  }
}

const mapStateToProps = state => state
export default connect(mapStateToProps, {getUser}) (App);
