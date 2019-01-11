import React, {Component} from 'react';
import './CreateProfile.scss';
import { Link } from 'react-router-dom';
import KeyboardEventHandler from 'react-keyboard-event-handler';

import bard from '../../assets/images/profile/bard.jpg';
import sorceress from '../../assets/images/profile/sorceress.jpg';
import ranger from '../../assets/images/profile/ranger.jpg';
import monk from '../../assets/images/profile/monk.jpg';
import wizard from '../../assets/images/profile/wizard.jpg';

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



class CreateProfile extends Component {
    state = {
        optionSelected: 'monk',
    }

    keyPress = (key) => {
        const { favoritesSelected, selectFavorite, nameInput, bindNameInput, createNewProfile } = this.props;
        const optionSelected = this.state.optionSelected;
        let newOption;
        if(key==='left' && optionSelected === 'bard') {
            newOption = 'bard'
        } else if(key==='right' && optionSelected === 'bard') {
            newOption = 'sorceress';
            selectFavorite('image', newOption);
        } else if(key==='left' && optionSelected === 'sorceress') {
            newOption = 'bard';
            selectFavorite('image', newOption);
        } else if(key==='right' && optionSelected === 'sorceress') {
            newOption = 'ranger';
            selectFavorite('image', newOption);
        } else if(key==='left' && optionSelected === 'ranger') {
            newOption = 'sorceress';
            selectFavorite('image', newOption);
        } else if(key==='right' && optionSelected === 'ranger') {
            newOption = 'monk';
            selectFavorite('image', newOption);
        } else if(key==='left' && optionSelected === 'monk') {
            newOption = 'ranger';
            selectFavorite('image', newOption);
        } else if(key==='right' && optionSelected === 'monk') {
            newOption = 'wizard';
            selectFavorite('image', newOption);
        } else if(key==='left' && optionSelected === 'wizard') {
            newOption = 'monk'; 
            selectFavorite('image', newOption);
        } else if(key==='right' && optionSelected === 'wizard') {
            newOption = 'wizard';
            selectFavorite('image', newOption);
        } else if (key === 'up' && (optionSelected === 'bard' || optionSelected === 'sorceress' || optionSelected === 'ranger' || optionSelected === 'monk' || optionSelected === 'wizard')) {
            newOption = 'input';
        } else if (key === 'down' && (optionSelected === 'bard' || optionSelected === 'sorceress' || optionSelected === 'ranger' || optionSelected === 'monk' || optionSelected === 'wizard')) {
            newOption = 'pizza';
        }

        if(key==='left' && optionSelected === 'pizza') {
            newOption = 'pizza'
        } else if(key==='right' && optionSelected === 'pizza') {
            newOption = 'carrots';
            selectFavorite('food', newOption);
        } else if(key==='left' && optionSelected === 'carrots') {
            newOption = 'pizza';
            selectFavorite('food', newOption);
        } else if(key==='right' && optionSelected === 'carrots') {
            newOption = 'egg';
            selectFavorite('food', newOption);
        } else if(key==='left' && optionSelected === 'egg') {
            newOption = 'carrots';
            selectFavorite('food', newOption);
        } else if(key==='right' && optionSelected === 'egg') {
            newOption = 'icecream';
            selectFavorite('food', newOption);
        } else if(key==='left' && optionSelected === 'icecream') {
            newOption = 'egg';
            selectFavorite('food', newOption);
        } else if(key==='right' && optionSelected === 'icecream') {
            newOption = 'mushroom';
            selectFavorite('food', newOption);
        } else if(key==='left' && optionSelected === 'mushroom') {
            newOption = 'icecream';
            selectFavorite('food', newOption);
        } else if(key==='right' && optionSelected === 'mushroom') {
            newOption = 'broccoli';
            selectFavorite('food', newOption);
        } else if(key==='left' && optionSelected === 'broccoli') {
            newOption = 'mushroom';
            selectFavorite('food', newOption);
        } else if(key==='right' && optionSelected === 'broccoli') {
            newOption = 'fish';
            selectFavorite('food', newOption);
        } else if(key==='left' && optionSelected === 'fish') {
            newOption = 'broccoli';
            selectFavorite('food', newOption);
        } else if(key==='right' && optionSelected === 'fish') {
            newOption = 'fish'
        }else if (key === 'up' && (optionSelected === 'pizza' || optionSelected === 'carrots' || optionSelected === 'eggs' || optionSelected === 'icecream' || optionSelected === 'mushroom'|| optionSelected === 'broccoli'|| optionSelected === 'fish')) {
            newOption = 'bard'
        } else if (key === 'down' && (optionSelected === 'pizza' || optionSelected === 'carrots' || optionSelected === 'eggs' || optionSelected === 'icecream' || optionSelected === 'mushroom'|| optionSelected === 'broccoli'|| optionSelected === 'fish')) {
            newOption = 'walking'
        }

        if(key==='left' && optionSelected === 'walking') {
            newOption = 'walking';
            selectFavorite('activity', newOption);
        } else if(key==='right' && optionSelected === 'walking') {
            newOption = 'swimming';
            selectFavorite('activity', newOption);
        } else if(key==='left' && optionSelected === 'swimming') {
            newOption = 'walking';
            selectFavorite('activity', newOption);
        } else if(key==='right' && optionSelected === 'swimming') {
            newOption = 'weights';
            selectFavorite('activity', newOption);
        } else if(key==='left' && optionSelected === 'weights') {
            newOption = 'swimming';
            selectFavorite('activity', newOption);
        } else if(key==='right' && optionSelected === 'weights') {
            newOption = 'yoga';
            selectFavorite('activity', newOption);
        } else if(key==='left' && optionSelected === 'yoga') {
            newOption = 'weights';
            selectFavorite('activity', newOption);
        } else if(key==='right' && optionSelected === 'yoga') {
            newOption = 'running';
            selectFavorite('activity', newOption);
        } else if(key==='left' && optionSelected === 'running') {
            newOption = 'yoga';
            selectFavorite('activity', newOption);
        } else if(key==='right' && optionSelected === 'running') {
            newOption = 'running'
        } else if (key === 'up' && (optionSelected === 'walking' || optionSelected === 'swimming' || optionSelected === 'weights' || optionSelected === 'yoga' || optionSelected === 'running')) {
            newOption = 'pizza'
        } else if (key === 'down' && (optionSelected === 'walking' || optionSelected === 'swimming' || optionSelected === 'weights' || optionSelected === 'yoga' || optionSelected === 'running')) {
            newOption = 'trees'
        }

        if(key==='left' && optionSelected === 'trees') {
            newOption = 'trees'
        } else if(key==='right' && optionSelected === 'trees') {
            newOption = 'fields';
            selectFavorite('nature', newOption);
        } else if(key==='left' && optionSelected === 'fields') {
            newOption = 'trees';
            selectFavorite('nature', newOption);
        } else if(key==='right' && optionSelected === 'fields') {
            newOption = 'flower';
            selectFavorite('nature', newOption);
        } else if(key==='left' && optionSelected === 'flower') {
            newOption = 'fields';
            selectFavorite('nature', newOption);
        } else if(key==='right' && optionSelected === 'flower') {
            newOption = 'bees';
            selectFavorite('nature', newOption);
        } else if(key==='left' && optionSelected === 'bees') {
            newOption = 'flower';
            selectFavorite('nature', newOption);
        } else if(key==='right' && optionSelected === 'bees') {
            newOption = 'sky' ;
            selectFavorite('nature', newOption);
        } else if(key==='left' && optionSelected === 'sky') {
            newOption = 'bees';
            selectFavorite('nature', newOption);
        } else if(key==='right' && optionSelected === 'sky') {
            newOption = 'volcano';
            selectFavorite('nature', newOption);
        } else if(key==='left' && optionSelected === 'volcano') {
            newOption = 'sky';
            selectFavorite('nature', newOption);
        } else if(key==='right' && optionSelected === 'volcano') {
            newOption = 'desert';
            selectFavorite('nature', newOption);
        } else if(key==='left' && optionSelected === 'desert') {
            newOption = 'volcano';
            selectFavorite('nature', newOption);
        } else if(key==='right' && optionSelected === 'desert') {
            newOption = 'desert'
        }else if (key === 'up' && (optionSelected === 'trees' || optionSelected === 'fields' || optionSelected === 'flower' || optionSelected === 'bees' || optionSelected === 'sky'|| optionSelected === 'volcano'|| optionSelected === 'desert')) {
            newOption = 'walking'
        } else if (key === 'down' && (optionSelected === 'trees' || optionSelected === 'fields' || optionSelected === 'flower' || optionSelected === 'bees' || optionSelected === 'sky'|| optionSelected === 'volcano'|| optionSelected === 'desert')) {
            newOption = 'create'
        }
        
        
        
        else if(key==='down' && optionSelected === '10') {
            newOption = '10'
        }else if(key==='left' && optionSelected === '10') {
            newOption = '10'
        }else if(key==='right' && optionSelected === '10') {
            newOption = '10'
        }else if(key==='down' && (optionSelected === '0' || optionSelected === '1' || optionSelected === '2')) {
            newOption = '10'
        }
        // } else if(key==='enter' && optionSelected === '0' && users.length > 0) {
        //     switchActiveUser(users[0].name);
        //     this.props.history.push('/exp');
        // } else if(key==='enter' && optionSelected === '1' && users.length > 1) {
        //     switchActiveUser(users[1].name);
        //     this.props.history.push('/exp');
        // } else if(key==='enter' && optionSelected === '2' && users.length > 2) {
        //     switchActiveUser(users[2].name);
        //     this.props.history.push('/exp');
        // } else if(key==='enter' && optionSelected === '10') {
        //     this.props.history.push('/');
        // } 
        this.setState(() => ({ optionSelected: newOption }))
    }

