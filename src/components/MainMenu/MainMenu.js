import React, { Component } from "react";
import { Link } from "react-router-dom";
import KeyboardEventHandler from "react-keyboard-event-handler";
import PropTypes from "prop-types";

import "../../assets/sass/main.scss";

class MainMenu extends Component {
  state = {
    optionSelected: "continue"
  };

  highlightOption = option => {
    this.setState(() => ({ optionSelected: option }));
  };

  keyPress = key => {
    const optionSelected = this.state.optionSelected;
    let newOption;

    if (key === "up" && (optionSelected === "newProfile" || optionSelected === "continue")) {
      newOption = "newProfile";
    } else if ((key === "up" && optionSelected === "switchUser") || (key === "down" && optionSelected === "newProfile")) {
      newOption = "continue";
    } else if ((key === "down" && optionSelected === "continue")||(key === "down" && optionSelected === "switchUser")) {
      newOption = "switchUser";
    } else if (
      key === "enter" &&
      optionSelected === "newProfile" &&
      this.props.users.length < 3
    ) {
      this.props.history.push("/create-profile");
    } else if (key === "enter" && optionSelected === "continue") {
      this.props.history.push("/exp");
    } else if (key === "enter" && optionSelected === "switchUser") {
      this.props.history.push("/switch-user");
    } else if (
      key === "enter" &&
      optionSelected === "newProfile" &&
      this.props.users.length === 3
    ) {
      newOption = "newProfile";
    }
    this.setState(() => ({ optionSelected: newOption }));
  };

  render() {
    const { activeUser, users, theme } = this.props;

    return (
      <div
        className={
          "MainMenu " +
          (theme === "forest" ? "MainMenu__forest" : "") +
          (theme === "ocean" ? "MainMenu__ocean" : "") +
          (theme === "mountains" ? "MainMenu__mountains" : "")
        }
      >
        <KeyboardEventHandler
          handleKeys={["up", "down", "enter"]}
          onKeyEvent={(key, e) => this.keyPress(key)}
        />
        <div className="MainMenu__container">
          <h1 className="MainMenu__header">EXP Tracker</h1>

          <ul>
            <li>
              {users.length < 3 ? (
                <Link
                  to="/create-profile"
                  onMouseOver={() => this.highlightOption("newProfile")}
                  className={
                    this.state.optionSelected === "newProfile"
                      ? "MainMenu__option MainMenu__selected"
                      : "MainMenu__option"
                  }
                >
                  New Profile
                </Link>
              ) : null}
            </li>
            <li>
              {users.length > 0 ? (
                <Link
                  to="/exp"
                  onMouseOver={() => this.highlightOption("continue")}
                  className={
                    this.state.optionSelected === "continue"
                      ? "MainMenu__option MainMenu__selected"
                      : "MainMenu__option"
                  }
                >
                  Continue as {activeUser.name}
                </Link>
              ) : null}
            </li>
            <li>
              <Link
                to="/switch-user"
                onMouseOver={() => this.highlightOption("switchUser")}
                className={
                  this.state.optionSelected === "switchUser"
                    ? "MainMenu__option MainMenu__selected"
                    : "MainMenu__option"
                }
              >
                Switch User
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
MainMenu.propTypes = {
  activeUser: PropTypes.object,
  users: PropTypes.array,
  theme: PropTypes.string
};
export default MainMenu;
