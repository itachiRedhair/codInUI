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
    credentials: "include",
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

export const signUpRequest = ({ name, email, password, confirm }) => {
  const url = `${constants.API_URL}/v1/user/signup`;

  const options = {
    headers: getHeaders(),
    method: "POST",
    body: JSON.stringify({
      name,
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

export const projectRegisterRequest = projectNamee => {
  const url = `${constants.API_URL}/v1/project/register`;
  const name = projectNamee;
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

export const getUserProject = () => {
  const url = `${constants.API_URL}/v1/user/project`;
  const options = {
    method: "GET",
    credentials: "include"
  };
  return fetch(url, options)
    .then(response => {
      return response.json();
    })
    .catch(err => {
      throw new Error("Adding Project Failed");
    });
};

export const getUserSuggestions = (name) => {
    const url = `${constants.API_URL}/v1/user/suggestions/:${name}`;
    const options = {
      method: "GET",
      credentials: "include"
    };
    return fetch(url, options)
      .then(response => {
        return response.json();
      })
      .catch(err => {
        throw new Error("Loading Suggestion Failed");
      });
  };