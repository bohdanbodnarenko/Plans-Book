import React, { Component } from "react";
import { connect } from "react-redux";
import {Redirect} from 'react-router-dom'

import { createProject } from "../../store/Actions/projectActions";
export class CreateProject extends Component {
  state = {
    title: "",
    content: ""
  };

  submitHandler = event => {
    event.preventDefault();
    this.props.createProject(this.state);
    this.props.history.push('/')
  };

  changeHandler = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  render() {
    if(!this.props.auth.uid){
      return <Redirect to='/signin' />
    }
    return (
      <div className="container">
        <form onSubmit={this.submitHandler} className="white">
          <h5 className="grey-text text-darken-3">New Project</h5>

          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.changeHandler} />
          </div>

          <div className="input-field">
            <label htmlFor="content">Content</label>
            <textarea
              onChange={this.changeHandler}
              id="content"
              className="materialize-textarea"
            />
          </div>

          <div>
            <button className="btn ">Create</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { auth: state.firebase.auth };
};

const mapDispatchToProps = dispatch => {
  return {
    createProject: project => dispatch(createProject(project))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateProject);
