import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/projects/CreateProject';
import Popup from './UI/Popup/Popup';
import LogoutConfirm from './components/layout/LogoutConfirm/LogoutConfirm';

class App extends Component {
  state =  {
    isConfirmPopupOpen:false
  }
  togglePopupOpen = () =>{
    this.setState({isConfirmPopupOpen:!this.state.isConfirmPopupOpen})
  }
  render() {
    return (
      <BrowserRouter>
        <div>
        <LogoutConfirm  />
         <Navbar toggleModal = {this.togglePopupOpen} />
         <Switch>
           <Route exact path='/' component={Dashboard}/>
           <Route path='/project/:id' component={ProjectDetails}/>
           <Route path='/signin' component={SignIn}/>
           <Route path='/signup' component={SignUp}/>
           <Route path='/signup' component={SignUp}/>
           <Route path='/create' component={CreateProject}/>
          </Switch> 
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
