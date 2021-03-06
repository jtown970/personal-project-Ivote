import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Auth from './components/Auth'
import dash from './components/dash'
import UserVotes from './components/UserVotes'
import HouseVotes from './components/HouseVotes'
import Graph from './components/Graph'

export default (
  <Switch>
    <Route exact path="/" component={Auth}/>
    <Route path="/dash" component={dash}/>
    <Route path="/user/votes" component={UserVotes}/>
    <Route path="/house/votes" component={HouseVotes}/>
    <Route path="/graph" component={Graph}/>
  </Switch>
)