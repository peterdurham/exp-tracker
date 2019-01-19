import React from 'react';
import '../../../assets/sass/main.scss';

const ExpBar = ({activeUser, activeAnimation, animationExp}) => {
    return(
        <div className="ExpBar">
            <div className={activeAnimation ? "exp-gain-animated exp-gain" : "exp-gain"}>+{animationExp}</div>
            <div className="ExpBar__container">
                <div style={{ width: `${activeUser.levelPercentage*2}px`, backgroundColor: 'rgb(41,122,198)', height: '40px'}}></div>
                <div className="ExpBar__level">Level {activeUser.level}</div>
            </div>
        </div>
    );
}

export default ExpBar