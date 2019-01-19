import React, { Component } from "react";
import "../../../assets/sass/main.scss";

import forest from "../../../assets/images/backgrounds/forest4.jpg";
import ocean from "../../../assets/images/backgrounds/ocean2.jpg";
import mountains from "../../../assets/images/backgrounds/mountains1.jpg";

import pizza from "../../../assets/images/food/pizza.png";
import carrots from "../../../assets/images/food/carrot.png";
import egg from "../../../assets/images/food/egg.png";
import icecream from "../../../assets/images/food/icecream.png";
import mushroom from "../../../assets/images/food/mushroom.png";
import broccoli from "../../../assets/images/food/broccoli.png";
import fish from "../../../assets/images/food/fish.png";

import running from "../../../assets/images/activity/running.png";
import swimming from "../../../assets/images/activity/swimming.png";
import walking from "../../../assets/images/activity/walking.png";
import weights from "../../../assets/images/activity/weights.png";
import yoga from "../../../assets/images/activity/yoga.png";

import trees from "../../../assets/images/nature/trees.png";
import fields from "../../../assets/images/nature/fields.png";
import flower from "../../../assets/images/nature/flower.png";
import bees from "../../../assets/images/nature/bees.png";
import sky from "../../../assets/images/nature/sky.png";
import volcano from "../../../assets/images/nature/volcano.png";
import desert from "../../../assets/images/nature/desert.png";

