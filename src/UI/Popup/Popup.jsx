import React from 'react'
import { Modal } from '@material-ui/core';
import './Popup.css'

const Popup = props => {
  return (
    <Modal onClick={props.clicked} className="modalWrapper"
    aria-labelledby="simple-modal-title"
    aria-describedby="simple-modal-description"
    open={props.open}
    
 >
 <div className="contentWrapper">
    {props.children}
 </div>
  </Modal>
  )
}

export default Popup
