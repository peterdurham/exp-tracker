import React from 'react';
import { Link, Route, Switch, Redirect } from 'react-router-dom';

import Header from '../Header/Header';
import Status from '../Status/Status';
import Task from '../Task/Task';
import EarnExp from '../ExpDashboard/EarnExp/EarnExp';
import TaskHistory from '../ExpDashboard/TaskHistory/TaskHistory';
import Achievements from '../ExpDashboard/Achievements/Achievements';
import Settings from '../ExpDashboard/Settings/Settings';

const ExpDashboard = (props) => {
    return(
        <div>Exp dashboard
            <Header />
            <Status 
                activeUser = {props.activeUser}
                favoriteFood = {props.favoriteFood}
                favoriteActivity = {props.favoriteActivity}
                favoriteNature = {props.favoriteNature}
            />
            <Link 
                to="/switch-user"
                
                >Switch User
            </Link>
            <Link to="/">
            Back to Main Menu
            </Link>
            <br/>

            <Link to="/exp/earn-exp">Earn</Link>
            <Link to="/exp/task-history">History</Link>
            <Link to="/exp/achievements">Achievements</Link>
            <Link to="/exp/settings">Settings</Link>

            <Switch>
                <Redirect exact from="/exp" to="/exp/earn-exp"/>
                <Route path="/exp/earn-exp" render={() => <EarnExp 
                    activeUser = {props.activeUser}
                    favoriteFood = {props.favoriteFood}
                    favoriteActivity = {props.favoriteFctivity}
                    favoriteNature = {props.favoriteNature}
                    completeTask = {props.completeTask} />
                }
                />
                
                <Route exact path="/exp/task-history" component={TaskHistory} />
                <Route exact path="/exp/achievements" component={Achievements} />
                <Route exact path="/exp/settings" component={Settings} />
            </Switch>
            

            <Task />
        </div>
    );
}

export default ExpDashboard;