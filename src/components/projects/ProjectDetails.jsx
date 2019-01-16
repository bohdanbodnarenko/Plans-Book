import React from "react";

const ProjectDetails = props => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-o">
        <div className="card-content">
          <span className="card-title">Project Title</span>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
            ullam error deserunt adipisci, cum quos veritatis vero incidunt
            beatae ratione nostrum pariatur suscipit delectus perferendis,
            consectetur aperiam voluptates porro perspiciatis?
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by USER</div>
          <div>2nd February</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
