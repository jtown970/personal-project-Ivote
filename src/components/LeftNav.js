import React from 'react'
import '../styles/App.css';
import HouseVotes from './HouseVotes'
import {withRouter, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getUser} from '../redux/authReducer'



 function LeftNav(props) {

// testing pop up
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

// overlay.addEventListener('click', () => {
//   const modals = document.querySelectorAll('.modal.active')
//   modals.forEach(modal => {
//     closeModal(modal)
//   })
// })

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
      <h2 class="right">AZ house Reps</h2>
      <button class="btn btn-background-circle" data-modal-target="#modal2">View</button>
      <div class="modal" id="modal2">
        <div class="modal-header">
          <div class="title">Your House Reps</div>
          <button data-close-button class="close-button">&times;</button>
        </div>
        <div class="newbody">
          <div class="hours">
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



// good old code below
      // <div className="left-nav">
      //   <p>House Reps</p>
      //   <p>AZ</p>
      //   <HouseVotes/>
      // </div>
    )  

  } else {
    return ""
  }
}

// function mapStateToProps (reduxState) {
//   return (reduxState)
// }

const mapStateToProps = state => state
export default withRouter(connect(mapStateToProps, {getUser})(LeftNav))