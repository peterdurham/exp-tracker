import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import './SwitchUser.scss';

import UserProfile from './UserProfile/UserProfile';

import logo from '../../assets/images/crystal.jpg';

class SwitchUser extends Component {
    state = {
        optionSelected: '0',
        
    }
    keyPress = (key) => {
        const {users, switchActiveUser} = this.props;
        const optionSelected = this.state.optionSelected;
        let newOption;
        if(key==='right' && optionSelected === '0') {
            newOption = '1'
        } else if(key==='left' && optionSelected === '0') {
            newOption = '0'
        } else if(key==='up' && optionSelected === '0') {
            newOption = '0'
        } else if(key==='right' && optionSelected === '1') {
            newOption = '2'
        } else if(key==='left' && optionSelected === '1') {
            newOption = '0'
        } else if(key==='up' && optionSelected === '1') {
            newOption = '1'
        } else if(key==='right' && optionSelected === '2') {
            newOption = '2'
        } else if(key==='left' && optionSelected === '2') {
            newOption = '1' 
        } else if(key==='up' && optionSelected === '2') {
            newOption = '2' 
        } else if(key==='up' && optionSelected === '10') {
            newOption = '1'
        } else if(key==='down' && optionSelected === '10') {
            newOption = '10'
        }else if(key==='left' && optionSelected === '10') {
            newOption = '10'
        }else if(key==='right' && optionSelected === '10') {
            newOption = '10'
        }else if(key==='down' && (optionSelected === '0' || optionSelected === '1' || optionSelected === '2')) {
            newOption = '10'
        } else if(key==='enter' && optionSelected === '0' && users.length > 0) {
            switchActiveUser(users[0].name);
            this.props.history.push('/exp');
        } else if(key==='enter' && optionSelected === '1' && users.length > 1) {
            switchActiveUser(users[1].name);
            this.props.history.push('/exp');
        } else if(key==='enter' && optionSelected === '2' && users.length > 2) {
            switchActiveUser(users[2].name);
            this.props.history.push('/exp');
        } else if(key==='enter' && optionSelected === '10') {
            this.props.history.push('/');
        } 
        this.setState(() => ({ optionSelected: newOption }))
        
    }
    selectProfileHandler = (index) => {
        this.setState(() => ({optionSelected: index}));
    }

    render() {
        const { users, activeUser, switchActiveUser } = this.props;
        
    
        return (
            <div className="SwitchUser">
                <KeyboardEventHandler 
                    handleKeys={['up', 'down', 'left', 'right', 'enter']}
                    onKeyEvent={(key, e) => this.keyPress(key)}
                />
                <img className="SwitchUser__logo" src={logo} alt="logo"/>
                
                <div className="SwitchUser__container">
                    <h1 className="SwitchUser__header">EXP -- Switch User</h1>
                    <div className="SwitchUser__main">
                        
                        <div className="SwitchUser__main--text">Choose a profile:</div>
                        <div className="SwitchUser__main--subtext">logged in as {activeUser.name}</div>
                        
                        <div className="SwitchUser__users">
                            {users.length > 0 ? <UserProfile 
                                index='0'
                                key={users[0].name}
                                activeUser = {activeUser}
                                favoriteFood = {users[0].favoriteFood}
                                favoriteActivity = {users[0].favoriteActivity}
                                favoriteNature = {users[0].favoriteNature}
                                profileImage = {users[0].profileImage}
                                name={users[0].name}
                                switchActiveUser = {switchActiveUser}
                                selectProfile = {this.selectProfileHandler}
                                optionSelected = {this.state.optionSelected}
                               /> : <UserProfile name="empty" index="0" selectProfile = {this.selectProfileHandler} optionSelected = {this.state.optionSelected}/>}
                            {users.length > 1 ? <UserProfile 
                                index='1'
                                key={users[1].name}
                                activeUser = {activeUser}
                                favoriteFood = {users[1].favoriteFood}
                                favoriteActivity = {users[1].favoriteActivity}
                                favoriteNature = {users[1].favoriteNature}
                                profileImage = {users[1].profileImage}
                                name={users[1].name}
                                switchActiveUser = {switchActiveUser}
                                selectProfile = {this.selectProfileHandler}
                                optionSelected = {this.state.optionSelected}
                               /> : <UserProfile name="empty" index="1" selectProfile = {this.selectProfileHandler} optionSelected = {this.state.optionSelected}/>}
                            {users.length > 2 ? <UserProfile 
                                index='2'
                                key={users[2].name}
                                activeUser = {activeUser}
                                favoriteFood = {users[2].favoriteFood}
                                favoriteActivity = {users[2].favoriteActivity}
                                favoriteNature = {users[2].favoriteNature}
                                profileImage = {users[2].profileImage}
                                name={users[2].name}
                                switchActiveUser = {switchActiveUser}
                                selectProfile = {this.selectProfileHandler}
                                optionSelected = {this.state.optionSelected}
                               /> : <UserProfile name="empty" index="2" selectProfile = {this.selectProfileHandler} optionSelected = {this.state.optionSelected}/>}
                        </div>
                        <Link to="/" 
                        className="SwitchUser__link" 
                        onMouseOver={() => this.selectProfileHandler('10')}
                        className={this.state.optionSelected === '10' ? "SwitchUser__button SwitchUser__selected" : "SwitchUser__button"}
                        >
                        Back to Main Menu
                        </Link>
                        <p>delete</p>
                    
                    </div>
                    
                </div>
                
            </div>
        );
    }
    
}

export default SwitchUser;