class Settings extends Component {
  state = {
    optionSelected: "pizza"
  };
  selectOption = option => {
    this.setState(() => ({ optionSelected: option }));
  };
  unselectOption = option => {
    if (this.state.optionSelected === option) {
      this.setState(() => ({ optionSelected: "" }));
    }
  };
  render() {
    const {
      changeTheme,
      theme,
      selectFavorite,
      favoritesSelected
    } = this.props;
    let selectedFood = favoritesSelected.food;
    let selectedActivity = favoritesSelected.activity;
    let selectedNature = favoritesSelected.nature;

    return (
      <div className="Settings">
        <div className="Settings__themes--header">Change Theme: </div>
        <div className="Settings__themes">
          <div
            className={
              (theme === "forest"
                ? "Settings__theme--selected Settings__forestselected"
                : "") + " Settings__forest Settings__theme"
            }
            onClick={() => changeTheme("forest")}
          >
            <div className="Settings__theme--text">Forest</div>
            <img
              src={forest}
              alt="forest"
              className="Settings__theme--image "
            />
          </div>
          <div
            className={
              (theme === "ocean" ? "Settings__theme--selected" : "") +
              " Settings__ocean Settings__theme"
            }
            onClick={() => changeTheme("ocean")}
          >
            <div className="Settings__theme--text">Ocean</div>
            <img src={ocean} alt="ocean" className="Settings__theme--image" />
          </div>
          <div
            className={
              (theme === "mountains"
                ? "Settings__theme--selected Settings__mountainsselected"
                : "") + " Settings__mountains Settings__theme"
            }
            onClick={() => changeTheme("mountains")}
          >
            <div className="Settings__theme--text">Mountains</div>
            <img
              src={mountains}
              alt="mountains"
              className="Settings__theme--image"
            />
          </div>
        </div>
        <div className="Settings__favorites">
          <div className="Settings__label">Favorite Food</div>
          <div className="Settings__foods">
            <img
              onClick={() => selectFavorite("food", "pizza")}
              onMouseOver={() => this.selectOption("pizza")}
              onMouseOut={() => this.unselectOption("pizza")}
              className={
                (selectedFood === "pizza"
                  ? "Settings__favorite option"
                  : "option") +
                " " +
                (this.state.optionSelected === "pizza"
                  ? "Settings__selected profile-image"
                  : "profile-image")
              }
              src={pizza}
              alt="pizza"
            />
            <img
              onClick={() => selectFavorite("food", "carrots")}
              onMouseOver={() => this.selectOption("carrots")}
              onMouseOut={() => this.unselectOption("carrots")}
              className={
                (selectedFood === "carrots"
                  ? "Settings__favorite option"
                  : "option") +
                " " +
                (this.state.optionSelected === "carrots"
                  ? "Settings__selected profile-image"
                  : "profile-image")
              }
              src={carrots}
              alt="carrots"
            />
            <img
              onClick={() => selectFavorite("food", "egg")}
              onMouseOver={() => this.selectOption("egg")}
              onMouseOut={() => this.unselectOption("egg")}
              className={
                (selectedFood === "egg"
                  ? "Settings__favorite option"
                  : "option") +
                " " +
                (this.state.optionSelected === "egg"
                  ? "Settings__selected profile-image"
                  : "profile-image")
              }
              src={egg}
              alt="egg"
            />
            <img
              onClick={() => selectFavorite("food", "icecream")}
              onMouseOver={() => this.selectOption("icecream")}
              onMouseOut={() => this.unselectOption("icecream")}
              className={
                (selectedFood === "icecream"
                  ? "Settings__favorite option"
                  : "option") +
                " " +
                (this.state.optionSelected === "icecream"
                  ? "Settings__selected profile-image"
                  : "profile-image")
              }
              src={icecream}
              alt="icecream"
            />
            <img
              onClick={() => selectFavorite("food", "mushroom")}
              onMouseOver={() => this.selectOption("mushroom")}
              onMouseOut={() => this.unselectOption("mushroom")}
              className={
                (selectedFood === "mushroom"
                  ? "Settings__favorite option"
                  : "option") +
                " " +
                (this.state.optionSelected === "mushroom"
                  ? "Settings__selected profile-image"
                  : "profile-image")
              }
              src={mushroom}
              alt="mushroom"
            />
            <img
              onClick={() => selectFavorite("food", "broccoli")}
              onMouseOver={() => this.selectOption("broccoli")}
              onMouseOut={() => this.unselectOption("broccoli")}
              className={
                (selectedFood === "broccoli"
                  ? "Settings__favorite option"
                  : "option") +
                " " +
                (this.state.optionSelected === "broccoli"
                  ? "Settings__selected profile-image"
                  : "profile-image")
              }
              src={broccoli}
              alt="broccoli"
            />
            <img
              onClick={() => selectFavorite("food", "fish")}
              onMouseOver={() => this.selectOption("fish")}
              onMouseOut={() => this.unselectOption("fish")}
              className={
                (selectedFood === "fish"
                  ? "Settings__favorite option"
                  : "option") +
                " " +
                (this.state.optionSelected === "fish"
                  ? "Settings__selected profile-image"
                  : "profile-image")
              }
              src={fish}
              alt="fish"
            />
          </div>

          <div className="Settings__label">Favorite Activity</div>
          <div className="Settings__activities">
            <img
              onClick={() => selectFavorite("activity", "walking")}
              onMouseOver={() => this.selectOption("walking")}
              onMouseOut={() => this.unselectOption("walking")}
              className={
                (selectedActivity === "walking"
                  ? "Settings__favorite option"
                  : "option") +
                " " +
                (this.state.optionSelected === "walking"
                  ? "Settings__selected profile-image"
                  : "profile-image")
              }
              src={walking}
              alt="walking"
            />
            <img
              onClick={() => selectFavorite("activity", "swimming")}
              onMouseOver={() => this.selectOption("swimming")}
              onMouseOut={() => this.unselectOption("swimming")}
              className={
                (selectedActivity === "swimming"
                  ? "Settings__favorite option"
                  : "option") +
                " " +
                (this.state.optionSelected === "swimming"
                  ? "Settings__selected profile-image"
                  : "profile-image")
              }
              src={swimming}
              alt="swimming"
            />
            <img
              onClick={() => selectFavorite("activity", "weights")}
              onMouseOver={() => this.selectOption("weights")}
              onMouseOut={() => this.unselectOption("weights")}
              className={
                (selectedActivity === "weights"
                  ? "Settings__favorite option"
                  : "option") +
                " " +
                (this.state.optionSelected === "weights"
                  ? "Settings__selected profile-image"
                  : "profile-image")
              }
              src={weights}
              alt="weights"
            />
            <img
              onClick={() => selectFavorite("activity", "yoga")}
              onMouseOver={() => this.selectOption("yoga")}
              onMouseOut={() => this.unselectOption("yoga")}
              className={
                (selectedActivity === "yoga"
                  ? "Settings__favorite option"
                  : "option") +
                " " +
                (this.state.optionSelected === "yoga"
                  ? "Settings__selected profile-image"
                  : "profile-image")
              }
              src={yoga}
              alt="yoga"
            />
            <img
              onClick={() => selectFavorite("activity", "running")}
              onMouseOver={() => this.selectOption("running")}
              onMouseOut={() => this.unselectOption("running")}
              className={
                (selectedActivity === "running"
                  ? "Settings__favorite option"
                  : "option") +
                " " +
                (this.state.optionSelected === "running"
                  ? "Settings__selected profile-image"
                  : "profile-image")
              }
              src={running}
              alt="running"
            />
          </div>

          <div className="Settings__label">Favorite Nature</div>
          <div className="Settings__natures">
            <img
              onClick={() => selectFavorite("nature", "trees")}
              onMouseOver={() => this.selectOption("trees")}
              onMouseOut={() => this.unselectOption("trees")}
              className={
                (selectedNature === "trees"
                  ? "Settings__favorite option"
                  : "option") +
                " " +
                (this.state.optionSelected === "trees"
                  ? "Settings__selected profile-image"
                  : "profile-image")
              }
              src={trees}
              alt="trees"
            />
            <img
              onClick={() => selectFavorite("nature", "fields")}
              onMouseOver={() => this.selectOption("fields")}
              onMouseOut={() => this.unselectOption("fields")}
              className={
                (selectedNature === "fields"
                  ? "Settings__favorite option"
                  : "option") +
                " " +
                (this.state.optionSelected === "fields"
                  ? "Settings__selected profile-image"
                  : "profile-image")
              }
              src={fields}
              alt="fields"
            />
            <img
              onClick={() => selectFavorite("nature", "flower")}
              onMouseOver={() => this.selectOption("flower")}
              onMouseOut={() => this.unselectOption("flower")}
              className={
                (selectedNature === "flower"
                  ? "Settings__favorite option"
                  : "option") +
                " " +
                (this.state.optionSelected === "flower"
                  ? "Settings__selected profile-image"
                  : "profile-image")
              }
              src={flower}
              alt="flower"
            />
            <img
              onClick={() => selectFavorite("nature", "bees")}
              onMouseOver={() => this.selectOption("bees")}
              onMouseOut={() => this.unselectOption("bees")}
              className={
                (selectedNature === "bees"
                  ? "Settings__favorite option"
                  : "option") +
                " " +
                (this.state.optionSelected === "bees"
                  ? "Settings__selected profile-image"
                  : "profile-image")
              }
              src={bees}
              alt="bees"
            />
            <img
              onClick={() => selectFavorite("nature", "sky")}
              onMouseOver={() => this.selectOption("sky")}
              onMouseOut={() => this.unselectOption("sky")}
              className={
                (selectedNature === "sky"
                  ? "Settings__favorite option"
                  : "option") +
                " " +
                (this.state.optionSelected === "sky"
                  ? "Settings__selected profile-image"
                  : "profile-image")
              }
              src={sky}
              alt="sky"
            />
            <img
              onClick={() => selectFavorite("nature", "volcano")}
              onMouseOver={() => this.selectOption("volcano")}
              onMouseOut={() => this.unselectOption("volcano")}
              className={
                (selectedNature === "volcano"
                  ? "Settings__favorite option"
                  : "option") +
                " " +
                (this.state.optionSelected === "volcano"
                  ? "Settings__selected profile-image"
                  : "profile-image")
              }
              src={volcano}
              alt="volcano"
            />
            <img
              onClick={() => selectFavorite("nature", "desert")}
              onMouseOver={() => this.selectOption("desert")}
              onMouseOut={() => this.unselectOption("desert")}
              className={
                (selectedNature === "desert"
                  ? "Settings__favorite option"
                  : "option") +
                " " +
                (this.state.optionSelected === "desert"
                  ? "Settings__selected profile-image"
                  : "profile-image")
              }
              src={desert}
              alt="desert"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Settings;
