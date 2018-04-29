import React, { Component } from "react";
import {
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock
} from "react-bootstrap";

//styles
import "./InputComponent.scss";
import "./../../styles/_typography.scss";

const InputComponent = ({ id, label, help, ...props }) => {
  return (
    <FormGroup controlId={id}>
      <ControlLabel className="input-label">{label}</ControlLabel>
      <FormControl {...props} className="text-field" />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
};

export default InputComponent;
