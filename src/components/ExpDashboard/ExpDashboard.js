import React, { Component } from 'react';
import { Link, Route, Switch, Redirect } from 'react-router-dom';
import KeyboardEventHandler from 'react-keyboard-event-handler';

import Header from '../Header/Header';
import Status from '../Status/Status';
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
        const { optionSelected } = this.state;
        let newOption;
        const { completeTask } = this.props;

        if((key==='up' && (optionSelected === 'status' || optionSelected === 'earn' || optionSelected === 'history' || optionSelected === 'achievements' || optionSelected === 'settings')) || (key==='left' && (optionSelected === 'status' || optionSelected === 'mainmenu')) || (key==='enter' && optionSelected === 'status')) {
            newOption = 'status';
        } else if((key==='right' && optionSelected === 'status') || (key==='up' && optionSelected === 'mainmenu') || (key==='left' && optionSelected === 'switchuser')) {
            newOption = 'mainmenu';
        } else if((key==='down' && (optionSelected === 'status' || optionSelected === 'mainmenu' || optionSelected === 'switchuser')) || (key==='left' && (optionSelected === 'earn' || optionSelected === 'history')) || (key==='up' && (optionSelected === 'coding' || optionSelected === 'read' || optionSelected === 'socialize' || optionSelected === 'weights'))) {
            newOption = 'earn';
        } else if((key==='right' && (optionSelected === 'mainmenu' || optionSelected === 'switchuser')) || (key==='up' && optionSelected === 'switchuser')) {
            newOption = 'switchuser';
        } else if((key==='right' && optionSelected === 'earn') || (key==='left' && optionSelected === 'achievements')) {
            newOption = 'history';
        } else if((key==='left' && optionSelected === 'settings') || (key==='right' && optionSelected === 'history')) {
            newOption = 'achievements';
        } else if((key==='right' && optionSelected === 'settings') || (key==='right' && optionSelected === 'achievements')) {
            newOption = 'settings';
        } else if((key==='left' && (optionSelected === 'coding' || optionSelected === 'read')) || (key==='up' && optionSelected === 'meetup')) {
            newOption = 'coding';
        } else if((key==='down' && optionSelected === 'earn') || (key==='right' && optionSelected === 'coding') || (key==='left' && optionSelected === 'socialize') || (key==='up' && optionSelected === 'journalling')) {
            newOption = 'read';
        } else if((key==='down' && (optionSelected === 'history' || optionSelected === 'achievements')) || (key==='right' && optionSelected === 'read') || (key==='left' && optionSelected === 'weights') || (key==='up' && optionSelected === 'meditation')) {
            newOption = 'socialize';
        } else if((key==='down' && optionSelected === 'settings') || (key==='right' && (optionSelected === 'socialize' || optionSelected === 'weights')) || (key==='up' && optionSelected === 'pairprogramming')) {
            newOption = 'weights';
        } else if((key==='down' && optionSelected === 'coding') || (key==='left' && (optionSelected === 'meetup' || optionSelected === 'journalling')) || (key==='up' && optionSelected === 'completeproject')) {
            newOption = 'meetup';
        } else if((key==='down' && optionSelected === 'read') || (key==='right' && optionSelected === 'meetup') || (key==='left' && optionSelected === 'meditation') || (key==='up' && optionSelected === 'brushteeth')) {
            newOption = 'journalling';
        } else if((key==='down' && optionSelected === 'socialize') || (key==='right' && optionSelected === 'journalling') || (key==='left' && optionSelected === 'pairprogramming') || (key==='up' && optionSelected === 'paybills')) {
            newOption = 'meditation';
        } else if((key==='down' && optionSelected === 'weights') || (key==='right' && (optionSelected === 'meditation' || optionSelected === 'pairprogramming')) || (key==='up' && optionSelected === 'plannewproject')) {
            newOption = 'pairprogramming';
        } else if((key==='down' && optionSelected === 'meetup') || (key==='left' && (optionSelected === 'completeproject' || optionSelected === 'brushteeth')) || (key==='up' && optionSelected === 'cookfood')) {
            newOption = 'completeproject';
        } else if((key==='down' && optionSelected === 'journalling') || (key==='right' && optionSelected === 'completeproject') || (key==='left' && optionSelected === 'paybills') || (key==='up' && optionSelected === 'cleanroom')) {
            newOption = 'brushteeth';
        } else if((key==='down' && optionSelected === 'meditation') || (key==='right' && optionSelected === 'brushteeth') || (key==='left' && optionSelected === 'plannewproject') || (key==='up' && optionSelected === 'deployproject')) {
            newOption = 'paybills';
        } else if((key==='down' && optionSelected === 'pairprogramming') || (key==='right' && (optionSelected === 'paybills' || optionSelected === 'plannewproject')) || (key==='up' && optionSelected === 'running')) {
            newOption = 'plannewproject';
        } else if((key==='down' && (optionSelected === 'completeproject' || optionSelected === 'cookfood')) || (key==='left' && (optionSelected === 'cookfood' || optionSelected === 'cleanroom'))) {
            newOption = 'cookfood';
        } else if((key==='down' && optionSelected === 'brushteeth') || (key==='right' && optionSelected === 'cookfood') || (key==='down' && optionSelected === 'cleanroom') || (key==='left' && optionSelected === 'deployproject')) {
            newOption = 'cleanroom';
        } else if((key==='down' && (optionSelected === 'paybills' || optionSelected === 'deployproject')) || (key==='right' && optionSelected === 'cleanroom') || (key==='left' && optionSelected === 'running')) {
            newOption = 'deployproject';
        } else if((key==='down' && (optionSelected === 'plannewproject' || optionSelected === 'running')) || (key==='right' && (optionSelected === 'running' || optionSelected === 'deployproject'))) {
            newOption = 'running';
        }

         else if(key==='enter' && optionSelected === 'mainmenu') {
            this.props.history.push('/');
        } else if(key==='enter' && optionSelected === 'switchuser') {
            this.props.history.push('/switch-user');
        } else if(key==='enter' && (optionSelected === 'coding'|| optionSelected === 'read' || optionSelected === 'socialize' || optionSelected === 'weights' || optionSelected === 'meetup' || optionSelected === 'journalling' || optionSelected === 'meditation'|| optionSelected === 'pairprogramming' || optionSelected === 'completeproject' || optionSelected === 'brushteeth' || optionSelected === 'paybills' || optionSelected === 'plannewproject' || optionSelected === 'cookfood' ||optionSelected === 'cleanroom' || optionSelected === 'deployproject' || optionSelected === 'running')) {
            completeTask(optionSelected);
            newOption = optionSelected;
        } 
        
        this.setState(() => ({ optionSelected: newOption }))
        
    }
    render() {
        const { activeUser, favoriteActivity, favoriteFood, favoriteNature, completeTask } = this.props;
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
                        highlightOption = {this.highlightOption}
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