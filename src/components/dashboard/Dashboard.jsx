import React, { Component } from "react";
import Notification from "./Notification";
import ProjectList from "../projects/ProjectList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

export class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6 l3">
            <ProjectList projects={this.props.projects} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notification />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
    console.log(state)
  return {
    projects: state.project.projects
  };
};

export default compose(
  connect(mapStateToProps),
//   firestoreConnect([
//     {collection:'projects'}
//   ])
)(Dashboard);
