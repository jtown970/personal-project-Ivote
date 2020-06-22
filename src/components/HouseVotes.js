import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {getHouse, sumAllHouseYes, sumAllHouseNo} from '../redux/houseReducer';


class HouseVotes extends Component {
    constructor(){
        super();
        this.state = {
            rep_name: '',
            location: ''
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








// import React, { Component } from 'react'
// import axios from 'axios'
// import {Link} from 'react-router-dom'
// // import getHouse from '../redux/houseReducer'
// // import { connect } from 'react-redux'

// class HouseVotes extends Component {
//   constructor(){
//     super()
//     this.state = {
//       houseVoter: [],
//     }
//     this.getHouseVotes = this.getHouseVotes.bind(this)
//   }

//   componentDidMount(){
//     this.getHouseVotes()
//   }

//   getHouseVotes(){
//     axios.get(`/house/votes`, this.state.houseVoter)
//     .then(res => {
//       this.setState({
//         houseVoter: res.data,
//       })
//     })

//   }
  
//   render() {
//     let houseVotesMap = this.state.houseVoter.map((elem) => {
//       return <div key={`house_votes_id${elem.house_votes_id}`}>
//         <span className="reps">{elem.rep_name}</span>
//       </div>
//     })
//     console.log({houseVotesMap});
//     return (
//       <div>
//         <div>{houseVotesMap}</div>
//         house votes
//       </div>
//     )
//   }
// }


// export default (HouseVotes)


