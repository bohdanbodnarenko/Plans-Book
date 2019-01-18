import React from "react";
import { NavLink } from "react-router-dom";
import {connect} from 'react-redux';

import {signOut} from '../../store/Actions/authActions';
import {toggleConfirmPopup} from '../../store/Actions/popupActions';


const SignedInLinks = props => {
  return (
    <ul className="right">
      <li>
        <NavLink activeStyle={props.activeStyle} to="/create">
            New Project
        </NavLink>
      </li>
      <li>
        <a
        // onClick={props.signOut}
        onClick={props.toggleConfirmPopup}
         href="#">
            Log Out
        </a>
      </li>
      <li>
        <NavLink to="/" style={{fontWeight:'500',backgroundColor:'#E3B505',borderRadius:'25px'}} className="btn btn-floating lighten-1">
            {props.profile.initials}
        </NavLink>
      </li>
    </ul>
  );
};

const mapDispatchToProps = dispatch =>{
  return {
    signOut: () => dispatch(signOut()),
    toggleConfirmPopup: () => dispatch(toggleConfirmPopup())
  }
}

export default connect(null,mapDispatchToProps)(SignedInLinks);
