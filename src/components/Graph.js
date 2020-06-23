import React, { Component } from 'react'
import {Bar, Line, Pie} from 'react-chartjs-2'
import {connect} from 'react-redux'
import {getHouse, sumAllHouseYes, sumAllHouseNo} from '../redux/houseReducer';
import axios from 'axios';


 class Graph extends Component {
  constructor(){
    super()
    this.state = {
      chartData1: {},
      chartData2: {}
    }
  }

  componentWillMount(){
    this.getCartDataYesVotes();
    this.getCartDataNoVotes();
  }

  getCartDataYesVotes (){
    let yes = [];
    axios.get(`/house/sum/yes/votes`)
    .then(res => {
      console.log(res.data)
      for(const dataObj of res.data){
        yes.push(parseInt(dataObj.count))
        console.log(dataObj.count)
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
    console.log(yes);
  }


  getCartDataNoVotes (){
    let no = [];
    axios.get(`/house/sum/no/votes`)
    .then(res => {
      console.log(res.data)
      for(const dataObj of res.data){
        no.push(parseInt(dataObj.count))
        console.log(dataObj.count)
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
    console.log(no);
  }
 
  render() {
    
    return (
      <div style={{position: 'relative', width: 300, height:550}}>
        <Bar
          data={this.state.chartData1}
          options={{
            title:{
              display:this.props.displayTitle,
              text:'Largest Cities In '+this.props.location,
              fontSize:25
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        />

        <Bar
          data={this.state.chartData2}
          options={{
            title:{
              display:this.props.displayTitle,
              text:'Largest Cities In '+this.props.location,
              fontSize:25
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        />
          graph Component
      </div>
    )
  }
}

const mapStateToProps = state => state;
const mapDispatchToProps = {getHouse, sumAllHouseYes, sumAllHouseNo}
export default connect(mapStateToProps, mapDispatchToProps)(Graph);
