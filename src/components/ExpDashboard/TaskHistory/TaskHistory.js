import React from 'react';
import '../../../assets/sass/main.scss';

import CompletedTask from './CompletedTask/CompletedTask';

const TaskHistory = ({activeUser, optionSelected, highlightOption, convertTime }) => {
    let recentTasks = Object.assign([], activeUser.tasksCompleted).reverse();
    let first20 = recentTasks.filter((task, index) => index < 20);
    
    const tasks = (activeUser.tasksCompleted) ? 
    <div className="TaskHistory__tasks">{first20.map((task) => <CompletedTask 
        name={task.name}
        key={task.timeStamp}
        exp={task.experienceGained}
        time={task.timeStamp}
        convertTime = {convertTime}
        />)}</div> 
    : <div>loading</div>;
    
    return(
        <div className="TaskHistory">
            <div className="TaskHistory__label">Last 20 tasks: </div>
            {tasks}
        </div>
    );
}

export default TaskHistory;