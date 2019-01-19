import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import '../../assets/sass/main.scss';

import DeleteModal from './DeleteModal/DeleteModal';
import UserProfile from './UserProfile/UserProfile';

import logo from '../../assets/images/crystal.jpg';

class SwitchUser extends Component {
    state = {
        optionSelected: '0',
        modalOpen: false,
    }

    keyPress = (key) => {
        const {users, switchActiveUser} = this.props;
        const optionSelected = this.state.optionSelected;
        let newOption;
        if((key==='right' && optionSelected === '0')||(key==='up' && (optionSelected === '1' || optionSelected==='mainmenu'))||(key==='left' && optionSelected === '2')) {
            newOption = '1'
        } else if((key==='left' && (optionSelected === '0'||optionSelected === '1'))||(key==='up' && optionSelected === '0')) {
            newOption = '0'
        } else if((key==='right' && (optionSelected === '1' || optionSelected === '2')) || (key==='up' && optionSelected === '2')) {
            newOption = '2'
        } else if((key==='down' && (optionSelected === '0' || optionSelected === '1' || optionSelected === '2'))||((key==='left' || key==='right') && optionSelected === 'mainmenu') || (key==='up' && optionSelected==='deleteuser')) {
            newOption = 'mainmenu'
        } else if(((key==='down' || key==='left' || key==='right') && optionSelected === 'deleteuser')||(key==='down' && optionSelected==='mainmenu')) {
            newOption = 'deleteuser'
        } else if(key==='enter' && optionSelected === '0' && users.length > 0) {
            switchActiveUser(users[0].name);
            this.props.history.push('/exp');
        } else if(key==='enter' && optionSelected === '1' && users.length > 1) {
            switchActiveUser(users[1].name);
            this.props.history.push('/exp');
        } else if(key==='enter' && optionSelected === '2' && users.length > 2) {
            switchActiveUser(users[2].name);
            this.props.history.push('/exp');
        } else if(key==='enter' && optionSelected === 'mainmenu') {
            this.props.history.push('/');
        }
        
        else if(key==='enter' && optionSelected === '1' && users.length < 2) {
            newOption = '1'
        } else if(key==='enter' && optionSelected === '2' && users.length < 3) {
            newOption = '2'
        } else if(key==='enter' && optionSelected === 'deleteuser') {
            this.setState(() => ({ modalOpen: true }))
        }





        this.setState(() => ({ optionSelected: newOption }))
        
    }
    selectProfileHandler = (index) => {
        this.setState(() => ({optionSelected: index}));
    }
    openDeleteModal = () => {
        this.setState(() => ({ modalOpen: true }))
    }
    closeDeleteModal = () => {
        this.setState(() => ({ modalOpen: false }))
    }
    

    render() {
        const { users, activeUser, switchActiveUser, deleteUser } = this.props;
        
    
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
                        
                        <div className="SwitchUser__main--text">Select a user:</div>
                        <div className="SwitchUser__main--subtext">logged in as <span className="SwitchUser__main--name">{activeUser.name}</span></div>
                        
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
                        onMouseOver={() => this.selectProfileHandler('mainmenu')}
                        className={this.state.optionSelected === 'mainmenu' ? "SwitchUser__link SwitchUser__mainmenu" : "SwitchUser__link"}
                        >
                        Main Menu
                        </Link>
                        <br/>
                        <div 
                          onClick={() => this.openDeleteModal()}
                          onMouseOver={() => this.selectProfileHandler('deleteuser')}
                          className={this.state.optionSelected === 'deleteuser' ? "SwitchUser__link SwitchUser__deleteuser" : "SwitchUser__link"}>
                          Delete User
                        </div>
                        {this.state.modalOpen &&
                        <DeleteModal users={users} deleteUser={deleteUser} show={this.state.modalOpen} closeDeleteModal={this.closeDeleteModal}>
                            
                        </DeleteModal>
                        }
                                
                    </div>
                    
                </div>
                
            </div>
        );
    }
    
}

export default SwitchUser;