import React from 'react';
import './FavoritesIcon.scss';



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

const FavoritesIcon = ({ favorite }) => {
    let image;
    if(favorite==='pizza') {
        image = <img className="favorites-icon" src={pizza} alt="pizza" />
    } else if(favorite==='carrots') {
        image = <img className="favorites-icon" src={carrots} alt="carrots" />
    } else if(favorite==='egg') {
        image = <img className="favorites-icon" src={egg} alt="egg" />
    } else if(favorite==='icecream') {
        image = <img className="favorites-icon" src={icecream} alt="icecream" />
    } else if(favorite==='mushroom') {
        image = <img className="favorites-icon" src={mushroom} alt="mushroom" />
    } else if(favorite==='broccoli') {
        image = <img className="favorites-icon" src={broccoli} alt="broccoli" />
    } else if(favorite==='fish') {
        image = <img className="favorites-icon" src={fish} alt="fish" />
    } else if(favorite==='running') {
        image = <img className="favorites-icon" src={running} alt="running" />
    } else if(favorite==='swimming') {
        image = <img className="favorites-icon" src={swimming} alt="swimming" />
    } else if(favorite==='walking') {
        image = <img className="favorites-icon" src={walking} alt="walking" />
    } else if(favorite==='weights') {
        image = <img className="favorites-icon" src={weights} alt="weights" />
    } else if(favorite==='yoga') {
        image = <img className="favorites-icon" src={yoga} alt="yoga" />
    } else if(favorite==='trees') {
        image = <img className="favorites-icon" src={trees} alt="trees" />
    } else if(favorite==='fields') {
        image = <img className="favorites-icon" src={fields} alt="fields" />
    } else if(favorite==='flower') {
        image = <img className="favorites-icon" src={flower} alt="flower" />
    } else if(favorite==='bees') {
        image = <img className="favorites-icon" src={bees} alt="bees" />
    } else if(favorite==='sky') {
        image = <img className="favorites-icon" src={sky} alt="sky" />
    } else if(favorite==='volcano') {
        image = <img className="favorites-icon" src={volcano} alt="volcano" />
    } else if(favorite==='desert') {
        image = <img className="favorites-icon" src={desert} alt="desert" />
    }
    
    return (
        <div>
            {image}
        </div>
    );
}

export default FavoritesIcon;