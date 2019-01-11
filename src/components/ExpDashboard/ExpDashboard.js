import React, { Component } from 'react';
import { Link, Route, Switch, Redirect } from 'react-router-dom';
import KeyboardEventHandler from 'react-keyboard-event-handler';

import Header from '../Header/Header';
import Status from '../Status/Status';
import Task from '../Task/Task';
import EarnExp from '../ExpDashboard/EarnExp/EarnExp';
import TaskHistory from '../ExpDashboard/TaskHistory/TaskHistory';
import Achievements from '../ExpDashboard/Achievements/Achievements';
import Settings from '../ExpDashboard/Settings/Settings';

class ExpDashboard extends Component {
    state = {
        optionSelected: 'status',
    }

    highlightOption = (option) => {
        this.setState(() => ({ optionSelected: option }))
    }
    keyPress = (key) => {
        const optionSelected = this.state.optionSelected;
        let newOption;
        const {completeTask} = this.props;

        if(key==='up' && optionSelected === 'status') {
            newOption = 'status'
        } else if(key==='right' && optionSelected === 'status') {
            newOption = 'mainmenu'
        } else if(key==='down' && optionSelected === 'status') {
            newOption = 'earn'
        } else if(key==='left' && optionSelected === 'status') {
            newOption = 'status'
        } 

        else if(key==='up' && optionSelected === 'mainmenu') {
            newOption = 'mainmenu'
        } else if(key==='right' && optionSelected === 'mainmenu') {
            newOption = 'switchuser'
        } else if(key==='down' && optionSelected === 'mainmenu') {
            newOption = 'earn'
        } else if(key==='left' && optionSelected === 'mainmenu') {
            newOption = 'status'
        } 
        
        else if(key==='up' && optionSelected === 'switchuser') {
            newOption = 'switchuser'
        } else if(key==='right' && optionSelected === 'switchuser') {
            newOption = 'switchuser'
        } else if(key==='down' && optionSelected === 'switchuser') {
            newOption = 'earn'
        } else if(key==='left' && optionSelected === 'switchuser') {
            newOption = 'mainmenu'
        } 
        
        else if(key==='up' && optionSelected === 'earn') {
            newOption = 'status'
        } else if(key==='right' && optionSelected === 'earn') {
            newOption = 'history'
        } else if(key==='down' && optionSelected === 'earn') {
            newOption = 'read'
        } else if(key==='left' && optionSelected === 'earn') {
            newOption = 'earn'
        }

        else if(key==='up' && optionSelected === 'history') {
            newOption = 'status'
        } else if(key==='right' && optionSelected === 'history') {
            newOption = 'achievements'
        } else if(key==='down' && optionSelected === 'history') {
            newOption = 'socialize'
        } else if(key==='left' && optionSelected === 'history') {
            newOption = 'earn'
        }

        else if(key==='up' && optionSelected === 'achievements') {
            newOption = 'status'
        } else if(key==='right' && optionSelected === 'achievements') {
            newOption = 'settings'
        } else if(key==='down' && optionSelected === 'achievements') {
            newOption = 'socialize'
        } else if(key==='left' && optionSelected === 'achievements') {
            newOption = 'history'
        }

        else if(key==='up' && optionSelected === 'settings') {
            newOption = 'status'
        } else if(key==='right' && optionSelected === 'settings') {
            newOption = 'settings'
        } else if(key==='down' && optionSelected === 'settings') {
            newOption = 'weights'
        } else if(key==='left' && optionSelected === 'settings') {
            newOption = 'achievements'
        }

        else if(key==='up' && optionSelected === 'coding') {
            newOption = 'earn'
        } else if(key==='right' && optionSelected === 'coding') {
            newOption = 'read'
        } else if(key==='down' && optionSelected === 'coding') {
            newOption = 'meetup'
        } else if(key==='left' && optionSelected === 'coding') {
            newOption = 'coding'
        }

        else if(key==='up' && optionSelected === 'read') {
            newOption = 'earn'
        } else if(key==='right' && optionSelected === 'read') {
            newOption = 'socialize'
        } else if(key==='down' && optionSelected === 'read') {
            newOption = 'journalling'
        } else if(key==='left' && optionSelected === 'read') {
            newOption = 'coding'
        }

        else if(key==='up' && optionSelected === 'socialize') {
            newOption = 'earn'
        } else if(key==='right' && optionSelected === 'socialize') {
            newOption = 'weights'
        } else if(key==='down' && optionSelected === 'socialize') {
            newOption = 'meditation'
        } else if(key==='left' && optionSelected === 'socialize') {
            newOption = 'read'
        }

        else if(key==='up' && optionSelected === 'weights') {
            newOption = 'earn'
        } else if(key==='right' && optionSelected === 'weights') {
            newOption = 'weights'
        } else if(key==='down' && optionSelected === 'weights') {
            newOption = 'pairprogramming'
        } else if(key==='left' && optionSelected === 'weights') {
            newOption = 'socialize'
        }

        else if(key==='up' && optionSelected === 'meetup') {
            newOption = 'coding'
        } else if(key==='right' && optionSelected === 'meetup') {
            newOption = 'journalling'
        } else if(key==='down' && optionSelected === 'meetup') {
            newOption = 'completeproject'
        } else if(key==='left' && optionSelected === 'meetup') {
            newOption = 'meetup'
        }

        else if(key==='up' && optionSelected === 'journalling') {
            newOption = 'read'
        } else if(key==='right' && optionSelected === 'journalling') {
            newOption = 'meditation'
        } else if(key==='down' && optionSelected === 'journalling') {
            newOption = 'brushteeth'
        } else if(key==='left' && optionSelected === 'journalling') {
            newOption = 'meetup'
        }

        else if(key==='up' && optionSelected === 'meditation') {
            newOption = 'socialize'
        } else if(key==='right' && optionSelected === 'meditation') {
            newOption = 'pairprogramming'
        } else if(key==='down' && optionSelected === 'meditation') {
            newOption = 'paybills'
        } else if(key==='left' && optionSelected === 'meditation') {
            newOption = 'journalling'
        }

        else if(key==='up' && optionSelected === 'pairprogramming') {
            newOption = 'weights'
        } else if(key==='right' && optionSelected === 'pairprogramming') {
            newOption = 'pairprogramming'
        } else if(key==='down' && optionSelected === 'pairprogramming') {
            newOption = 'plannewproject'
        } else if(key==='left' && optionSelected === 'pairprogramming') {
            newOption = 'meditation'
        }
        else if(key==='up' && optionSelected === 'completeproject') {
            newOption = 'meetup'
        } else if(key==='right' && optionSelected === 'completeproject') {
            newOption = 'brushteeth'
        } else if(key==='down' && optionSelected === 'completeproject') {
            newOption = 'cookmeal'
        } else if(key==='left' && optionSelected === 'completeproject') {
            newOption = 'completeproject'
        }

        else if(key==='up' && optionSelected === 'brushteeth') {
            newOption = 'journalling'
        } else if(key==='right' && optionSelected === 'brushteeth') {
            newOption = 'paybills'
        } else if(key==='down' && optionSelected === 'brushteeth') {
            newOption = 'cleanroom'
        } else if(key==='left' && optionSelected === 'brushteeth') {
            newOption = 'completeproject'
        }

        else if(key==='up' && optionSelected === 'paybills') {
            newOption = 'meditation'
        } else if(key==='right' && optionSelected === 'paybills') {
            newOption = 'plannewproject'
        } else if(key==='down' && optionSelected === 'paybills') {
            newOption = 'deployproject'
        } else if(key==='left' && optionSelected === 'paybills') {
            newOption = 'brushteeth'
        }

        else if(key==='up' && optionSelected === 'plannewproject') {
            newOption = 'pairprogramming'
        } else if(key==='right' && optionSelected === 'plannewproject') {
            newOption = 'plannewproject'
        } else if(key==='down' && optionSelected === 'plannewproject') {
            newOption = 'running'
        } else if(key==='left' && optionSelected === 'plannewproject') {
            newOption = 'paybills'
        }
        else if(key==='up' && optionSelected === 'cookmeal') {
            newOption = 'completeproject'
        } else if(key==='right' && optionSelected === 'cookmeal') {
            newOption = 'cleanroom'
        } else if(key==='down' && optionSelected === 'cookmeal') {
            newOption = 'cookmeal'
        } else if(key==='left' && optionSelected === 'cookmeal') {
            newOption = 'cookmeal'
        }

        else if(key==='up' && optionSelected === 'cleanroom') {
            newOption = 'brushteeth'
        } else if(key==='right' && optionSelected === 'cleanroom') {
            newOption = 'deployproject'
        } else if(key==='down' && optionSelected === 'cleanroom') {
            newOption = 'cleanroom'
        } else if(key==='left' && optionSelected === 'cleanroom') {
            newOption = 'cookmeal'
        }

        else if(key==='up' && optionSelected === 'deployproject') {
            newOption = 'paybills'
        } else if(key==='right' && optionSelected === 'deployproject') {
            newOption = 'running'
        } else if(key==='down' && optionSelected === 'deployproject') {
            newOption = 'deployproject'
        } else if(key==='left' && optionSelected === 'deployproject') {
            newOption = 'cleanroom'
        }

        else if(key==='up' && optionSelected === 'running') {
            newOption = 'plannewproject'
        } else if(key==='right' && optionSelected === 'running') {
            newOption = 'running'
        } else if(key==='down' && optionSelected === 'running') {
            newOption = 'running'
        } else if(key==='left' && optionSelected === 'running') {
            newOption = 'deployproject'
        }

        else if(key==='enter' && optionSelected === 'status') {
            newOption = 'status'
        } else if(key==='enter' && optionSelected === 'mainmenu') {
            this.props.history.push('/');
        } else if(key==='enter' && optionSelected === 'switchuser') {
            this.props.history.push('/switch-user');
        } 

        else if(key==='enter' && optionSelected === 'coding') {
            completeTask('coding')
            newOption = 'coding'
        } else if(key==='enter' && optionSelected === 'read') {
            completeTask('read')
            newOption = 'read'
        } else if(key==='enter' && optionSelected === 'socialize') {
            completeTask('socialize')
            newOption = 'socialize'
        } else if(key==='enter' && optionSelected === 'weights') {
            completeTask('weights')
            newOption = 'weights'
        } else if(key==='enter' && optionSelected === 'meetup') {
            completeTask('meetup')
            newOption = 'meetup'
        } else if(key==='enter' && optionSelected === 'journalling') {
            completeTask('journalling')
            newOption = 'journalling'
        } else if(key==='enter' && optionSelected === 'meditation') {
            completeTask('meditation')
            newOption = 'meditation'
        } else if(key==='enter' && optionSelected === 'pairprogramming') {
            completeTask('pairprogramming')
            newOption = 'pairprogramming'
        } else if(key==='enter' && optionSelected === 'completeproject') {
            completeTask('completeproject')
            newOption = 'completeproject'
        } else if(key==='enter' && optionSelected === 'brushteeth') {
            completeTask('brushteeth')
            newOption = 'brushteeth'
        } else if(key==='enter' && optionSelected === 'paybills') {
            completeTask('paybills')
            newOption = 'paybills'
        } else if(key==='enter' && optionSelected === 'plannewproject') {
            completeTask('plannewproject')
            newOption = 'plannewproject'
        } else if(key==='enter' && optionSelected === 'cookmeal') {
            completeTask('cookmeal')
            newOption = 'cookmeal'
        } else if(key==='enter' && optionSelected === 'cleanroom') {
            completeTask('cleanroom')
            newOption = 'cleanroom'
        } else if(key==='enter' && optionSelected === 'deployproject') {
            completeTask('deployproject')
            newOption = 'deployproject'
        } else if(key==='enter' && optionSelected === 'running') {
            completeTask('running')
            newOption = 'running'
        } 
        
        this.setState(() => ({ optionSelected: newOption }))
        
    }
    render() {
        const { activeUser, favoriteActivity, favoriteFood, favoriteNature, completeTask} = this.props;
        return(
            <div>Exp dashboard
                <KeyboardEventHandler 
                    handleKeys={['up', 'down', 'left', 'right', 'enter']}
                    onKeyEvent={(key, e) => this.keyPress(key)}
                />
                
                <Header />
                <div className="ExpDashboard__status">
                    <Status 
                        activeUser = {activeUser}
                        favoriteFood = {favoriteFood}
                        favoriteActivity = {favoriteActivity}
                        favoriteNature = {favoriteNature}
                        optionSelected = {this.state.optionSelected}
                    />
                    <Link to="/" className={this.state.optionSelected === 'mainmenu' ? 'ExpDashboard__selected ExpDashboard__menulink': 'ExpDashboard__menulink'}>
                    Main Menu
                    </Link>
                    <Link 
                    to="/switch-user"
                    className={this.state.optionSelected === 'switchuser' ? 'ExpDashboard__selected ExpDashboard__menulink': 'ExpDashboard__menulink'}
                    >Switch User
                    </Link>
                </div>
                
                
                
                <br/>
    
                <Link to="/exp/earn-exp" className={this.state.optionSelected === 'earn' ? 'ExpDashboard__selected ExpDashboard__link': 'ExpDashboard__link'}>Earn</Link>
                <Link to="/exp/task-history" className={this.state.optionSelected === 'history' ? 'ExpDashboard__selected ExpDashboard__link': 'ExpDashboard__link'}>History</Link>
                <Link to="/exp/achievements" className={this.state.optionSelected === 'achievements' ? 'ExpDashboard__selected ExpDashboard__link': 'ExpDashboard__link'}>Achievements</Link>
                <Link to="/exp/settings" className={this.state.optionSelected === 'settings' ? 'ExpDashboard__selected ExpDashboard__link': 'ExpDashboard__link'}>Settings</Link>
    
                <Switch>
                    <Redirect exact from="/exp" to="/exp/earn-exp"/>
                    <Route path="/exp/earn-exp" render={() => <EarnExp 
                        activeUser = {activeUser}
                        favoriteFood = {favoriteFood}
                        favoriteActivity = {favoriteActivity}
                        favoriteNature = {favoriteNature}
                        completeTask = {completeTask} 
                        optionSelected = {this.state.optionSelected}
                        />
                    }
                    />
                    
                    <Route exact path="/exp/task-history" component={TaskHistory} />
                    <Route exact path="/exp/achievements" component={Achievements} />
                    <Route exact path="/exp/settings" component={Settings} />
                </Switch>
            </div>
        );
    }
    
}

export default ExpDashboard;