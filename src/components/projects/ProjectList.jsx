import React from "react";
import ProjectSummary from "./ProjectSummary";

const ProjectList = props => {
    return (
    <div className="project-list section">
      {props.projects && props.projects.map(project=>( 
      <ProjectSummary key={project.id} title={project.title} content={project.content}/>
      ))}
    </div> 
  );
};

export default ProjectList;
