import React, { Component } from "react";
import "../../assets/sass/main.scss";
import { Link } from "react-router-dom";

import bard from "../../assets/images/profile/bard.jpg";
import sorceress from "../../assets/images/profile/sorceress.jpg";
import ranger from "../../assets/images/profile/ranger.jpg";
import monk from "../../assets/images/profile/monk.jpg";
import wizard from "../../assets/images/profile/wizard.jpg";

import pizza from "../../assets/images/food/pizza.png";
import carrots from "../../assets/images/food/carrot.png";
import egg from "../../assets/images/food/egg.png";
import icecream from "../../assets/images/food/icecream.png";
import mushroom from "../../assets/images/food/mushroom.png";
import broccoli from "../../assets/images/food/broccoli.png";
import fish from "../../assets/images/food/fish.png";

import running from "../../assets/images/activity/running.png";
import swimming from "../../assets/images/activity/swimming.png";
import walking from "../../assets/images/activity/walking.png";
import weights from "../../assets/images/activity/weights.png";
import yoga from "../../assets/images/activity/yoga.png";

import trees from "../../assets/images/nature/trees.png";
import fields from "../../assets/images/nature/fields.png";
import flower from "../../assets/images/nature/flower.png";
import bees from "../../assets/images/nature/bees.png";
import sky from "../../assets/images/nature/sky.png";
import volcano from "../../assets/images/nature/volcano.png";
import desert from "../../assets/images/nature/desert.png";

class CreateProfile extends Component {
  state = {
    optionSelected: "bard"
  };
  selectOption = option => {
    this.setState(() => ({ optionSelected: option }));
  };
  unselectOption = option => {
    if (this.state.optionSelected === option) {
      this.setState(() => ({ optionSelected: "" }));
    }
  };

  // selectIconHandler = (option) => {
  //     this.setState(() => ({optionSelected: option}));
  // }

