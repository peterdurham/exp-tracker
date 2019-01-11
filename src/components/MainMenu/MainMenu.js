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
        }
        this.setState(() => ({ optionSelected: newOption }))
        
    }


    render() {
        const { activeUser, switchUser } = this.props;
        return (
            <div className="Menu">
                <KeyboardEventHandler 
                    handleKeys={['up', 'down']}
                    onKeyEvent={(key, e) => this.keyPress(key)}
                />
                
                
                <h1>EXP</h1>
                <ul>
                    <li>
                        <Link 
                            to="/create-profile"
                            onMouseOver={()=>this.highlightOption('newProfile')}
                            className={this.state.optionSelected==='newProfile' ? 'selected' : 'unselected'}
                            >New Profile
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/exp"
                            onMouseOver={()=>this.highlightOption('continue')}
                            className={this.state.optionSelected==='continue' ? 'selected' : 'unselected'}
                            >Continue as {activeUser.name}
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/switch-user"
                            onMouseOver={()=>this.highlightOption('switchUser')}
                            className={this.state.optionSelected==='switchUser' ? 'selected' : 'unselected'}
                            >Switch User
                        </Link>
                    </li>
                </ul>
                
                
            </div>
        );
    }    
    
}

export default MainMenu;