export const createProject = project =>{

    return (dispatch,getState,{getFirebase, getFirestore,axios})=>{
        // const firestore = getFirestore();
        console.log(axios)
        axios.post('https://plans-book.firebaseio.com/projects',project).then(resp=>console.log('1231452dgv' + resp))
        // firestore.add({
        //     ...project,
        //     authorFirstName:'First',
        //     authorLastName:'Second',
        //     authorId:12345,
        //     createdAt: new Date()
        // }).then(()=>{
        //     dispatch({type:'CREATE_PROJECT',project});    
        // }).catch((error)=>{
        //     dispatch({type:'CREATE_PROJECT_ERROR',error});    
        // })
    }
}