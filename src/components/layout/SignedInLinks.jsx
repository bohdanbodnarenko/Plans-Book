import React from "react";
import { NavLink } from "react-router-dom";
import {connect} from 'react-redux';

import {signOut} from '../../store/Actions/authActions';


const SignedInLinks = props => {
  return (
    <ul className="right">
      <li>
        <NavLink activeStyle={props.activeStyle} to="/create">
            New Project
        </NavLink>
      </li>
      <li>
        <NavLink exact onClick={props.signOut} to="/">
            Log Out
        </NavLink>
      </li>
      <li>
        <NavLink to="/" style={{fontWeight:'500',backgroundColor:'#E3B505'}} className="btn btn-floating lighten-1">
            BB
        </NavLink>
      </li>
    </ul>
  );
};

const mapDispatchToProps = dispatch =>{
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null,mapDispatchToProps)(SignedInLinks);
