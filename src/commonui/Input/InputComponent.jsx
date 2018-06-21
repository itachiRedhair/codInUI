import React from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

// styles
import './InputComponent.scss';
import './../../styles/_typography.scss';

const InputComponent = ({ id, label, help, className = '', ...props }) => (
  <FormGroup controlId={id}>
    <ControlLabel className="input-label">{label}</ControlLabel>
    <FormControl {...props} className={`text-field ${className}`} />
    {help && <HelpBlock>{help}</HelpBlock>}
  </FormGroup>
);

export default InputComponent;
