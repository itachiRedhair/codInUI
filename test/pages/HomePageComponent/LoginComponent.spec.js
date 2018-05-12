import React from "react";
import { mount } from "enzyme";
import LoginComponent from "../../../src/pages/Homepage/LoginComponent";

describe("LoginComponent", () => {
  let props;
  let mountedLockScreen;
  const loginForm = () => {
    if (!mountedLoginComponent) {
      mountedLoginComponent = mount(LoginComponent);
    }
    return mountedLoginComponent;
  };

  beforeEach(() => {
    props = {
      wallpaperPath: undefined,
      userInfoMessage: undefined,
      onUnlocked: undefined
    };
    mountedLockScreen = undefined;
  });

  // All tests will go here
  it("always renders a form", () => {
    const forms = loginForm().find("form");
    expect(forms.length).toBeGreaterThan(0);
  });

  it("always renders a `Input`", () => {
    expect(loginForm().find(Input).length).toBe(2);
  });

});
