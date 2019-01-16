import React from "react";
import { NavLink } from "react-router-dom";

const SignedInLinks = props => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/create">
            New Project
        </NavLink>
      </li>
      <li>
        <NavLink to="/">
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

export default SignedInLinks;
