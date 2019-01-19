import React from "react";
import "../../../../assets/sass/main.scss";

import coding from "../../../../assets/images/tasks/coding.png";
import cookfood from "../../../../assets/images/tasks/cookfood.png";
import read from "../../../../assets/images/tasks/read.png";
import socialize from "../../../../assets/images/tasks/socialize.png";
import weights from "../../../../assets/images/tasks/weights.png";
import meetup from "../../../../assets/images/tasks/meetup.png";
import journalling from "../../../../assets/images/tasks/journalling.png";
import meditation from "../../../../assets/images/tasks/meditation.png";
import pairprogramming from "../../../../assets/images/tasks/pairprogramming.png";
import completeproject from "../../../../assets/images/tasks/completeproject.png";
import brushteeth from "../../../../assets/images/tasks/brushteeth.png";
import paybills from "../../../../assets/images/tasks/paybills.png";
import plannewproject from "../../../../assets/images/tasks/plannewproject.png";
import cleanroom from "../../../../assets/images/tasks/cleanroom.png";
import deployproject from "../../../../assets/images/tasks/deployproject.png";
import running from "../../../../assets/images/tasks/running.png";

const AchievementTask = ({ name, times }) => {
  let image;
  let label;
  if (name === "coding") {
    image = (
      <img src={coding} alt="coding" className="AchievementTask__image" />
    );
    label = "Coding Session";
  } else if (name === "read") {
    image = <img src={read} alt="read" className="AchievementTask__image" />;
    label = "Read";
  } else if (name === "socialize") {
    image = (
      <img src={socialize} alt="socialize" className="AchievementTask__image" />
    );
    label = "Socialize";
  } else if (name === "weights") {
    image = (
      <img src={weights} alt="weights" className="AchievementTask__image" />
    );
    label = "Lift Weights";
  } else if (name === "meetup") {
    image = (
      <img src={meetup} alt="meetup" className="AchievementTask__image" />
    );
    label = "Goto a Meetup";
  } else if (name === "journalling") {
    image = (
      <img
        src={journalling}
        alt="journalling"
        className="AchievementTask__image"
      />
    );
    label = "Journalling";
  } else if (name === "meditation") {
    image = (
      <img
        src={meditation}
        alt="meditation"
        className="AchievementTask__image"
      />
    );
    label = "Meditation";
  } else if (name === "pairprogramming") {
    image = (
      <img
        src={pairprogramming}
        alt="pairprogramming"
        className="AchievementTask__image"
      />
    );
    label = "Pair Programming";
  } else if (name === "completeproject") {
    image = (
      <img
        src={completeproject}
        alt="completeproject"
        className="AchievementTask__image"
      />
    );
    label = "Complete a Project";
  } else if (name === "brushteeth") {
    image = (
      <img
        src={brushteeth}
        alt="brushteeth"
        className="AchievementTask__image"
      />
    );
    label = "Brush Teeth";
  } else if (name === "paybills") {
    image = (
      <img src={paybills} alt="paybills" className="AchievementTask__image" />
    );
    label = "Pay Bills";
  } else if (name === "plannewproject") {
    image = (
      <img
        src={plannewproject}
        alt="plannewproject"
        className="AchievementTask__image"
      />
    );
    label = "Plan New Project";
  } else if (name === "cookfood") {
    image = (
      <img src={cookfood} alt="cookfood" className="AchievementTask__image" />
    );
    label = "Cook Meal";
  } else if (name === "cleanroom") {
    image = (
      <img src={cleanroom} alt="cleanroom" className="AchievementTask__image" />
    );
    label = "Clean Room";
  } else if (name === "deployproject") {
    image = (
      <img
        src={deployproject}
        alt="deployproject"
        className="AchievementTask__image"
      />
    );
    label = "Deploy a Project";
  } else if (name === "running") {
    image = (
      <img src={running} alt="running" className="AchievementTask__image" />
    );
    label = "Running or Walking";
  }

  return (
    <div className="AchievementTask">
      {label}
      {image}
    </div>
  );
};

export default AchievementTask;
