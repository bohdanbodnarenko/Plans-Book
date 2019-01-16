import React from 'react'

const ProjectSummary = props => {
  return (
    <div className="card z-depth-0 propject-summary">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title">{props.title}</span>
          <p>{props.content}</p>
          <p className="grey-text">3rd September</p>
        </div>
      </div>
  )
}

export default ProjectSummary
