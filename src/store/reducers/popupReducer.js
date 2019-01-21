const popupReducer = (state=false, action) => {
    switch (action.type) {
        case 'TOGGLE_CONFIRM_POPUP':
            state = !state
            break; 
        default:
            return state;
    }
    return state;
}

export default popupReducer;