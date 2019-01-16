const initState = {
    projects: [{
            id: '1',
            title: 'first project',
            content: 'blah blah blah'
        },
        {
            id: '2',
            title: 'second project',
            content: 'blah blah blah'
        },
        {
            id: '3',
            title: 'third project',
            content: 'blah blah blah'
        }
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project);
            break; 
        case 'CREATE_PROJECT_ERROR':
            alert(action.error)
        break;
        default:
            return state;
    }
    return state;
}

export default projectReducer;