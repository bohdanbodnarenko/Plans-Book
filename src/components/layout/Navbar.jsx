import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SingedOutLinks';

const Navbar = props => {
  return (
    <nav style={{backgroundColor:'#084C61'}} className="nav-wrapper darken-3">
      <div className="container">
      <Link to='/' className="left" style={{fontSize:'2em'}}>Plan Book</Link>
      <SignedInLinks />
      <SignedOutLinks />
      </div>
    </nav>
  )
}


export default Navbar
