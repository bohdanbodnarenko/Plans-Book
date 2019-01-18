import React from 'react'
import {connect} from 'react-redux'

import moment from  'moment'

const ProjectSummary = props => {
 
  return (
    <div className="card z-depth-0 ">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title">{props.title}</span>
          <p>{props.content}</p>
          <p className="grey-text">{moment(props.createdAt.toDate()).calendar()}</p>
        </div>
      </div>
  )
}

const mapStateToProps = state =>{
  return {
      auth: state.firebase.auth,
      profile:state.firebase.profile
  }
}

export default connect(mapStateToProps)(ProjectSummary)
