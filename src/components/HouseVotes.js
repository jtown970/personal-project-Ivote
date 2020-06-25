import React, {Component} from 'react';
import axios from 'axios';
import {Bar} from 'react-chartjs-2'
import {connect} from 'react-redux';
import {getHouse, sumAllHouseYes, sumAllHouseNo, houseMembers} from '../redux/houseReducer';
import {getUser} from '../redux/authReducer'



class HouseVotes extends Component {
    constructor(){
        super();
        this.state = {
            chartData1: {},
            chartData2: {},
            eId: 0,
            noId: 0,
            seeHouseVotesByMember: false,
        }
        this.getHouseRepVotes = this.getHouseRepVotes.bind(this)
    }

    componentDidMount(){

        this.handleChart()
        this.getHouseRepVotes()
        this.getHouseRepVotesNo()
        this.props.getUser()
        this.props.houseMembers()
        this.props.sumAllHouseYes()
        this.props.sumAllHouseNo()
        axios.get('/house/votes').then( res => {
            this.props.getHouse(res.data)
        })
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.eId !== this.state.eId){
          this.getHouseRepVotes()
          this.getHouseRepVotesNo()
          console.log('props have changed');
        }
      }

    handleChart(){
        this.props.houseMembers()
        this.getHouseRepVotes()
        this.getHouseRepVotesNo()
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
            console.log(res.data)
            
                yes.push(parseInt(res.data.count))

            this.setState({
            chartData1:{
                labels: ['Yes Votes'],
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
        console.log(yes)
    }

    getHouseRepVotesNo(){
        let yes = [];
        axios.get(`/house/no/vote/${this.state.eId}`)
            .then(res => { 
                console.log(res.data)
                
                    yes.push(parseInt(res.data.count))
    
                this.setState({
                chartData2:{
                    labels: ['No Votes'],
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
            console.log(yes)
        }


    render(){

        const repMap = this.props.house.houseRep.map(rep => {
            return <div key={`houseRepsId${rep.house_id}`}>
                {!this.state.seeHouseVotesByMember?(
                    <button 
                    onMouseEnter={() => this.setState({eId: rep.house_id})}
                    onClick={() => this.seeHouseVotes()}>
                    {rep.rep_name}
                    </button>
                ) : this.state.eId === rep.house_id ?(
                <div style={{position: 'relative', width: 300, height:550}}>
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
                    <button onClick={() => this.seeHouseVotes()}>close</button>

                            </div> 
              </div>
                ):(
                    <div></div>
                )}
            </div>
            
        })
        
        return (
            <div className='houseMapping'>
                {repMap}
                
            </div>
        )
    }
}


const mapStateToProps = state => state;
const mapDispatchToProps = {getHouse, sumAllHouseYes, sumAllHouseNo, getUser, houseMembers}
export default connect(mapStateToProps, mapDispatchToProps)(HouseVotes);