  render() {
    const {
      favoritesSelected,
      selectFavorite,
      nameInput,
      bindNameInput,
      createNewProfile,
      theme
    } = this.props;
    let selectedFood = favoritesSelected.food;
    let selectedActivity = favoritesSelected.activity;
    let selectedNature = favoritesSelected.nature;
    let profileImage = favoritesSelected.image;

    return (
      <div
        className={
          "CreateProfile " +
          (theme === "forest" ? "CreateProfile__forest" : "") +
          (theme === "ocean" ? "CreateProfile__ocean" : "") +
          (theme === "mountains" ? "CreateProfile__mountains" : "")
        }
      >
        <div className="CreateProfile__container">
          <h1 className="CreateProfile__header">EXP -- New Profile</h1>
          <div className="CreateProfile__main">
            <input
              placeholder="Enter name"
              onChange={e => bindNameInput(e)}
              value={nameInput}
              type="text"
              className={
                this.state.optionSelected === "input"
                  ? "CreateProfile__input CreateProfile__selected"
                  : "CreateProfile__input"
              }
            />

            <div className="CreateProfile__label">Choose profile image</div>
            <div className="CreateProfile__images">
              <img
                onClick={() => selectFavorite("image", "bard")}
                onMouseOver={() => this.selectOption("bard")}
                onMouseOut={() => this.unselectOption("bard")}
                className={
                  (profileImage === "bard"
                    ? "CreateProfile__favorite profile-image"
                    : "profile-image") +
                  " " +
                  (this.state.optionSelected === "bard"
                    ? "CreateProfile__selected profile-image"
                    : "profile-image")
                }
                src={bard}
                alt="pizza"
              />
              <img
                onClick={() => selectFavorite("image", "sorceress")}
                onMouseOver={() => this.selectOption("sorceress")}
                onMouseOut={() => this.unselectOption("sorceress")}
                className={
                  (profileImage === "sorceress"
                    ? "CreateProfile__favorite profile-image"
                    : "profile-image") +
                  " " +
                  (this.state.optionSelected === "sorceress"
                    ? "CreateProfile__selected profile-image"
                    : "profile-image")
                }
                src={sorceress}
                alt="carrots"
              />
              <img
                onClick={() => selectFavorite("image", "ranger")}
                onMouseOver={() => this.selectOption("ranger")}
                onMouseOut={() => this.unselectOption("ranger")}
                className={
                  (profileImage === "ranger"
                    ? "CreateProfile__favorite profile-image"
                    : "profile-image") +
                  " " +
                  (this.state.optionSelected === "ranger"
                    ? "CreateProfile__selected profile-image"
                    : "profile-image")
                }
                src={ranger}
                alt="egg"
              />
              <img
                onClick={() => selectFavorite("image", "monk")}
                onMouseOver={() => this.selectOption("monk")}
                onMouseOut={() => this.unselectOption("monk")}
                className={
                  (profileImage === "monk"
                    ? "CreateProfile__favorite profile-image"
                    : "profile-image") +
                  " " +
                  (this.state.optionSelected === "monk"
                    ? "CreateProfile__selected profile-image"
                    : "profile-image")
                }
                src={monk}
                alt="icecream"
              />
              <img
                onClick={() => selectFavorite("image", "wizard")}
                onMouseOver={() => this.selectOption("wizard")}
                onMouseOut={() => this.unselectOption("wizard")}
                className={
                  (profileImage === "wizard"
                    ? "CreateProfile__favorite profile-image"
                    : "profile-image") +
                  " " +
                  (this.state.optionSelected === "wizard"
                    ? "CreateProfile__selected profile-image"
                    : "profile-image")
                }
                src={wizard}
                alt="mushroom"
              />
            </div>

            <div className="CreateProfile__label">Favorite Food</div>
            <div className="CreateProfile__foods">
              <img
                onClick={() => selectFavorite("food", "pizza")}
                onMouseOver={() => this.selectOption("pizza")}
                onMouseOut={() => this.unselectOption("pizza")}
                className={
                  (selectedFood === "pizza"
                    ? "CreateProfile__favorite option"
                    : "option") +
                  " " +
                  (this.state.optionSelected === "pizza"
                    ? "CreateProfile__selected profile-image"
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
                    ? "CreateProfile__favorite option"
                    : "option") +
                  " " +
                  (this.state.optionSelected === "carrots"
                    ? "CreateProfile__selected profile-image"
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
                    ? "CreateProfile__favorite option"
                    : "option") +
                  " " +
                  (this.state.optionSelected === "egg"
                    ? "CreateProfile__selected profile-image"
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
                    ? "CreateProfile__favorite option"
                    : "option") +
                  " " +
                  (this.state.optionSelected === "icecream"
                    ? "CreateProfile__selected profile-image"
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
                    ? "CreateProfile__favorite option"
                    : "option") +
                  " " +
                  (this.state.optionSelected === "mushroom"
                    ? "CreateProfile__selected profile-image"
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
                    ? "CreateProfile__favorite option"
                    : "option") +
                  " " +
                  (this.state.optionSelected === "broccoli"
                    ? "CreateProfile__selected profile-image"
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
                    ? "CreateProfile__favorite option"
                    : "option") +
                  " " +
                  (this.state.optionSelected === "fish"
                    ? "CreateProfile__selected profile-image"
                    : "profile-image")
                }
                src={fish}
                alt="fish"
              />
            </div>

            <div className="CreateProfile__label">Favorite Activity</div>
            <div className="CreateProfile__activities">
              <img
                onClick={() => selectFavorite("activity", "walking")}
                onMouseOver={() => this.selectOption("walking")}
                onMouseOut={() => this.unselectOption("walking")}
                className={
                  (selectedActivity === "walking"
                    ? "CreateProfile__favorite option"
                    : "option") +
                  " " +
                  (this.state.optionSelected === "walking"
                    ? "CreateProfile__selected profile-image"
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
                    ? "CreateProfile__favorite option"
                    : "option") +
                  " " +
                  (this.state.optionSelected === "swimming"
                    ? "CreateProfile__selected profile-image"
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
                    ? "CreateProfile__favorite option"
                    : "option") +
                  " " +
                  (this.state.optionSelected === "weights"
                    ? "CreateProfile__selected profile-image"
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
                    ? "CreateProfile__favorite option"
                    : "option") +
                  " " +
                  (this.state.optionSelected === "yoga"
                    ? "CreateProfile__selected profile-image"
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
                    ? "CreateProfile__favorite option"
                    : "option") +
                  " " +
                  (this.state.optionSelected === "running"
                    ? "CreateProfile__selected profile-image"
                    : "profile-image")
                }
                src={running}
                alt="running"
              />
            </div>

            <div className="CreateProfile__label">Favorite Nature</div>
            <div className="CreateProfile__natures">
              <img
                onClick={() => selectFavorite("nature", "trees")}
                onMouseOver={() => this.selectOption("trees")}
                onMouseOut={() => this.unselectOption("trees")}
                className={
                  (selectedNature === "trees"
                    ? "CreateProfile__favorite option"
                    : "option") +
                  " " +
                  (this.state.optionSelected === "trees"
                    ? "CreateProfile__selected profile-image"
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
                    ? "CreateProfile__favorite option"
                    : "option") +
                  " " +
                  (this.state.optionSelected === "fields"
                    ? "CreateProfile__selected profile-image"
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
                    ? "CreateProfile__favorite option"
                    : "option") +
                  " " +
                  (this.state.optionSelected === "flower"
                    ? "CreateProfile__selected profile-image"
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
                    ? "CreateProfile__favorite option"
                    : "option") +
                  " " +
                  (this.state.optionSelected === "bees"
                    ? "CreateProfile__selected profile-image"
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
                    ? "CreateProfile__favorite option"
                    : "option") +
                  " " +
                  (this.state.optionSelected === "sky"
                    ? "CreateProfile__selected profile-image"
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
                    ? "CreateProfile__favorite option"
                    : "option") +
                  " " +
                  (this.state.optionSelected === "volcano"
                    ? "CreateProfile__selected profile-image"
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
                    ? "CreateProfile__favorite option"
                    : "option") +
                  " " +
                  (this.state.optionSelected === "desert"
                    ? "CreateProfile__selected profile-image"
                    : "profile-image")
                }
                src={desert}
                alt="desert"
              />
            </div>

            <Link
              to="/exp"
              className={
                this.state.optionSelected === "createprofile"
                  ? "CreateProfile__button CreateProfile__create"
                  : "CreateProfile__button"
              }
              onClick={createNewProfile}
              onMouseOver={() => this.selectOption("createprofile")}
            >
              Create Profile
            </Link>
            <br />

            <Link
              to="/"
              className={
                this.state.optionSelected === "mainmenu"
                  ? "CreateProfile__button CreateProfile__mainmenu"
                  : "CreateProfile__button"
              }
              onMouseOver={() => this.selectOption("mainmenu")}
            >
              Back to Main Menu
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateProfile;
