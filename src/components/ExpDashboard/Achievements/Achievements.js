import React from "react";
import "../../../assets/sass/main.scss";

import AchievementTask from "./AchievementTask/AchievementTask";

const Achievements = ({ activeUser, optionSelected, highlightOption }) => {
  const tasks = [
    "coding",
    "cookfood",
    "read",
    "socialize",
    "weights",
    "meetup",
    "journalling",
    "meditation",
    "pairprogramming",
    "completeproject",
    "brushteeth",
    "paybills",
    "plannewproject",
    "cleanroom",
    "deployproject",
    "running"
  ];
  let tasksCompleted = Object.assign([], activeUser.tasksCompleted);
  let combined = tasks.map(task => {
    let amount = tasksCompleted.filter(instance => instance.name === task)
      .length;

    return {
      name: task,
      times: amount
    };
  });
  let completedFive = combined.filter(task => task.times >= 5);
  let completedTen = combined.filter(task => task.times >= 10);
  let completedTwentyfive = combined.filter(task => task.times >= 25);

  return (
    <div className="Achievements">
      <div className="Achievements__label">Completed 5 times</div>
      <div className="Achievements__tasks">
        {completedFive.map((task, index) => (
          <AchievementTask name={task.name} key={index} times={task.times} />
        ))}
      </div>
      <div className="Achievements__label">Completed 10 times</div>
      <div className="Achievements__tasks">
        {completedTen.map((task, index) => (
          <AchievementTask name={task.name} key={index} times={task.times} />
        ))}
      </div>
      <div className="Achievements__label">Completed 25 times</div>
      <div className="Achievements__tasks">
        {completedTwentyfive.map((task, index) => (
          <AchievementTask name={task.name} key={index} times={task.times} />
        ))}
      </div>
    </div>
  );
};

export default Achievements;
