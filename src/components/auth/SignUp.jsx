import React, { Component } from "react";

export class SignUp extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: ""
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
          <h5>Sign Up</h5>

          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" onChange={this.changeHandler} />
          </div>

          <div className="input-field">
            <label htmlFor="password">Second Name</label>
            <input type="text" id="secondName" onChange={this.changeHandler} />
          </div>

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
            <button className="btn-large">Login</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
