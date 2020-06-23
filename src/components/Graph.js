import React, { Component } from 'react'
import Dash from './Dash'
import {Bar} from 'react-chartjs-2'
import {connect} from 'react-redux'
import {getHouse, sumAllHouseYes, sumAllHouseNo} from '../redux/houseReducer';
import {allUserVotes, sumUserVoteYes, sumUserVoteNo, sumUserVotesYesId, sumUserVotesNoId} from '../redux/userReducer';
import axios from 'axios';


 class Graph extends Component {
  constructor(){
    super()
    this.state = {
      chartData1: {},
      chartData2: {},
      chartData3: {},
      chartData4: {},
      chartData5: {},
      chartData6: {}
    }
    this.getCartDataYesVotes = this.getCartDataYesVotes.bind(this)

  }

  componentWillMount(){
    this.getCartDataYesVotes();
    this.getCartDataNoVotes();
    this.getChartAllUserYesVotes();
    this.getChartAllUserNoVotes();
    this.getChartAllUserYesVotesSession();
    this.getChartAllUserNoVotesSession();
  }

  getCartDataYesVotes (){
    let yes = [];
    axios.get(`/house/sum/yes/votes`)
    .then(res => {
      // console.log(res.data)
      for(const dataObj of res.data){
        yes.push(parseInt(dataObj.count))
        // console.log(dataObj.count)
      }
      this.setState({
        chartData1:{
          labels: ['House Yes Votes'],
          datasets:[
            {
              label:'House votes',
              data: yes,
              backgroundColor:[
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
              ]
            }
          ]
        }
      });
    })
    // console.log(yes);
  }


  getCartDataNoVotes (){
    let no = [];
    axios.get(`/house/sum/no/votes`)
    .then(res => {
      // console.log(res.data)
      for(const dataObj of res.data){
        no.push(parseInt(dataObj.count))
        // console.log(dataObj.count)
      }
      this.setState({
        chartData2:{
          labels: ['House no Votes'],
          datasets:[
            {
              label:'House votes',
              data: no,
              backgroundColor:[
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
              ]
            }
          ]
        }
      });
    })
    // console.log(no);
  }

  getChartAllUserYesVotes (){
    let userYes = [];
    axios.get(`/users/sum/votes/yes`)
    .then(res => {
      // console.log(res.data)
      for(const dataObj of res.data){
        userYes.push(parseInt(dataObj.count))
        // console.log(dataObj.count)
      }
      this.setState({
        chartData3:{
          labels: ['all yes user Votes'],
          datasets:[
            {
              label:'user votes',
              data: userYes,
              backgroundColor:[
                // 'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
              ]
            }
          ]
        }
      });
    })
    // console.log(userYes);
  }

  getChartAllUserNoVotes (){
    let no = [];
    axios.get(`/users/sum/votes/no`)
    .then(res => {
      // console.log(res.data)
      for(const dataObj of res.data){
        no.push(parseInt(dataObj.count))
        // console.log(dataObj.count)
      }
      this.setState({
        chartData4:{
          labels: ['all user no Votes'],
          datasets:[
            {
              label:'user votes',
              data: no,
              backgroundColor:[
                // 'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
              ]
            }
          ]
        }
      });
    })
    // console.log(no);
  }

  // get user votes by session

  getChartAllUserYesVotesSession (){
    let userYes = [];
    axios.get(`/user/sum/vote/:id`)
    .then(res => {
      console.log(res)
      for(const dataObj of res.data){
        userYes.push(parseInt(dataObj.count))
        console.log(dataObj.count)
      }
      this.setState({
        chartData5:{
          labels: ['Your yes Votes'],
          datasets:[
            {
              label:'yes votes',
              data: userYes,
              backgroundColor:[
                // 'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
              ]
            }
          ]
        }
      });
    })
    // console.log(userYes);
  }

  // session no votes
  getChartAllUserNoVotesSession (){
    let no = [];
    axios.get(`/h/:id`)
    .then(res => {
      // console.log(res.data)
      for(const dataObj of res.data){
        no.push(parseInt(dataObj.count))
        // console.log(dataObj.count)
      }
      this.setState({
        chartData6:{
          labels: ['your no Votes'],
          datasets:[
            {
              label:'your no votes',
              data: no,
              backgroundColor:[
                // 'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
              ]
            }
          ]
        }
      });
    })
    // console.log(no);
  }

  render() {
    return (
      <div style={{position: 'relative', width: 300, height:550}}>
          {/* house votes yes */}
        <div className="all-house-yes-chart yes-chart">
          <Bar
            data={this.state.chartData1}
            options={{
              title:{
                display:this.props.displayTitle,
                text:'Largest Cities In '+this.props.location,
                fontSize:25,
                scales: {
                  yAxes: [{
                      ticks: {
                          beginAtZero: true
                      }
                  }]
              }
              },
              legend:{
                display:this.props.displayLegend,
                position:this.props.legendPosition
              }
            }}
          />
        </div>
          {/* house votes no */}
        <div className="all-house-no-chart no-char">
          <Bar
            data={this.state.chartData2}
            options={{
              title:{
                display:this.props.displayTitle,
                text:'Largest Cities In '+this.props.location,
                fontSize:25,
                scales: {
                  yAxes: [{
                      ticks: {
                          beginAtZero: true
                      }
                  }]
              }
              },
              legend:{
                display:this.props.displayLegend,
                position:this.props.legendPosition
              }
            }}
          />
        </div>
          {/* users vote yes */}
        <div className="all-users-yes-chart yes-chart">
          <Bar
            data={this.state.chartData3}
            options={{
              title:{
                display:this.props.displayTitle,
                text:'Largest Cities In '+this.props.location,
                fontSize:25,
                scales: {
                  yAxes: [{
                      ticks: {
                          beginAtZero: true
                      }
                  }]
              }
              },
              legend:{
                display:this.props.displayLegend,
                position:this.props.legendPosition
              }
            }}
          />
        </div>
          {/* user votes no */}
        <div className="all-users-no-chart no-chart">
          <Bar
            data={this.state.chartData4}
            options={{
              title:{
                display:this.props.displayTitle,
                text:'Largest Cities In '+this.props.location,
                fontSize:25,
                scales: {
                  yAxes: [{
                      ticks: {
                          beginAtZero: true
                      }
                  }]
              }
              },
              legend:{
                display:this.props.displayLegend,
                position:this.props.legendPosition
              }
            }}
          />
        </div>
        {/* user session chart yes votes */}
        <div className="all-users-session-yes-chart no-chart">
          <Bar
            data={this.state.chartData5}
            options={{
              title:{
                display:this.props.displayTitle,
                text:'Largest Cities In '+this.props.location,
                fontSize:25,
                scales: {
                  yAxes: [{
                      ticks: {
                          beginAtZero: true
                      }
                  }]
              }
              },
              legend:{
                display:this.props.displayLegend,
                position:this.props.legendPosition
              }
            }}
          />
        </div>
          {/* user session chart no votes */}
          <div className="all-users-session-no-chart no-chart">
          <Bar
            data={this.state.chartData6}
            options={{
              title:{
                display:this.props.displayTitle,
                text:'Largest Cities In '+this.props.location,
                fontSize:25,
                scales: {
                  yAxes: [{
                      ticks: {
                          beginAtZero: true
                      }
                  }]
              }
              },
              legend:{
                display:this.props.displayLegend,
                position:this.props.legendPosition
              }
            }}
          />
        </div>
          graph Component
          <Dash/>
      </div>
    )
  }
}

const mapStateToProps = state => state;
const mapDispatchToProps = {getHouse, sumAllHouseYes, sumAllHouseNo, allUserVotes, sumUserVoteYes, sumUserVoteNo, sumUserVotesYesId, sumUserVotesNoId }


export default connect(mapStateToProps, mapDispatchToProps)(Graph);
