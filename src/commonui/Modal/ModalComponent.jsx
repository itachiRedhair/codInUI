import React, { Component } from "react";
import { Modal, ModalBody, ModalHeader, MenuItem, ModalFooter } from "react-bootstrap";

//styles
import './ModalComponent.scss';

const ModalComponent = ({ ...props, children }) => {
  return <Modal {...props}>
    {children}
  </Modal>;
};

export default ModalComponent;
