import React from 'react';

import FavoritesIcon from '../FavoritesIcon/FavoritesIcon';
import ExpBar from '../Status/ExpBar/ExpBar';

import './Status.scss';

const Status = ({ activeUser, favoriteFood, favoriteActivity, favoriteNature, optionSelected, activeAnimation, animationExp }) => {
    
    return (
        <div className={optionSelected === 'status' ? 'Status__selected status': 'status'}>
            <div className="status__name">{activeUser.name}</div>
            <div className="status__icons">
                <FavoritesIcon favorite = {favoriteFood}/>
                <FavoritesIcon favorite = {favoriteActivity}/>
                <FavoritesIcon favorite = {favoriteNature}/>
            </div>
            
            <ExpBar activeUser = {activeUser} 
              activeAnimation = {activeAnimation}
              animationExp = {animationExp}
              />
            
        </div>
    );
}

export default Status;