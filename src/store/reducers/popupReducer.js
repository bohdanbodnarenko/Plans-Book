const popupReducer = (state=false, action) => {
    switch (action.type) {
        case 'TOGGLE_CONFIRM_POPUP':
            console.log('TOGGLE_CONFIRM_POPUP',state);
            state = !state
            break; 
        default:
            return state;
    }
    return state;
}

export default popupReducer;