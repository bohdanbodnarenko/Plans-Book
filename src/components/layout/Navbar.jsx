import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SingedOutLinks';
import {connect} from 'react-redux'


const Navbar = props => {
  const activeStyle = {color:'#E3B505',fontSize:'1.5em'}
  const links = props.auth.uid ? <SignedInLinks toggleModal={props.toggleModal} profile={props.profile} activeStyle = {activeStyle} /> : <SignedOutLinks activeStyle={activeStyle} />
  return (
    <nav style={{backgroundColor:'#084C61'}} className="nav-wrapper darken-3">
      <div className="container">
      <Link to='/' className="left" style={{fontSize:'2em'}}>Plan Book</Link>
      {links}
      </div>
    </nav>
  )
}

const mapStateToProps = state =>{
  return {
      auth: state.firebase.auth,
      profile:state.firebase.profile
  }
}

export default connect(mapStateToProps)(Navbar)
