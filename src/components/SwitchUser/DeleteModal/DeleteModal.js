import React, { Component } from "react";
import "../../../assets/sass/main.scss";
import PropTypes from "prop-types";

import ModalUser from "./ModalUser/ModalUser";
import ModalBackdrop from "./ModalBackdrop/ModalBackdrop";

class DeleteModal extends Component {
  state = {
    optionSelected: ""
  };

  selectOption = option => {
    this.setState(() => ({ optionSelected: option }));
  };

  render() {
    const { users, deleteUser, show, closeDeleteModal } = this.props;

    return (
      <>
        <ModalBackdrop show={show} closeDeleteModal={closeDeleteModal} />
        <div className="DeleteModal">
          <div className="DeleteModal__text">
            Select user and click confirm to delete
          </div>

          {users.map((user, index) => (
            <ModalUser
              user={user}
              key={index}
              index={index}
              selectOption={this.selectOption}
              optionSelected={this.state.optionSelected}
            />
          ))}

          <div
            className="DeleteModal__link DeleteModal__delete"
            onClick={() => deleteUser(this.state.optionSelected)}
          >
            Delete
          </div>
          <br />
          <div
            className="DeleteModal__link DeleteModal__cancel"
            onClick={closeDeleteModal}
          >
            Cancel
          </div>
        </div>
      </>
    );
  }
}
DeleteModal.propTypes = {
  users: PropTypes.array,
  deleteUser: PropTypes.func,
  show: PropTypes.bool,
  closeDeleteModal: PropTypes.func
};
export default DeleteModal;
