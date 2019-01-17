import React, { Component } from "react";
import { connect } from "react-redux";
import {Redirect} from 'react-router-dom'

import { signIn } from "../../store/Actions/authActions";


export class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };

  submitHandler = event => {
    event.preventDefault();
    this.props.signIn(this.state)
  };
  changeHandler = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };
  
  render() {
    if(this.props.auth.uid){
      return <Redirect to='/' />
    }
    return (
      <div className="container">
        <form onSubmit={this.submitHandler}>
          <h5>Sign In</h5>

          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.changeHandler} />
          </div>

          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={this.changeHandler}
            />
          </div>

          <div>
            <button className="btn">
              Login
            </button>
            <div className="red-text center">
              {this.props.authError ? <p>{this.props.authError}</p> : null}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state =>{
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signIn: data => dispatch(signIn(data)),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(SignIn);
