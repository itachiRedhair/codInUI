import React from 'react';
import { Button } from 'react-bootstrap';

// styles
import './ButtonComponent.scss';

const InputComponent = ({ children, ...props }) => (
  <Button {...props} className="custom-button">
    {' '}
    {children}
    {' '}
  </Button>
);

export default InputComponent;

