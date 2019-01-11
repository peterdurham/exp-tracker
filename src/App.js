import React, { Component } from 'react';
import { BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import './assets/sass/main.scss';


import MainMenu from './components/MainMenu/MainMenu';
import CreateProfile from './components/CreateProfile/CreateProfile';
import SwitchUser from './components/SwitchUser/SwitchUser';
import ExpDashboard from './components/ExpDashboard/ExpDashboard';


class App extends Component {
  state = {
    users: [],
    activeUser: {},

    profileSelected: false,
    

    nameInput: '',
    favoritesSelected: { image:'bard', food: 'pizza', activity: 'walking', nature: 'trees'}
  }
  componentDidMount(){
    try {
        const jsonUsers = localStorage.getItem('users');
        const jsonActive = localStorage.getItem('active')
        const users = JSON.parse(jsonUsers);
        const active = JSON.parse(jsonActive)

        if(users){
            this.setState(()=>({ users, activeUser: active }))
        }
    } catch (e){
        //do nothing
    }

  }
  componentDidUpdate(prevProps, prevState){
    if (prevState.users.length !== this.state.users.length || prevState.activeUser !== this.state.activeUser ) {
        const jsonUsers = JSON.stringify(this.state.users);
        localStorage.setItem('users', jsonUsers);
        const jsonActive = JSON.stringify(this.state.activeUser);
        localStorage.setItem('active', jsonActive);
      } 
    if(this.state.users.length > 0){
      if (prevState.users.length !== this.state.users.length || prevState.activeUser !== this.state.activeUser || prevState.activeUser.tasksCompleted.length !== this.state.activeUser.tasksCompleted.length) {
        const jsonUsers = JSON.stringify(this.state.users);
        localStorage.setItem('users', jsonUsers);
        const jsonActive = JSON.stringify(this.state.activeUser);
        localStorage.setItem('active', jsonActive);
      } 
    }
  }
  createNewProfileHandler = () => {
    if(this.state.users.length < 3) {
      const user = {
        name: this.state.nameInput,
        favoriteFood: this.state.favoritesSelected.food,
        favoriteActivity: this.state.favoritesSelected.activity,
        favoriteNature: this.state.favoritesSelected.nature,
        profileImage: this.state.favoritesSelected.image,
        tasksCompleted: [],
        exp: 0,
      }
      const users = [...this.state.users];
      users.push(user);
      this.setState(() => ({ activeUser: user, users, creatingProfile: false }))
    }
    
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
  switchActiveUserHandler = (userName) => {
    let users = [...this.state.users];
    let newActiveUser = users.filter((user) => user.name === userName)[0];
    this.setState(() => ({activeUser: newActiveUser }))
  }
  calculateExpHandler = (taskName) => {
    let exp;
    if(taskName === 'journalling' || taskName === 'meditation' || taskName === 'brushteeth' || taskName === 'read' || taskName === 'paybills') {
      exp = Math.floor(Math.random() * 11 + 20);
    } else if(taskName === 'coding' || taskName === 'socialize' || taskName === 'paybills' || taskName === 'meetup' || taskName === 'pairprogramming' || taskName === 'plannewproject' || taskName === 'deployproject' || taskName === 'running' || taskName==='cookfood'){
      exp = Math.floor(Math.random() * 21 + 40);
    } else if(taskName === 'weights' || taskName === 'cleanroom'){
      exp = Math.floor(Math.random() * 41 + 80);
    } else if(taskName === 'completeproject') {
      exp = Math.floor(Math.random() * 101 + 200);
    }
    return exp;
  }
  calculateLevelHandler = (exp) => {
    let level = 0;
    let percentage = 0;
    if(exp <500) {
      level = 1;
      percentage = (exp/500)*100;
    } else if(exp >= 500 && exp < 1500){
      level = 2;
      percentage = ((exp-500)/1000)*100;
    } else if (exp >= 1500 && exp < 3000) {
      level = 3;
      percentage = ((exp-1500)/1500)*100;
    } else if (exp >= 3000 && exp < 5000) {
      level = 4;
      percentage = ((exp-3000)/2000)*100;
    } else if (exp >= 5000 && exp < 7500){
      level = 5;
      percentage = ((exp-5000)/2500);
    }
      return [level, Math.floor(percentage)]
      
  }

  completeTaskHandler = (taskName) => {
    let exp = this.state.activeUser.exp;
    let tasksCompleted = [...this.state.activeUser.tasksCompleted];
    const timeStamp = Date.now();
    const experienceGained = this.calculateExpHandler(taskName);
    exp += experienceGained;
    let levelInfo = this.calculateLevelHandler(exp);
    
    const task = { name: taskName, timeStamp, experienceGained }
    tasksCompleted.push(task);
    let activeUser = { 
      ...this.state.activeUser,
      tasksCompleted,
      exp,
      level: levelInfo[0],
      levelPercentage: levelInfo[1],
    }

    let users = [...this.state.users];
    
    let updatedUsers = users.map((user) => {
      if(user.name === activeUser.name){
        
        return activeUser;
      } else {
        return user
      }
    })
    this.setState(() => ({ activeUser, users: updatedUsers }))
    
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route 
            exact path="/" 
            render={(props) => <MainMenu {...props} 
                activeUser = {this.state.activeUser}
                
                /> 
              }
          />
          <Route 
            path="/create-profile" 
            render={(props) => <CreateProfile {...props}
              favoritesSelected = {this.state.favoritesSelected} 
              selectFavorite = {this.selectFavoriteHandler}
              bindNameInput = {this.bindNameInputHandler}
              nameInput = {this.state.nameInput}
              createNewProfile = {this.createNewProfileHandler}
              />
            
            }
           />
          <Route 
            path="/switch-user" 
            render={(props) => <SwitchUser {...props}
              users = {this.state.users}
              activeUser = {this.state.activeUser} 
              switchActiveUser = {this.switchActiveUserHandler}
            />
            } 
          />
          <Route 
            path="/exp" 
            render={(props) => <ExpDashboard {...props}
              activeUser = {this.state.activeUser}
              favoriteFood = {this.state.favoritesSelected.food}
              favoriteActivity = {this.state.favoritesSelected.activity}
              favoriteNature = {this.state.favoritesSelected.nature}
              completeTask = {this.completeTaskHandler}
            />
          }
          />

        </div>
      </Router>
    );
  }
}

export default App;
