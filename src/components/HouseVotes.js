import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {getHouse, sumAllHouseYes, sumAllHouseNo} from '../redux/houseReducer';


class HouseVotes extends Component {
    constructor(){
        super();
        this.state = {
            chartData1: {},
            chartData2: {},
            seeHouseVotesByMember: false,
        }
    }

    componentDidMount(){
        this.props.sumAllHouseYes()
        this.props.sumAllHouseNo()
        axios.get('/house/votes').then( res => {
            this.props.getHouse(res.data)
        })
    }

    seeHouseVotes(){
        this.setState({
            seeHouseVotesByMember: !this.state.seeHouseVotesByMember
        })
      }

    getCartDataYesVotes (){
    let yes = [];
    axios.get(`/house/votes/:id`)
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


    render(){
        const houseMap = this.props.house.houseVotes.map( elem => {
            return <div key={`houseVotesId_${elem.house_votes_id}`}>
                <span className='rep-name'>{elem.rep_name}</span>
                <span>{elem.location}</span>
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
const mapDispatchToProps = {getHouse, sumAllHouseYes, sumAllHouseNo}
export default connect(mapStateToProps, mapDispatchToProps)(HouseVotes);


