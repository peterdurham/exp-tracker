import React from 'react';
import { Link } from 'react-router-dom';
import './SwitchUser.scss';

import UserProfile from './UserProfile/UserProfile';

import logo from '../../assets/images/crystal.jpg';

const SwitchUser = ({ users, activeUser, switchActiveUser }) => {
    return (
        <div className="SwitchUser">
            <img className="SwitchUser__logo" src={logo} alt="logo"/>
            
            <div className="SwitchUser__container">
                <h1 className="SwitchUser__header">EXP -- Switch User</h1>
                <div className="SwitchUser__main">
                    
                    <div className="SwitchUser__main--text">Choose a profile:</div>
                    <div className="SwitchUser__main--subtext">logged in as {activeUser.name}</div>
                    <div className="SwitchUser__users">
                        {users.map((user) => <UserProfile 
                            key={user.name}
                            activeUser = {activeUser}
                            favoriteFood = {user.favoriteFood}
                            favoriteActivity = {user.favoriteActivity}
                            favoriteNature = {user.favoriteNature}
                            profileImage = {user.profileImage}
                            name={user.name}
                            switchActiveUser = {switchActiveUser}
                           />
                        )}
                    </div>
                    <Link to="/">
                    Back to Main Menu
                    </Link>
                
                </div>
                
            </div>
            
        </div>
    );
}

export default SwitchUser;