import React from 'react';

const ExpBar = ({activeUser}) => {
    return(
        <div className="ExpBar__container">
            <div style={{ width: `${activeUser.levelPercentage*2}px`, backgroundColor: 'blue', height: '40px'}}></div>
            <div className="ExpBar__level">Level {activeUser.level}</div>
        </div>
        
    );
}

export default ExpBar