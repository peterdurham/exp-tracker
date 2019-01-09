import React from 'react';
import './CreateProfile.scss';

import pizza from '../../assets/images/food/pizza.png';
import carrots from '../../assets/images/food/carrot.png';
import egg from '../../assets/images/food/egg.png';
import icecream from '../../assets/images/food/icecream.png';
import mushroom from '../../assets/images/food/mushroom.png';
import broccoli from '../../assets/images/food/broccoli.png';
import fish from '../../assets/images/food/fish.png';

import running from '../../assets/images/activity/running.png';
import swimming from '../../assets/images/activity/swimming.png';
import walking from '../../assets/images/activity/walking.png';
import weights from '../../assets/images/activity/weights.png';
import yoga from '../../assets/images/activity/yoga.png';

import trees from '../../assets/images/nature/trees.png';
import fields from '../../assets/images/nature/fields.png';
import flower from '../../assets/images/nature/flower.png';
import bees from '../../assets/images/nature/bees.png';
import sky from '../../assets/images/nature/sky.png';
import volcano from '../../assets/images/nature/volcano.png';
import desert from '../../assets/images/nature/desert.png';



const CreateProfile = ({ favoritesSelected, selectFavorite, nameInput, bindNameInput, createNewProfile }) => {
    let selectedFood = favoritesSelected.food;
    let selectedActivity = favoritesSelected.activity;
    let selectedNature = favoritesSelected.nature;
    
    return (
        <div className="create">
            <h1>New Profile</h1>
            <input onChange={(e)=>bindNameInput(e)} value={nameInput} type="text" className="create__input" />
            
            <div className="option-label">Favorite Food</div>
            <div className="foods">
                <img onClick={()=>selectFavorite('food', 'pizza')} className={selectedFood === 'pizza' ? 'option-selected option' : 'option'} src={pizza} alt="pizza" />
                <img onClick={()=>selectFavorite('food', 'carrots')} className={selectedFood === 'carrots' ? 'option-selected option' : 'option'} src={carrots} alt="carrots" />
                <img onClick={()=>selectFavorite('food', 'egg')} className={selectedFood === 'egg' ? 'option-selected option' : 'option'} src={egg} alt="egg" />
                <img onClick={()=>selectFavorite('food', 'icecream')} className={selectedFood === 'icecream' ? 'option-selected option' : 'option'} src={icecream} alt="icecream" />
                <img onClick={()=>selectFavorite('food', 'mushroom')} className={selectedFood === 'mushroom' ? 'option-selected option' : 'option'} src={mushroom} alt="mushroom" />
                <img onClick={()=>selectFavorite('food', 'broccoli')} className={selectedFood === 'broccoli' ? 'option-selected option' : 'option'} src={broccoli} alt="broccoli" />
                <img onClick={()=>selectFavorite('food', 'fish')} className={selectedFood === 'fish' ? 'option-selected option' : 'option'} src={fish} alt="fish" />
            </div>

            <div className="option-label">Favorite Activity</div>
            <div className="activities">
                <img onClick={()=>selectFavorite('activity', 'walking')} className={selectedActivity === 'walking' ? 'option-selected option' : 'option'} src={walking} alt="walking" />
                <img onClick={()=>selectFavorite('activity', 'swimming')} className={selectedActivity === 'swimming' ? 'option-selected option' : 'option'} src={swimming} alt="swimming" />
                <img onClick={()=>selectFavorite('activity', 'weights')} className={selectedActivity === 'weights' ? 'option-selected option' : 'option'} src={weights} alt="weights" />
                <img onClick={()=>selectFavorite('activity', 'yoga')} className={selectedActivity === 'yoga' ? 'option-selected option' : 'option'} src={yoga} alt="yoga" />
                <img onClick={()=>selectFavorite('activity', 'running')} className={selectedActivity === 'running' ? 'option-selected option' : 'option'} src={running} alt="running" />
            </div>

            <div className="option-label">Favorite Nature</div>
            <div className="natures">
                <img onClick={()=>selectFavorite('nature', 'trees')} className={selectedNature === 'trees' ? 'option-selected option' : 'option'} src={trees} alt="trees" />
                <img onClick={()=>selectFavorite('nature', 'fields')} className={selectedNature === 'fields' ? 'option-selected option' : 'option'} src={fields} alt="fields" />
                <img onClick={()=>selectFavorite('nature', 'flower')} className={selectedNature === 'flower' ? 'option-selected option' : 'option'} src={flower} alt="flower" />
                <img onClick={()=>selectFavorite('nature', 'bees')} className={selectedNature === 'bees' ? 'option-selected option' : 'option'} src={bees} alt="bees" />
                <img onClick={()=>selectFavorite('nature', 'sky')} className={selectedNature === 'sky' ? 'option-selected option' : 'option'} src={sky} alt="sky" />
                <img onClick={()=>selectFavorite('nature', 'volcano')} className={selectedNature === 'volcano' ? 'option-selected option' : 'option'} src={volcano} alt="volcano" />
                <img onClick={()=>selectFavorite('nature', 'desert')} className={selectedNature === 'desert' ? 'option-selected option' : 'option'} src={desert} alt="desert" />
            </div>


            <button onClick={createNewProfile} className="create__button">Create Profile</button>
        </div>
    );
}

export default CreateProfile;