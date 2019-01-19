import React from 'react';
import '../../../assets/sass/main.scss';
import Task from '../../Task/Task';

const EarnExp = ({ completeTask, optionSelected, highlightOption, triggerAnimation }) => {
    const tasks = ['coding', 'read', 'socialize', 'weights', 'meetup', 'journalling', 'meditation', 'pairprogramming', 'completeproject', 'brushteeth', 'paybills', 'plannewproject', 'cookfood', 'cleanroom', 'deployproject', 'running'];
      
    return(
        <div>
            <div className="EarnExp__tasks">
            {tasks.map((task) => <Task
                key={task}
                taskName={task}
                
                completeTask={completeTask}
                optionSelected={optionSelected}
                highlightOption={highlightOption}
                triggerAnimation={triggerAnimation}
            />)}
            </div>
            
        </div>
    );
}

export default EarnExp;