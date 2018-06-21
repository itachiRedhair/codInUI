import React, { Component } from "react";
import { FormGroup, Checkbox } from "react-bootstrap";

// styles
import "./Checkbox.scss";

const CheckboxComponent = ({ list }) => {
  const checkboxes = list.map(content => (
    <Checkbox key="content">{content}</Checkbox>
  ));
  return <FormGroup>{checkboxes}</FormGroup>;
};

export default CheckboxComponent;
