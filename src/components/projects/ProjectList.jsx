import React from "react";
import ProjectSummary from "./ProjectSummary";
import {Link} from 'react-router-dom'

const ProjectList = props => {
    return (
    <div className="project-list section">
      {props.projects && props.projects.map(project=>( 
        <Link to={`/project/${project.id}`} key={project.id}>
        <ProjectSummary  title={project.title} content={project.content}/>
        </Link>
      ))}
    </div> 
  );
};

export default ProjectList;
