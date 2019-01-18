import React from 'react';

import coding from '../../assets/images/tasks/coding.png';
import cookfood from '../../assets/images/tasks/cookfood.png';
import read from '../../assets/images/tasks/read.png';
import socialize from '../../assets/images/tasks/socialize.png';
import weights from '../../assets/images/tasks/weights.png';
import meetup from '../../assets/images/tasks/meetup.png';
import journalling from '../../assets/images/tasks/journalling.png';
import meditation from '../../assets/images/tasks/meditation.png';
import pairprogramming from '../../assets/images/tasks/pairprogramming.png';
import completeproject from '../../assets/images/tasks/completeproject.png';
import brushteeth from '../../assets/images/tasks/brushteeth.png';
import paybills from '../../assets/images/tasks/paybills.png';
import plannewproject from '../../assets/images/tasks/plannewproject.png';
import cleanroom from '../../assets/images/tasks/cleanroom.png';
import deployproject from '../../assets/images/tasks/deployproject.png';
import running from '../../assets/images/tasks/running.png';

const Task = ({ taskName, completeTask, optionSelected }) => {
    let image;
    let label;
    if(taskName === 'coding') {
        image = <img src={coding} alt='coding' className="Task__image"/>;
        label = "Coding Session"
    } else if(taskName === 'read') {
        image = <img src={read} alt='read' className="Task__image" />;
        label = "Read";
    } else if (taskName === 'socialize') {
        image = <img src={socialize} alt='socialize' className="Task__image" />;
        label = "Socialize";
    } else if (taskName === 'weights') {
        image = <img src={weights} alt='weights' className="Task__image" />;
        label = "Lift Weights";
    } else if (taskName === 'meetup') {
        image = <img src={meetup} alt='meetup' className="Task__image" />;
        label = "Goto a Meetup";
    } else if (taskName === 'journalling') {
        image = <img src={journalling} alt='journalling' className="Task__image" />;
        label = "Journalling";
    } else if (taskName === 'meditation') {
        image = <img src={meditation} alt='meditation' className="Task__image" />;
        label = "Meditation";
    } else if (taskName === 'pairprogramming') {
        image = <img src={pairprogramming} alt='pairprogramming' className="Task__image" />;
        label = "Pair Programming";
    } else if (taskName === 'completeproject') {
        image = <img src={completeproject} alt='completeproject' className="Task__image" />;
        label = "Complete a Project";
    } else if (taskName === 'brushteeth') {
        image = <img src={brushteeth} alt='brushteeth' className="Task__image" />;
        label = "Brush Teeth";
    } else if (taskName === 'paybills') {
        image = <img src={paybills} alt='paybills' className="Task__image" />;
        label = "Pay Bills";
    } else if (taskName === 'plannewproject') {
        image = <img src={plannewproject} alt='plannewproject' className="Task__image" />;
        label = "Plan New Project";
    } else if (taskName === 'cookfood') {
        image = <img src={cookfood} alt='cookfood' className="Task__image" />;
        label = "Cook Meal";
    } else if (taskName === 'cleanroom') {
        image = <img src={cleanroom} alt='cleanroom' className="Task__image" />;
        label = "Clean Room";
    } else if (taskName === 'deployproject') {
        image = <img src={deployproject} alt='deployproject' className="Task__image" />;
        label = "Deploy a Project";
    } else if (taskName === 'running') {
        image = <img src={running} alt='running' className="Task__image" />;
        label = "Running or Walking";
    }
    
    
    return (
        <div onClick={()=>completeTask(taskName)} 
        className={optionSelected === taskName ? 'Task__selected Task': 'Task'}
        
        >
            {image}
            {label}
        </div>
    );
}

export default Task;