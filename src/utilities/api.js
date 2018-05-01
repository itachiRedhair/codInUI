import fetch from "isomorphic-fetch";

import constants from "./../constants";

const getHeaders = () => {
  return {
    "Content-Type": "application/json"
  };
};

export const loginRequest = ({ email, password }) => {
  const url = `${constants.API_URL}/v1/user/login`;

  const options = {
    headers: getHeaders(),
    method: "POST",
    body: JSON.stringify({
      email,
      password
    })
  };

  return fetch(url, options)
    .then(response => {
      console.log(response);
      return response.json();
    })
    .catch(err => {
      throw new Error("Login Failed");
    });
};

export const signUpRequest = ({ email, password, confirm }) => {
  const url = `${constants.API_URL}/v1/user/signup`;

  const options = {
    headers: getHeaders(),
    method: "POST",
    body: JSON.stringify({
      email,
      password,
      confirm
    })
  };

  return fetch(url, options)
    .then(response => {
      return response.json();
    })
    .catch(err => {
      throw new Error("Signup Failed");
    });
};

export const projectRegisterRequest = () => {
  const url = `${constants.API_URL}/v1/project/register`;
    const name="Insite2 "
  const options = {
    headers: getHeaders(),
    method: "POST",
    credentials: "include",
    body: JSON.stringify({
      name
    })
  };

  return fetch(url, options)
    .then(response => {
      return response.json();
    })
    .catch(err => {
      throw new Error("Project Register Failed");
    });
};
