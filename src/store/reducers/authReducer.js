const initState = {}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_ERROR':
            console.log('login error')
            return { ...state,
                authError: 'Login failed!'
            };
        case 'LOGIN_SUCCESS':
            console.log('LOGIN_SUCCESS');
            return {
                ...state,
                authError: null
            }
        case 'SIGNUP_SUCCESS':
            console.log('SIGNUP_SUCCESS')
            return {
                ...state,
                authError: action.error
            }
        case 'SIGNUP_ERROR':
            console.log('SIGNUP_ERROR')
            return {
                ...state,
                authError: action.error.message
            }
        case 'SIGNOUT_SUCCESS':
            console.log('SIGNOUT_SUCCESS');
            return state;
        default:
            return state
    }
}

export default authReducer;