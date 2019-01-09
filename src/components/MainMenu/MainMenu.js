import React, { Component } from 'react';
import keydown from 'react-keydown';

import './MainMenu.scss';

class MainMenu extends Component {
    state = {
        optionSelected: 'newProfile',
    }

    

    highlightOption = (option) => {
        this.setState(() => ({ optionSelected: option }))
    }


    render() {
        const {beginNew, continueProfile, activeUser, switchUser} = this.props;
        return (
            <div className="Menu">
                <h1>EXP</h1>
                <div 
                    onClick={beginNew} 
                    onMouseOver={()=>this.highlightOption('newProfile')}
                    className={this.state.optionSelected==='newProfile' ? 'selected' : 'unselected'}
                    >New Profile
                </div>
                <div 
                    onClick={switchUser} 
                    onMouseOver={()=>this.highlightOption('switchUser')}
                    className={this.state.optionSelected==='switchUser' ? 'selected' : 'unselected'}
                    >Switch User
                </div>
                <div 
                    onClick={continueProfile} 
                    onMouseOver={()=>this.highlightOption('continue')}
                    className={this.state.optionSelected==='continue' ? 'selected' : 'unselected'}
                    >Continue as {activeUser.name}
                </div>
            </div>
        );
    }    
    
}

export default MainMenu;