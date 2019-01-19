import React from "react";
import "../../../assets/sass/main.scss";
import Task from "../../Task/Task";
import PropTypes from "prop-types";
const EarnExp = ({
  completeTask,
  optionSelected,
  highlightOption,
  triggerAnimation
}) => {
  const tasks = [
    "coding",
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
    "cookfood",
    "cleanroom",
    "deployproject",
    "running"
  ];

  return (
    <div className="EarnExp">
      {tasks.map(task => (
        <Task
          key={task}
          taskName={task}
          completeTask={completeTask}
          optionSelected={optionSelected}
          highlightOption={highlightOption}
          triggerAnimation={triggerAnimation}
        />
      ))}
    </div>
  );
};
EarnExp.propTypes = {
  completeTask: PropTypes.func,
  optionSelected: PropTypes.string,
  highlightOption: PropTypes.func,
  triggerAnimation: PropTypes.func
};
export default EarnExp;
