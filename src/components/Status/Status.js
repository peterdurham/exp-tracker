import React from 'react';
import FavoritesIcon from '../FavoritesIcon/FavoritesIcon';
import './Status.scss';

const Status = ({ activeUser, favoriteFood, favoriteActivity, favoriteNature, optionSelected }) => {
    

    
    return (
        <div className={optionSelected === 'status' ? 'Status__selected status': 'status'}>
            <div className="status__name">{activeUser.name}</div>
            
            <FavoritesIcon favorite = {favoriteFood}/>
            <FavoritesIcon favorite = {favoriteActivity}/>
            <FavoritesIcon favorite = {favoriteNature}/>
            <div className="status__exp">EXP: {activeUser.exp}</div>
        </div>
    );
}

export default Status;