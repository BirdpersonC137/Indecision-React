import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const OptionModal = (props) => (
    //requires two props
    <Modal
        isOpen={!!props.selectedOption}
        onRequestClose = {props.handleCloseModal}
        contentLabel="Selected Options"
    >
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button onClick={props.handleCloseModal}>Close</button>
    </Modal>
)

Modal.setAppElement('#app');
export default OptionModal