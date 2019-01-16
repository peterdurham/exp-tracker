import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import KeyboardEventHandler from 'react-keyboard-event-handler';

import './MainMenu.scss';

class MainMenu extends Component {
    state = {
        optionSelected: 'newProfile',
        
    }

    highlightOption = (option) => {
        this.setState(() => ({ optionSelected: option }))
    }

    keyPress = (key) => {
        const optionSelected = this.state.optionSelected;
        let newOption;
        
        if(key==='up' && optionSelected === 'newProfile') {
            newOption = 'newProfile'
        } else if(key==='up' && optionSelected === 'continue') {
            newOption = 'newProfile'
        } else if(key==='up' && optionSelected === 'switchUser') {
            newOption = 'continue'
        } else if(key==='down' && optionSelected === 'newProfile') {
            newOption = 'continue'
        } else if(key==='down' && optionSelected === 'continue') {
            newOption = 'switchUser'
        } else if(key==='down' && optionSelected === 'switchUser') {
            newOption = 'switchUser'
        } else if(key==='enter' && optionSelected === 'newProfile') {
            this.props.history.push('/create-profile');
        } else if(key==='enter' && optionSelected === 'continue') {
            this.props.history.push('/exp');
        } else if(key==='enter' && optionSelected === 'switchUser') {
            this.props.history.push('/switch-user');
        } 
        this.setState(() => ({ optionSelected: newOption }))
        
    }


    render() {
        const { activeUser } = this.props;
        
        
        
        return (
            <div className="MainMenu">
                <KeyboardEventHandler 
                    handleKeys={['up', 'down', 'enter']}
                    onKeyEvent={(key, e) => this.keyPress(key)}
                />
                
                
                <h1 className="MainMenu__header">EXP</h1>
                
                <ul>
                    <li>
                        <Link 
                            to="/create-profile"
                            onMouseOver={()=>this.highlightOption('newProfile')}
                            className={this.state.optionSelected==='newProfile' ? 'MainMenu__option MainMenu__selected' : 'MainMenu__option'}
                            >New Profile
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/exp"
                            onMouseOver={()=>this.highlightOption('continue')}
                            className={this.state.optionSelected==='continue' ? 'MainMenu__option MainMenu__selected' : 'MainMenu__option'}
                            >Continue as {activeUser.name}
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/switch-user"
                            onMouseOver={()=>this.highlightOption('switchUser')}
                            className={this.state.optionSelected==='switchUser' ? 'MainMenu__option MainMenu__selected' : 'MainMenu__option'}
                            >Switch User
                        </Link>
                    </li>
                </ul>
                
                
                
            </div>
        );
    }    
    
}

export default MainMenu;