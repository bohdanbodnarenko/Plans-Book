import React, { Component } from "react";

export class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };

  submitHandler = event => {
    event.preventDefault();
  };
  changeHandler = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };
  
  render() {
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
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
