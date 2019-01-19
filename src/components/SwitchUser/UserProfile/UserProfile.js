import React from 'react';
import { Link } from 'react-router-dom';

import '../../../assets/sass/main.scss';

import bard from '../../../assets/images/profile/bard.jpg';
import sorceress from '../../../assets/images/profile/sorceress.jpg';
import ranger from '../../../assets/images/profile/ranger.jpg';
import monk from '../../../assets/images/profile/monk.jpg';
import wizard from '../../../assets/images/profile/wizard.jpg';

import pizza from '../../../assets/images/food/pizza.png';
import carrots from '../../../assets/images/food/carrot.png';
import egg from '../../../assets/images/food/egg.png';
import icecream from '../../../assets/images/food/icecream.png';
import mushroom from '../../../assets/images/food/mushroom.png';
import broccoli from '../../../assets/images/food/broccoli.png';
import fish from '../../../assets/images/food/fish.png';

import running from '../../../assets/images/activity/running.png';
import swimming from '../../../assets/images/activity/swimming.png';
import walking from '../../../assets/images/activity/walking.png';
import weights from '../../../assets/images/activity/weights.png';
import yoga from '../../../assets/images/activity/yoga.png';

import trees from '../../../assets/images/nature/trees.png';
import fields from '../../../assets/images/nature/fields.png';
import flower from '../../../assets/images/nature/flower.png';
import bees from '../../../assets/images/nature/bees.png';
import sky from '../../../assets/images/nature/sky.png';
import volcano from '../../../assets/images/nature/volcano.png';
import desert from '../../../assets/images/nature/desert.png';


const UserProfile = ({switchActiveUser, name, favoriteFood, favoriteActivity, favoriteNature, profileImage, index, selectProfile, optionSelected, level }) => {
    let profile;
    let food; 
    let activity;
    let nature; 
    
    if(profileImage==='bard') {
        profile = <img className="UserProfile__profile" src={bard} alt="bard" />
    } else if(profileImage==='sorceress') {
        profile = <img className="UserProfile__profile" src={sorceress} alt="sorceress" /> 
    } else if(profileImage==='ranger') {
        profile = <img className="UserProfile__profile" src={ranger} alt="ranger" /> 
    } else if(profileImage==='monk') {
        profile = <img className="UserProfile__profile" src={monk} alt="monk" /> 
    } else if(profileImage==='wizard') {
        profile = <img className="UserProfile__profile" src={wizard} alt="wizard" /> 
    } 

    if(favoriteFood==='pizza') {
        food = <img className="UserProfile__icon" src={pizza} alt="pizza" />
    } else if(favoriteFood==='carrots') {
        food = <img className="UserProfile__icon" src={carrots} alt="carrots" />
    } else if(favoriteFood==='egg') {
        food = <img className="UserProfile__icon" src={egg} alt="egg" />
    } else if(favoriteFood==='icecream') {
        food = <img className="UserProfile__icon" src={icecream} alt="icecream" />
    } else if(favoriteFood==='mushroom') {
        food = <img className="UserProfile__icon" src={mushroom} alt="mushroom" />
    } else if(favoriteFood==='broccoli') {
        food = <img className="UserProfile__icon" src={broccoli} alt="broccoli" />
    } else if(favoriteFood==='fish') {
        food = <img className="UserProfile__icon" src={fish} alt="fish" />
    } 
    if(favoriteActivity==='running') {
        activity = <img className="UserProfile__icon" src={running} alt="running" />
    } else if(favoriteActivity==='swimming') {
        activity = <img className="UserProfile__icon" src={swimming} alt="swimming" />
    } else if(favoriteActivity==='walking') {
        activity = <img className="UserProfile__icon" src={walking} alt="walking" />
    } else if(favoriteActivity==='weights') {
        activity = <img className="UserProfile__icon" src={weights} alt="weights" />
    } else if(favoriteActivity==='yoga') {
        activity = <img className="UserProfile__icon" src={yoga} alt="yoga" />
    } 
    if(favoriteNature==='trees') {
        nature = <img className="UserProfile__icon" src={trees} alt="trees" />
    } else if(favoriteNature==='fields') {
        nature = <img className="UserProfile__icon" src={fields} alt="fields" />
    } else if(favoriteNature==='flower') {
        nature = <img className="UserProfile__icon" src={flower} alt="flower" />
    } else if(favoriteNature==='bees') {
        nature = <img className="UserProfile__icon" src={bees} alt="bees" />
    } else if(favoriteNature==='sky') {
        nature = <img className="UserProfile__icon" src={sky} alt="sky" />
    } else if(favoriteNature==='volcano') {
        nature = <img className="UserProfile__icon" src={volcano} alt="volcano" />
    } else if(favoriteNature==='desert') {
        nature = <img className="UserProfile__icon" src={desert} alt="desert" />
    }

    
    

    return(
        
            <>
                {name!=='empty' ? <Link 
                    key={name}
                    className={optionSelected === index ? "UserProfile UserProfile__selected" : "UserProfile"}
                    onMouseOver={() => selectProfile(index)}
                    onClick={() => switchActiveUser(name)}
                    to="/exp">

                    
                    <div className="UserProfile__name">{name}</div> 
                      
                    
                    {profile}
                
                    <div className="UserProfile__favorites">
                        {food}{activity}{nature}
                    </div>
                        
                </Link> : <div className={optionSelected === index ? "UserProfile UserProfile__disabled" : "UserProfile"} 
                    onMouseOver={() => selectProfile(index)}
                    >empty</div>
                
                }
                
            
            </>
            
        
    );
}

export default UserProfile;