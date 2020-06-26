import React, { Component } from 'react';
import './styles/App.scss';
import routes from './routes'
import Nav from './components/Nav'
import LeftNav from './components/LeftNav'
import Dash from './components/Dash'
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
        <Nav  />
        <LeftNav/>
        {routes}
        <Footer/>
        {/* <Dash/> */}
      </div>
    );
  }
}

const mapStateToProps = state => state
export default connect(mapStateToProps, {getUser}) (App);
