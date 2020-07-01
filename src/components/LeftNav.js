import React from 'react'
import '../styles/App.css';
import HouseVotes from './HouseVotes'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {getUser} from '../redux/authReducer'



 function LeftNav(props) {

// pop up
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal1 = document.querySelector(button.dataset.modalTarget)
    openModal(modal1)
  })
})

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal2 = document.querySelector(button.dataset.modalTarget)
    openModal(modal2)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}
// end of pop up

  if(props.location.pathname !== '/'){
    // console.log(props.auth.user.user_name)
    return (

<div class="third">
      <h2 className="right">AZ house Reps</h2>
      <button className="btn btn-background-circle see-votes" data-modal-target="#modal2">View</button>
      <div className="modal" id="modal2">
        <div className="modal-header">
          <div className="title">Your House Reps</div>
          <button data-close-button className="close-button">&times;</button>
        </div>
        <div className="newbody">
          <div className="hours">
          <div className="left-nav">
         <p>House Reps</p>
         <p>AZ</p>
         <HouseVotes/>
       </div>
          </div>
        </div>
      </div>
      <div id="overlay"></div>

    </div>
    )  

  } else {
    return ""
  }
}

const mapStateToProps = state => state
export default withRouter(connect(mapStateToProps, {getUser})(LeftNav))