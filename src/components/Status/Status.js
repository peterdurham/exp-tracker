import React from "react";

import FavoritesIcon from "../FavoritesIcon/FavoritesIcon";
import ExpBar from "../Status/ExpBar/ExpBar";

import "../../assets/sass/main.scss";
import bard from "../../assets/images/profile/bard.jpg";
import sorceress from "../../assets/images/profile/sorceress.jpg";
import ranger from "../../assets/images/profile/ranger.jpg";
import monk from "../../assets/images/profile/monk.jpg";
import wizard from "../../assets/images/profile/wizard.jpg";

const Status = ({
  activeUser,
  favoriteFood,
  favoriteActivity,
  favoriteNature,
  optionSelected,
  activeAnimation,
  animationExp
}) => {
  let img;
  if (activeUser.profileImage === "bard") {
    img = <img src={bard} alt="bard" className="Status__profile--image" />;
  } else if (activeUser.profileImage === "sorceress") {
    img = (
      <img src={sorceress} alt="sorceress" className="Status__profile--image" />
    );
  } else if (activeUser.profileImage === "ranger") {
    img = <img src={ranger} alt="ranger" className="Status__profile--image" />;
  } else if (activeUser.profileImage === "monk") {
    img = <img src={monk} alt="monk" className="Status__profile--image" />;
  } else if (activeUser.profileImage === "wizard") {
    img = <img src={wizard} alt="wizard" className="Status__profile--image" />;
  }
  return (
    <div
      className={
        optionSelected === "status" ? "Status__selected Status" : "Status"
      }
    >
      <div className="Status__profile">{img}</div>
      <div className="Status__name">{activeUser.name}</div>
      <div className="Status__icons">
        <FavoritesIcon favorite={favoriteFood} />
        <FavoritesIcon favorite={favoriteActivity} />
        <FavoritesIcon favorite={favoriteNature} />
      </div>

      <ExpBar
        activeUser={activeUser}
        activeAnimation={activeAnimation}
        animationExp={animationExp}
      />
    </div>
  );
};

export default Status;
