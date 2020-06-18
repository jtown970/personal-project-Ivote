import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Auth from './components/Auth'
import Dash from './components/Dash'
import UserVotes from './components/UserVotes'
import HouseVotes from './components/HouseVotes'
import Graph from './components/Graph'

export default (
  <Switch>
    <Route exact path="/" component={Auth}/>
    <Route path="/dash" component={Dash}/>
    <Route path="/user/votes" component={UserVotes}/>
    <Route path="/house/votes" component={HouseVotes}/>
    <Route path="/graph" component={Graph}/>
  </Switch>
)