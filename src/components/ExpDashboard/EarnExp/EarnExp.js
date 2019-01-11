import React from 'react';

import Task from '../../Task/Task';

const EarnExp = ({ completeTask }) => {
    const tasks = ['coding', 'read', 'socialize', 'weights', 'meetup', 'journalling', 'meditation', 'pairprogramming', 'completeproject', 'brushteeth', 'paybills', 'plannewproject', 'cookfood', 'cleanroom', 'deployproject', 'running'];
      
    return(
        <div>
            EarnExp
            <div>Tasks:</div>
            
            <div className="EarnExp__tasks">
            {tasks.map((task) => <Task
                key={task}
                taskName={task}
                completeTask={completeTask}
            />)}
            </div>
            
        </div>
    );
}

export default EarnExp;