import React from 'react'
import Popup from '../../../UI/Popup/Popup';
import { connect } from 'react-redux';
import {toggleConfirmPopup} from '../../../store/Actions/popupActions';
import {signOut} from '../../../store/Actions/authActions';

const LogoutConfirm = (props) => {
  return (
    <Popup clicked={props.toggleConfirmPopup} open={props.open}>
        <span>Are you shure to log out?</span>
        <button onClick={props.signOut} className="btn-large">Yes</button>
        <button  className="btn-large red">No</button>
    </Popup>
  )
}

const mapStateToProps = state =>{
    return {
        open:state.popup
    }
  }

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut()),
    toggleConfirmPopup: () => dispatch(toggleConfirmPopup())
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(LogoutConfirm)
