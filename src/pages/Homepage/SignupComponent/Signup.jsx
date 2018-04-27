import React, { Component } from "react";
import {
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
  Checkbox,
  Button
} from "react-bootstrap";

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

const SignupFormInstance = (
  <form>
    <FieldGroup
      id="formControlsSignupEmail"
      type="email"
      label="Email address"
      placeholder="Enter email"
    />

    <FieldGroup
      id="formControlsSignupPassword"
      label="Password"
      type="password"
    />

    <Checkbox checked readOnly>
      Keep me logged in.
    </Checkbox>

    <Button type="submit">Login</Button>
  </form>
);

export default class SingupFormComponent extends Component {
  render() {
    return SignupFormInstance;
  }
}