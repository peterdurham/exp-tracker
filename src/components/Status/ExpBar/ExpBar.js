import React from "react";
import "../../../assets/sass/main.scss";
import PropTypes from "prop-types";

const ExpBar = ({ activeUser, activeAnimation, animationExp }) => {
  return (
    <div className="ExpBar">
      <div
        className={activeAnimation ? "exp-gain-animated exp-gain" : "exp-gain"}
      >
        +{animationExp}
      </div>
      <div className="ExpBar__container">
        <div
          style={{
            width: `${activeUser.levelPercentage * 2}px`,
            backgroundColor: "rgb(18,96,217)",
            height: "3.8rem"
          }}
        />
        <div className="ExpBar__level">Level {activeUser.level}</div>
      </div>
    </div>
  );
};

ExpBar.propTypes = {
  activeUser: PropTypes.object,
  activeAnimation: PropTypes.bool,
  animationExp: PropTypes.number
};
export default ExpBar;