    // selectIconHandler = (option) => {
    //     this.setState(() => ({optionSelected: option}));
    // }
    
    render() {
        const { favoritesSelected, selectFavorite, nameInput, bindNameInput, createNewProfile } = this.props;
        let selectedFood = favoritesSelected.food;
        let selectedActivity = favoritesSelected.activity;
        let selectedNature = favoritesSelected.nature;
        let profileImage = favoritesSelected.image;

        return (
            <div className="CreateProfile">
                <KeyboardEventHandler 
                    handleKeys={['up', 'down', 'left', 'right', 'enter']}
                    onKeyEvent={(key, e) => this.keyPress(key)}
                />
                <div className="CreateProfile__container">
                    <h1>EXP -- New Profile</h1>
                    <div className="CreateProfile__main">
                        <input onChange={(e)=>bindNameInput(e)} value={nameInput} type="text" className="CreateProfile__input" />
                
                        <div className="CreateProfile__label">Choose profile image</div>
                        <div className="CreateProfile__images">
                            <img onClick={()=>selectFavorite('image', 'bard')} className={(profileImage === 'bard' ? 'option-selected profile-image' : 'profile-image') +' '+ (this.state.optionSelected === 'bard' ? 'CreateProfile__selected profile-image' : 'profile-image')} src={bard} alt="pizza" />
                            <img onClick={()=>selectFavorite('image', 'sorceress')} className={(profileImage === 'sorceress' ? 'option-selected profile-image' : 'profile-image')+' '+ (this.state.optionSelected === 'sorceress' ? 'CreateProfile__selected profile-image' : 'profile-image')}  src={sorceress} alt="carrots" />
                            <img onClick={()=>selectFavorite('image', 'ranger')} className={(profileImage === 'ranger' ? 'option-selected profile-image' : 'profile-image') +' '+ (this.state.optionSelected === 'ranger' ? 'CreateProfile__selected profile-image' : 'profile-image')} src={ranger} alt="egg" />
                            <img onClick={()=>selectFavorite('image', 'monk')} className={(profileImage === 'monk' ? 'option-selected profile-image' : 'profile-image')+' '+ (this.state.optionSelected === 'monk' ? 'CreateProfile__selected profile-image' : 'profile-image')} src={monk} alt="icecream" />
                            <img onClick={()=>selectFavorite('image', 'wizard')} className={(profileImage === 'wizard' ? 'option-selected profile-image' : 'profile-image')+' '+ (this.state.optionSelected === 'wizard' ? 'CreateProfile__selected profile-image' : 'profile-image')} src={wizard} alt="mushroom" />
                        </div>
    
                        <div className="CreateProfile__label">Favorite Food</div>
                        <div className="CreateProfile__foods">
                            <img onClick={()=>selectFavorite('food', 'pizza')} className={(selectedFood === 'pizza' ? 'option-selected option' : 'option') +' '+ (this.state.optionSelected === 'pizza' ? 'CreateProfile__selected profile-image' : 'profile-image')} src={pizza} alt="pizza" />
                            <img onClick={()=>selectFavorite('food', 'carrots')} className={(selectedFood === 'carrots' ? 'option-selected option' : 'option') +' '+ (this.state.optionSelected === 'carrots' ? 'CreateProfile__selected profile-image' : 'profile-image')} src={carrots} alt="carrots" />
                            <img onClick={()=>selectFavorite('food', 'egg')} className={(selectedFood === 'egg' ? 'option-selected option' : 'option')+' '+ (this.state.optionSelected === 'egg' ? 'CreateProfile__selected profile-image' : 'profile-image')} src={egg} alt="egg" />
                            <img onClick={()=>selectFavorite('food', 'icecream')} className={(selectedFood === 'icecream' ? 'option-selected option' : 'option') +' '+ (this.state.optionSelected === 'icecream' ? 'CreateProfile__selected profile-image' : 'profile-image')} src={icecream} alt="icecream" />
                            <img onClick={()=>selectFavorite('food', 'mushroom')} className={(selectedFood === 'mushroom' ? 'option-selected option' : 'option')+' '+ (this.state.optionSelected === 'mushroom' ? 'CreateProfile__selected profile-image' : 'profile-image')} src={mushroom} alt="mushroom" />
                            <img onClick={()=>selectFavorite('food', 'broccoli')} className={(selectedFood === 'broccoli' ? 'option-selected option' : 'option')+' '+ (this.state.optionSelected === 'broccoli' ? 'CreateProfile__selected profile-image' : 'profile-image')} src={broccoli} alt="broccoli" />
                            <img onClick={()=>selectFavorite('food', 'fish')} className={(selectedFood === 'fish' ? 'option-selected option' : 'option')+' '+ (this.state.optionSelected === 'fish' ? 'CreateProfile__selected profile-image' : 'profile-image')} src={fish} alt="fish" />
                        </div>
    
                        <div className="CreateProfile__label">Favorite Activity</div>
                        <div className="CreateProfile__activities">
                            <img onClick={()=>selectFavorite('activity', 'walking')} className={(selectedActivity === 'walking' ? 'option-selected option' : 'option')+' '+ (this.state.optionSelected === 'walking' ? 'CreateProfile__selected profile-image' : 'profile-image')} src={walking} alt="walking" />
                            <img onClick={()=>selectFavorite('activity', 'swimming')} className={(selectedActivity === 'swimming' ? 'option-selected option' : 'option')+' '+ (this.state.optionSelected === 'swimming' ? 'CreateProfile__selected profile-image' : 'profile-image')} src={swimming} alt="swimming" />
                            <img onClick={()=>selectFavorite('activity', 'weights')} className={(selectedActivity === 'weights' ? 'option-selected option' : 'option')+' '+ (this.state.optionSelected === 'weights' ? 'CreateProfile__selected profile-image' : 'profile-image')} src={weights} alt="weights" />
                            <img onClick={()=>selectFavorite('activity', 'yoga')} className={(selectedActivity === 'yoga' ? 'option-selected option' : 'option')+' '+ (this.state.optionSelected === 'yoga' ? 'CreateProfile__selected profile-image' : 'profile-image')} src={yoga} alt="yoga" />
                            <img onClick={()=>selectFavorite('activity', 'running')} className={(selectedActivity === 'running' ? 'option-selected option' : 'option')+' '+ (this.state.optionSelected === 'running' ? 'CreateProfile__selected profile-image' : 'profile-image')} src={running} alt="running" />
                        </div>
    
                        <div className="CreateProfile__label">Favorite Nature</div>
                        <div className="CreateProfile__natures">
                            <img onClick={()=>selectFavorite('nature', 'trees')} className={(selectedNature === 'trees' ? 'option-selected option' : 'option')+' '+ (this.state.optionSelected === 'trees' ? 'CreateProfile__selected profile-image' : 'profile-image')} src={trees} alt="trees" />
                            <img onClick={()=>selectFavorite('nature', 'fields')} className={(selectedNature === 'fields' ? 'option-selected option' : 'option')+' '+ (this.state.optionSelected === 'fields' ? 'CreateProfile__selected profile-image' : 'profile-image')} src={fields} alt="fields" />
                            <img onClick={()=>selectFavorite('nature', 'flower')} className={(selectedNature === 'flower' ? 'option-selected option' : 'option')+' '+ (this.state.optionSelected === 'flower' ? 'CreateProfile__selected profile-image' : 'profile-image')} src={flower} alt="flower" />
                            <img onClick={()=>selectFavorite('nature', 'bees')} className={(selectedNature === 'bees' ? 'option-selected option' : 'option')+' '+ (this.state.optionSelected === 'bees' ? 'CreateProfile__selected profile-image' : 'profile-image')} src={bees} alt="bees" />
                            <img onClick={()=>selectFavorite('nature', 'sky')} className={(selectedNature === 'sky' ? 'option-selected option' : 'option')+' '+ (this.state.optionSelected === 'sky' ? 'CreateProfile__selected profile-image' : 'profile-image')} src={sky} alt="sky" />
                            <img onClick={()=>selectFavorite('nature', 'volcano')} className={(selectedNature === 'volcano' ? 'option-selected option' : 'option')+' '+ (this.state.optionSelected === 'volcano' ? 'CreateProfile__selected profile-image' : 'profile-image')} src={volcano} alt="volcano" />
                            <img onClick={()=>selectFavorite('nature', 'desert')} className={(selectedNature === 'desert' ? 'option-selected option' : 'option')+' '+ (this.state.optionSelected === 'desert' ? 'CreateProfile__selected profile-image' : 'profile-image')} src={desert} alt="desert" />
                        </div>
    
                        <Link 
                            to="/exp"
                            className="create__button"
                            onClick={createNewProfile}
                            >Create Profile
                        </Link>
                        <Link to="/">
                        Back to Main Menu
                        </Link>
                    </div>
                    
                </div>
                
                
                
            </div>
        );
    }
    
}

export default CreateProfile;