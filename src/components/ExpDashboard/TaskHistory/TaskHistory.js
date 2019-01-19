import React from "react";
import "../../../assets/sass/main.scss";

import CompletedTask from "./CompletedTask/CompletedTask";

const TaskHistory = ({
  activeUser,
  optionSelected,
  highlightOption,
  convertTime
}) => {
  let recentTasks = Object.assign([], activeUser.tasksCompleted).reverse();
  const first10 = recentTasks.filter((task, index) => index < 10);
  const second10 = recentTasks.filter((task, index) => index > 9 && index < 20);
  const tasks1 = activeUser.tasksCompleted ? (
    <div className="TaskHistory__tasks">
      {first10.map(task => (
        <CompletedTask
          name={task.name}
          key={task.timeStamp}
          exp={task.experienceGained}
          time={task.timeStamp}
          convertTime={convertTime}
        />
      ))}
    </div>
  ) : (
    <div>loading</div>
  );

  const tasks2 = activeUser.tasksCompleted ? (
    <div className="TaskHistory__tasks">
      {second10.map(task => (
        <CompletedTask
          name={task.name}
          key={task.timeStamp}
          exp={task.experienceGained}
          time={task.timeStamp}
          convertTime={convertTime}
        />
      ))}
    </div>
  ) : (
    <div>loading</div>
  );

  return (
    <div className="TaskHistory">
      <div className="TaskHistory__label">Last 20 tasks: </div>
      <div className="TaskHistory__columns">
        <div className="TaskHistory__first10">{tasks1}</div>
        <div className="TaskHistory__second10">{tasks2}</div>
      </div>
    </div>
  );
};

export default TaskHistory;
