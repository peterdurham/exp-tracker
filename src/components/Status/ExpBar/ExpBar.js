import React from 'react';

const ExpBar = ({activeUser, activeAnimation, animationExp}) => {
    return(
        <div className="ExpBar">
            <div className={activeAnimation ? "exp-gain-animated exp-gain" : "exp-gain"}>+{animationExp}</div>
            <div className="ExpBar__container">
                <div style={{ width: `${activeUser.levelPercentage*2}px`, backgroundColor: 'blue', height: '40px'}}></div>
                <div className="ExpBar__level">Level {activeUser.level}</div>
            </div>
        </div>
    );
}

export default ExpBar