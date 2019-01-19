import React from 'react';
import '../../../../assets/sass/main.scss';

import bard from '../../../../assets/images/profile/bard.jpg';
import sorceress from '../../../../assets/images/profile/sorceress.jpg';
import ranger from '../../../../assets/images/profile/ranger.jpg';
import monk from '../../../../assets/images/profile/monk.jpg';
import wizard from '../../../../assets/images/profile/wizard.jpg';



const ModalUser = ({ user, index, selectOption, optionSelected }) => {
    let img;
    if(user.profileImage === 'bard') {
        img = <img src={bard} alt='bard' className="ModalUser__profile"/>
    } else if(user.profileImage === 'sorceress') {
        img = <img src={sorceress} alt='sorceress' className="ModalUser__profile"/>
    } else if(user.profileImage === 'ranger') {
        img = <img src={ranger} alt='ranger' className="ModalUser__profile" />
    } else if(user.profileImage === 'monk') {
        img = <img src={monk} alt='monk' className="ModalUser__profile" />
    } else if(user.profileImage === 'wizard') {
        img = <img src={wizard} alt='wizard' className="ModalUser__profile" />
    }
    return (
        <div className={optionSelected===index ? "ModalUser ModalUser__selected" : "ModalUser"} onClick={()=>selectOption(index)}>
            
            {img}
            <div className="ModalUser__name">{user.name}</div>
            <div className="ModalUser__level">(Level {user.level})</div>
        </div>

    );
}

export default ModalUser;