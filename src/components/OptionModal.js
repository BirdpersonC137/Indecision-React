import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const OptionModal = (props) => (
    //requires two props
    <Modal
        isOpen={!!props.selectedOption}
        onRequestClose = {props.handleCloseModal}
        contentLabel="Selected Options"
        closeTimeoutMS={200}
        className="modal"
    >
        <h3 className="modal__title">Selected Option</h3>
        {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
        <button className="button" onClick={props.handleCloseModal}>Close</button>
    </Modal>
)

export default OptionModal