import React, {Component} from 'react';
import axios from 'axios';
import {Bar} from 'react-chartjs-2'
import {connect} from 'react-redux';
import {getHouse, sumAllHouseYes, sumAllHouseNo} from '../redux/houseReducer';
import {getUser} from '../redux/authReducer'



class HouseVotes extends Component {
    constructor(){
        super();
        this.state = {
            chartData1: {},
            chartData2: {},
            eId: 0,
            seeHouseVotesByMember: false,
        }
        this.getHouseRepVotes = this.getHouseRepVotes.bind(this)
    }

    componentDidMount(){
        this.handleChart()
        this.getHouseRepVotes()
        this.props.getUser()
        this.props.sumAllHouseYes()
        this.props.sumAllHouseNo()
        axios.get('/house/votes').then( res => {
            this.props.getHouse(res.data)
        })
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.eId !== this.state.eId){
        //   this.handleChart()
          this.getHouseRepVotes()
          // console.log('props have changed');
        }
      }

    handleChart(){
        this.getHouseRepVotes()
    }

    seeHouseVotes(){
        this.setState({
            seeHouseVotesByMember: !this.state.seeHouseVotesByMember,
        })
      }

    getHouseRepVotes(){
    let yes = [];
    axios.get(`/house/sum/${this.state.eId}`)
    .then(res => {
        // if(res.data.voted_yes === true){
        //     yes.push(parseInt())
        // }
        console.log(res.data)
        for(const dataObj of res.data){
            if(dataObj.voted_yes === true){
                yes++
            }
        // yes.push(parseInt(dataObj.data))
        console.log(res)
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


    render(){
        const houseMap = this.props.house.houseVotes.map( elem => {
            return <div key={`houseVotesId_${elem.house_votes_id}`}>
                {!this.state.seeHouseVotesByMember?(
                    <button 
                    onMouseEnter={() => this.setState({eId: elem.item_id})} 
                    onClick={() => this.seeHouseVotes()}>
                    {elem.rep_name}
                    </button> 
                ) : (
                    <div>
                         <div style={{position: 'relative', width: 300, height:550}}>
                        <div className="house-chart">  
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
                        <button onClick={() => this.seeHouseVotes()}>close</button>
                        </div>
                    </div>
                </div>
                )}
            </div>
        })
        // console.log(houseMap);
        
        return (
            <div className='houseMapping'>
                {houseMap}
            </div>
        )
    }
}


const mapStateToProps = state => state;
const mapDispatchToProps = {getHouse, sumAllHouseYes, sumAllHouseNo, getUser}
export default connect(mapStateToProps, mapDispatchToProps)(HouseVotes);


