export const toggleConfirmPopup = () =>{

    return (dispatch,getState )=>{
        dispatch({type:'TOGGLE_CONFIRM_POPUP',isOpen:getState()})
    }
}