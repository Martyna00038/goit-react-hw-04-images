import React from 'react';
import ReactModal from 'react-modal';
import css from './modal.module.css';
import PropTypes from 'prop-types';

const Modal = ({ isOpen, imageUrl, onClose }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Modal"
      className={css.modal}
    >
      <div className={css.overlay} onClick={onClose}>
        <div className={css.modal}>
          <img src={imageUrl} alt="" onClick={e => e.stopPropagation()} />
          <button onClick={onClose} className={css.btn}>
            x
          </button>
        </div>
      </div>
    </ReactModal>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  imageUrl: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
