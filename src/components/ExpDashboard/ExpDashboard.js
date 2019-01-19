import React, { Component } from "react";
import { Link, Route, Switch, Redirect } from "react-router-dom";
import KeyboardEventHandler from "react-keyboard-event-handler";
import "../../assets/sass/main.scss";
import PropTypes from "prop-types";

import Header from "../Header/Header";
import Status from "../Status/Status";
import EarnExp from "../ExpDashboard/EarnExp/EarnExp";
import TaskHistory from "../ExpDashboard/TaskHistory/TaskHistory";
import Achievements from "../ExpDashboard/Achievements/Achievements";
import Settings from "../ExpDashboard/Settings/Settings";

class ExpDashboard extends Component {
  state = {
    optionSelected: "earn"
  };

  highlightOption = option => {
    this.setState(() => ({ optionSelected: option }));
  };
  keyPress = key => {
    const { optionSelected } = this.state;
    let newOption;
    const { completeTask } = this.props;

    if (
      (key === "up" &&
        (optionSelected === "earn" ||
          optionSelected === "history" ||
          optionSelected === "achievements" ||
          optionSelected === "settings")) ||
      (key === "left" &&
        (optionSelected === "mainmenu" || optionSelected === "switchuser"))
    ) {
      newOption = "mainmenu";
    } else if (
      (key === "right" && optionSelected === "status") ||
      (key === "up" && optionSelected === "mainmenu") ||
      (key === "left" && optionSelected === "switchuser")
    ) {
      newOption = "mainmenu";
    } else if (
      (key === "down" &&
        (optionSelected === "status" ||
          optionSelected === "mainmenu" ||
          optionSelected === "switchuser")) ||
      (key === "left" &&
        (optionSelected === "earn" || optionSelected === "history")) ||
      (key === "up" &&
        (optionSelected === "coding" ||
          optionSelected === "read" ||
          optionSelected === "socialize" ||
          optionSelected === "weights"))
    ) {
      newOption = "earn";
    } else if (
      (key === "right" &&
        (optionSelected === "mainmenu" || optionSelected === "switchuser")) ||
      (key === "up" && optionSelected === "switchuser")
    ) {
      newOption = "switchuser";
    } else if (
      (key === "right" && optionSelected === "earn") ||
      (key === "left" && optionSelected === "achievements")
    ) {
      newOption = "history";
    } else if (
      (key === "left" && optionSelected === "settings") ||
      (key === "right" && optionSelected === "history")
    ) {
      newOption = "achievements";
    } else if (
      (key === "right" && optionSelected === "settings") ||
      (key === "right" && optionSelected === "achievements")
    ) {
      newOption = "settings";
    } else if (
      (key === "left" &&
        (optionSelected === "coding" || optionSelected === "read")) ||
      (key === "up" && optionSelected === "meetup")
    ) {
      newOption = "coding";
    } else if (
      (key === "down" && optionSelected === "earn") ||
      (key === "right" && optionSelected === "coding") ||
      (key === "left" && optionSelected === "socialize") ||
      (key === "up" && optionSelected === "journalling")
    ) {
      newOption = "read";
    } else if (
      (key === "down" &&
        (optionSelected === "history" || optionSelected === "achievements")) ||
      (key === "right" && optionSelected === "read") ||
      (key === "left" && optionSelected === "weights") ||
      (key === "up" && optionSelected === "meditation")
    ) {
      newOption = "socialize";
    } else if (
      (key === "down" && optionSelected === "settings") ||
      (key === "right" &&
        (optionSelected === "socialize" || optionSelected === "weights")) ||
      (key === "up" && optionSelected === "pairprogramming")
    ) {
      newOption = "weights";
    } else if (
      (key === "down" && optionSelected === "coding") ||
      (key === "left" &&
        (optionSelected === "meetup" || optionSelected === "journalling")) ||
      (key === "up" && optionSelected === "completeproject")
    ) {
      newOption = "meetup";
    } else if (
      (key === "down" && optionSelected === "read") ||
      (key === "right" && optionSelected === "meetup") ||
      (key === "left" && optionSelected === "meditation") ||
      (key === "up" && optionSelected === "brushteeth")
    ) {
      newOption = "journalling";
    } else if (
      (key === "down" && optionSelected === "socialize") ||
      (key === "right" && optionSelected === "journalling") ||
      (key === "left" && optionSelected === "pairprogramming") ||
      (key === "up" && optionSelected === "paybills")
    ) {
      newOption = "meditation";
    } else if (
      (key === "down" && optionSelected === "weights") ||
      (key === "right" &&
        (optionSelected === "meditation" ||
          optionSelected === "pairprogramming")) ||
      (key === "up" && optionSelected === "plannewproject")
    ) {
      newOption = "pairprogramming";
    } else if (
      (key === "down" && optionSelected === "meetup") ||
      (key === "left" &&
        (optionSelected === "completeproject" ||
          optionSelected === "brushteeth")) ||
      (key === "up" && optionSelected === "cookfood")
    ) {
      newOption = "completeproject";
    } else if (
      (key === "down" && optionSelected === "journalling") ||
      (key === "right" && optionSelected === "completeproject") ||
      (key === "left" && optionSelected === "paybills") ||
      (key === "up" && optionSelected === "cleanroom")
    ) {
      newOption = "brushteeth";
    } else if (
      (key === "down" && optionSelected === "meditation") ||
      (key === "right" && optionSelected === "brushteeth") ||
      (key === "left" && optionSelected === "plannewproject") ||
      (key === "up" && optionSelected === "deployproject")
    ) {
      newOption = "paybills";
    } else if (
      (key === "down" && optionSelected === "pairprogramming") ||
      (key === "right" &&
        (optionSelected === "paybills" ||
          optionSelected === "plannewproject")) ||
      (key === "up" && optionSelected === "running")
    ) {
      newOption = "plannewproject";
    } else if (
      (key === "down" &&
        (optionSelected === "completeproject" ||
          optionSelected === "cookfood")) ||
      (key === "left" &&
        (optionSelected === "cookfood" || optionSelected === "cleanroom"))
    ) {
      newOption = "cookfood";
    } else if (
      (key === "down" && optionSelected === "brushteeth") ||
      (key === "right" && optionSelected === "cookfood") ||
      (key === "down" && optionSelected === "cleanroom") ||
      (key === "left" && optionSelected === "deployproject")
    ) {
      newOption = "cleanroom";
    } else if (
      (key === "down" &&
        (optionSelected === "paybills" ||
          optionSelected === "deployproject")) ||
      (key === "right" && optionSelected === "cleanroom") ||
      (key === "left" && optionSelected === "running")
    ) {
      newOption = "deployproject";
    } else if (
      (key === "down" &&
        (optionSelected === "plannewproject" ||
          optionSelected === "running")) ||
      (key === "right" &&
        (optionSelected === "running" || optionSelected === "deployproject"))
    ) {
      newOption = "running";
    } else if (key === "enter" && optionSelected === "mainmenu") {
      this.props.history.push("/");
    } else if (key === "enter" && optionSelected === "switchuser") {
      this.props.history.push("/switch-user");
    } else if (key === "enter" && optionSelected === "earn") {
      newOption = "earn";
      this.props.history.push("/exp/earn-exp");
    } else if (key === "enter" && optionSelected === "history") {
      newOption = "history";
      this.props.history.push("/exp/task-history");
    } else if (key === "enter" && optionSelected === "achievements") {
      newOption = "achievements";
      this.props.history.push("/exp/achievements");
    } else if (key === "enter" && optionSelected === "settings") {
      newOption = "settings";
      this.props.history.push("/exp/settings");
    } else if (
      key === "enter" &&
      (optionSelected === "coding" ||
        optionSelected === "read" ||
        optionSelected === "socialize" ||
        optionSelected === "weights" ||
        optionSelected === "meetup" ||
        optionSelected === "journalling" ||
        optionSelected === "meditation" ||
        optionSelected === "pairprogramming" ||
        optionSelected === "completeproject" ||
        optionSelected === "brushteeth" ||
        optionSelected === "paybills" ||
        optionSelected === "plannewproject" ||
        optionSelected === "cookfood" ||
        optionSelected === "cleanroom" ||
        optionSelected === "deployproject" ||
        optionSelected === "running")
    ) {
      completeTask(optionSelected);
      newOption = optionSelected;
    }

    this.setState(() => ({ optionSelected: newOption }));
  };
  render() {
    const {
      activeUser,
      favoritesSelected,
      favoriteActivity,
      favoriteFood,
      favoriteNature,
      completeTask,
      activeAnimation,
      triggerAnimation,
      animationExp,
      convertTime,
      changeTheme,
      theme,
      selectFavorite,
      profileImage
    } = this.props;

    return (
      <div
        className={
          "ExpDashboard " +
          (theme === "forest" ? "ExpDashboard__forest" : "") +
          (theme === "ocean" ? "ExpDashboard__ocean" : "") +
          (theme === "mountains" ? "ExpDashboard__mountains" : "")
        }
      >
        <KeyboardEventHandler
          handleKeys={["up", "down", "left", "right", "enter"]}
          onKeyEvent={(key, e) => this.keyPress(key)}
        />

        <Header />
        <div className="ExpDashboard__status">
          <Status
            activeUser={activeUser}
            favoriteFood={favoriteFood}
            favoriteActivity={favoriteActivity}
            favoriteNature={favoriteNature}
            optionSelected={this.state.optionSelected}
            activeAnimation={activeAnimation}
            animationExp={animationExp}
          />
          <Link
            to="/"
            className={
              this.state.optionSelected === "mainmenu"
                ? "ExpDashboard__mainmenu ExpDashboard__menulink"
                : "ExpDashboard__menulink"
            }
          >
            Main Menu
          </Link>
          <Link
            to="/switch-user"
            className={
              this.state.optionSelected === "switchuser"
                ? "ExpDashboard__switchuser ExpDashboard__menulink"
                : "ExpDashboard__menulink"
            }
          >
            Switch User
          </Link>
        </div>

        <div className="ExpDashboard__nav">
          <Link
            to="/exp/earn-exp"
            className={
              (this.state.optionSelected === "earn"
                ? "ExpDashboard__selected ExpDashboard__link"
                : "ExpDashboard__link") +
              " " +
              (this.props.location.pathname === "/exp/earn-exp"
                ? "ExpDashboard__active"
                : "")
            }
          >
            Earn
          </Link>
          <Link
            to="/exp/task-history"
            className={
              (this.state.optionSelected === "history"
                ? "ExpDashboard__selected ExpDashboard__link"
                : "ExpDashboard__link") +
              " " +
              (this.props.location.pathname === "/exp/task-history"
                ? "ExpDashboard__active"
                : "")
            }
          >
            History
          </Link>
          <Link
            to="/exp/achievements"
            className={
              (this.state.optionSelected === "achievements"
                ? "ExpDashboard__selected ExpDashboard__link"
                : "ExpDashboard__link") +
              " " +
              (this.props.location.pathname === "/exp/achievements"
                ? "ExpDashboard__active"
                : "")
            }
          >
            Achievements
          </Link>
          <Link
            to="/exp/settings"
            className={
              (this.state.optionSelected === "settings"
                ? "ExpDashboard__selected ExpDashboard__link"
                : "ExpDashboard__link") +
              " " +
              (this.props.location.pathname === "/exp/settings"
                ? "ExpDashboard__active"
                : "")
            }
          >
            Settings
          </Link>
        </div>

        <Switch>
          <Redirect exact from="/exp" to="/exp/earn-exp" />
          <Route
            path="/exp/earn-exp"
            render={() => (
              <EarnExp
                activeUser={activeUser}
                favoriteFood={favoriteFood}
                favoriteActivity={favoriteActivity}
                favoriteNature={favoriteNature}
                completeTask={completeTask}
                optionSelected={this.state.optionSelected}
                highlightOption={this.highlightOption}
                triggerAnimation={triggerAnimation}
              />
            )}
          />

          <Route
            path="/exp/task-history"
            render={() => (
              <TaskHistory
                activeUser={activeUser}
                optionSelected={this.state.optionSelected}
                highlightOption={this.highlightOption}
                convertTime={convertTime}
              />
            )}
          />
          <Route
            exact
            path="/exp/achievements"
            render={() => (
              <Achievements
                activeUser={activeUser}
                optionSelected={this.state.optionSelected}
                highlightOption={this.highlightOption}
              />
            )}
          />
          <Route
            exact
            path="/exp/settings"
            render={() => (
              <Settings
                changeTheme={changeTheme}
                theme={theme}
                selectFavorite={selectFavorite}
                profileImage={profileImage}
                favoriteFood={favoriteFood}
                favoriteActivity={favoriteActivity}
                favoriteNature={favoriteNature}
                favoritesSelected={favoritesSelected}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

ExpDashboard.propTypes = {
  activeUser: PropTypes.object,
  favoritesSelected: PropTypes.object,
  favoriteActivity: PropTypes.string,
  favoriteFood: PropTypes.string,
  favoriteNature: PropTypes.string,
  completeTask: PropTypes.func,
  activeAnimation: PropTypes.bool,
  triggerAnimation: PropTypes.func,
  animationExp: PropTypes.number,
  convertTime: PropTypes.func,
  changeTheme: PropTypes.func,
  theme: PropTypes.string,
  selectFavorite: PropTypes.func,
  profileImage: PropTypes.string
};

export default ExpDashboard;
