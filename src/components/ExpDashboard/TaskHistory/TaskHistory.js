import React from 'react';

const TaskHistory = ({activeUser, optionSelected, highlightOption}) => {
    
    
    const tasks = (activeUser.tasksCompleted) ? 
    <div>{activeUser.tasksCompleted.map((task) => <div>{task.name}{task.timeStamp}exp:{task.experienceGained}</div>)}</div> 
    : <div>loading</div>;
    
    return(
        <div>
            TaskHistory
            {tasks}
        </div>
    );
}

export default TaskHistory;