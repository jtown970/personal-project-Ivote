import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {getHouse, sumAllHouseYes, sumAllHouseNo} from '../redux/houseReducer';


class HouseVotes extends Component {
    constructor(){
        super();
        this.state = {
            // rep_name: '',
            // location: ''
        }
    }

    componentDidMount(){
        this.props.sumAllHouseYes()
        this.props.sumAllHouseNo()
        axios.get('/house/votes').then( res => {
            this.props.getHouse(res.data)
        })
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


