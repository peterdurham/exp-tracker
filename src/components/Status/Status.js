import React from 'react';

import FavoritesIcon from '../FavoritesIcon/FavoritesIcon';
import ExpBar from '../Status/ExpBar/ExpBar';

import './Status.scss';

const Status = ({ activeUser, favoriteFood, favoriteActivity, favoriteNature, optionSelected }) => {
    console.log(activeUser.exp);
    return (
        <div className={optionSelected === 'status' ? 'Status__selected status': 'status'}>
            <div className="status__name">{activeUser.name}</div>
            
            <FavoritesIcon favorite = {favoriteFood}/>
            <FavoritesIcon favorite = {favoriteActivity}/>
            <FavoritesIcon favorite = {favoriteNature}/>
            <ExpBar activeUser = {activeUser}/>
            
        </div>
    );
}

export default Status;