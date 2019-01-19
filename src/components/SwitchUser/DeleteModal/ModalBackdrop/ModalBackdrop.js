import React from 'react';
import '../../../../assets/sass/main.scss';

const ModalBackdrop = ({ show, clicked, closeDeleteModal}) => {
    return (
        show ? <div className="ModalBackdrop" onClick={closeDeleteModal}></div> : null
    );
}

export default ModalBackdrop;