import React from "react";
import "../../../../assets/sass/main.scss";
import PropTypes from "prop-types";

const ModalBackdrop = ({ show, closeDeleteModal }) => {
  return show ? (
    <div className="ModalBackdrop" onClick={closeDeleteModal} />
  ) : null;
};
ModalBackdrop.propTypes = {
  show: PropTypes.bool,
  closeDeleteModal: PropTypes.func
};
export default ModalBackdrop;
