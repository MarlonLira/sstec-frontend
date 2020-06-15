import React, { Component } from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

export default props => (
  <Modal
    isOpen={props.open}
    style={customStyles}
    contentLabel="Example Modal"
  >
    <h2>{props.modalTitle}</h2>
    <hr />
    <div>{props.description}</div>
    <div><span>{props.span}</span></div>
    {props.form}
  </Modal>
)