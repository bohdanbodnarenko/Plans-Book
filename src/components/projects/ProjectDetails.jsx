import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

import Spinner from "../../UI/Spinner/Spinner";
import moment from "moment";

const ProjectDetails = props => {
  if (!props.auth.uid) {
    return <Redirect to="/signin" />;
  }
  console.log(props);
  if (props.project) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-o" style={{ borderRadius: "15px" }}>
          <div className="card-content">
            <span className="card-title">{props.project.title}</span>
            <p>{props.project.content}</p>
          </div>
          <div
            style={{
              borderBottomRightRadius: "15px",
              borderBottomLeftRadius: "15px"
            }}
            className="card-action grey lighten-4 grey-text"
          >
            <div>
              Posted by {props.project.authorFirstName}{" "}
              {props.project.authorLastName}
            </div>
            <div>{moment(props.project.createdAt.toDate()).calendar()}</div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container center">
        <Spinner />
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.ordered.projects;
  const project = projects ? projects.filter(el => id === el.id)[0] : null;
  return {
    project,
    auth: state.firebase.auth
  };
};

export default compose(
  firestoreConnect(["projects"]),
  connect(mapStateToProps)
)(ProjectDetails);
