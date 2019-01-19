import React from 'react';
import '../../../assets/sass/main.scss';

const Settings = (props) => {
    return(
        <div className="Settings">
            Settings
            <div>Theme: </div>
            <div>
                <div>theme 1</div>
                <div>theme 2</div>    
                <div>theme 3</div>
                <div>theme 4</div>
            </div>  
            <div>Change Favorite food</div>
            <div>Change Favorite activity</div>
            <div>Change Favorite nature</div>
        </div>
    );
}

export default Settings;