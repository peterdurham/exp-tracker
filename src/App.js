import React, { Component } from 'react';
import { BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';

import './App.scss';

import Header from './components/Header/Header';
import MainMenu from './components/MainMenu/MainMenu';
import Status from './components/Status/Status';
import Navigation from './components/Navigation/Navigation';
import CreateProfile from './components/CreateProfile/CreateProfile';
import Task from './components/Task/Task';
import SwitchUser from './components/SwitchUser/SwitchUser';

class App extends Component {
  state = {
    users: [],
    activeUser: {},

    profileSelected: false,
    creatingProfile: false,
    switchingUser: false,

    nameInput: '',
    favoritesSelected: { food: 'pizza', activity: 'walking', nature: 'trees'}
  }



  beginNewProfileHandler = () => {
    this.setState(() => ({ creatingProfile: true, profileSelected: true }))
  }
  switchUserHandler = () => {
    this.setState(() => ({ switchingUser: true, profileSelected: true }))
  }
  createNewProfileHandler = () => {
    const user = {
      name: this.state.nameInput,
      favoritesFood: this.state.favoritesSelected.food,
      favoriteActivity: this.state.favoritesSelected.activity,
      favoriteNature: this.state.favoritesSelected.nature,
      tasksCompleted: [],
      exp: 0,
    }
    const users = [...this.state.users];
    users.push(user);
    this.setState(() => ({ activeUser: user, users, creatingProfile: false }))
  }
  continueProfileHandler = () => {
    this.setState(() => ({}))
  }
  bindNameInputHandler = (event) => {
    let input = event.target.value;
    this.setState(() => ({ nameInput: input }))
  }
  selectFavoriteHandler = (category, favorite) => {
    let favorites = {...this.state.favoritesSelected};
    favorites[category] = favorite;
    this.setState(() => ({ favoritesSelected: favorites }))
  }

  render() {
    const mainMenu = (this.state.profileSelected) ?
    null: <MainMenu 
            activeUser = {this.state.activeUser}
            beginNew = {this.beginNewProfileHandler}
            continueProfile = {this.continueProfileHandler}
            switchUser = {this.switchUserHandler} />

    const creatingProfile = (this.state.creatingProfile) ?
    <CreateProfile 
      favoritesSelected = {this.state.favoritesSelected} 
      selectFavorite = {this.selectFavoriteHandler}
      bindNameInput = {this.bindNameInputHandler}
      nameInput = {this.state.nameInput}
      createNewProfile = {this.createNewProfileHandler}
      /> : null
    const switchingUser = (this.state.switchingUser) ?
    <SwitchUser
      
    /> : null
    return (
      <Router>
        <div className="App">
          {mainMenu}
          {creatingProfile}
          {switchingUser}
          
          <Header />
          <Status 
            activeUser = {this.state.activeUser}
            favoriteFood = {this.state.favoritesSelected.food}
            favoriteActivity = {this.state.favoritesSelected.activity}
            favoriteNature = {this.state.favoritesSelected.nature}
          />
          
          <Task />
        </div>
      </Router>
    );
  }
}

export default App;
