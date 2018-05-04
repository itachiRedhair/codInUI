import React, { Component } from "react";
import { Button } from "react-bootstrap";

//styles
import "./ButtonComponent.scss";

const InputComponent = ({ children, ...props }) => {
  return (
    <Button {...props} className="custom-button">
      {" "}
      {children}{" "}
    </Button>
  );
};

export default InputComponent;
