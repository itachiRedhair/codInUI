import fetch from "isomorphic-fetch";

import constants from "./../constants";

const { API_URL } = constants;

const getHeaders = () => {
  return {
    "Content-Type": "application/json"
  };
};

export const getUser = () => {
  const url = `${constants.API_URL}/v1/user/me`;

  const options = {
    headers: getHeaders(),
    method: "GET",
    credentials: "include"
  };

  return fetch(url, options)
    .then(response => {
      return response.json();
    })
    .catch(err => {
      throw new Error("User information retrieval failed.");
    });
  // return new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve(true);
  //   }, 500);
  // });
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
      return response.json();
    })
    .catch(err => {
      throw new Error("Login Failed");
    });
};

export const logoutRequest = () => {
  const url = `${constants.API_URL}/v1/user/logout`;

  const options = {
    headers: getHeaders(),
    method: "POST",
    credentials: "include"
  };

  return fetch(url, options)
    .then(response => {
      return response.json();
    })
    .catch(err => {
      throw new Error("Logout Failed");
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

export const projectRegisterRequest = (projectNamee, projectType) => {
  const url = `${constants.API_URL}/v1/project/register`;
  const name = projectNamee;
  const type = projectType;
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

export const getUserSuggestions = name => {
  const url = `${constants.API_URL}/v1/user/suggestions/${name}`;
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

export const addCollaborator = contributorParameters => {
  const url = `${constants.API_URL}/v1/project/contributor`;
  const contributorName = contributorParameters.name;
  const contributorID = contributorParameters.contributorID;
  const projectID = contributorParameters.projectID;
  const options = {
    headers: getHeaders(),
    method: "POST",
    credentials: "include",
    body: JSON.stringify({
      contributorName,
      contributorID,
      projectID
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

export const getContributors = projectId => {
  const url = `${constants.API_URL}/v1/project/${projectId}`;
  const options = {
    method: "GET",
    credentials: "include"
  };
  return fetch(url, options)
    .then(response => {
      return response.json();
    })
    .catch(err => {
      throw new Error("Loading Contributors Failed");
    });
};

export const getReport = (projectId, duration) => {
  const url = `${
    constants.API_URL
  }/v1/report/tslint/${projectId}/summary/${duration}`;
  const options = {
    method: "GET",
    credentials: "include" 
  };
  return fetch(url, options)
    .then(response => {
      return response.json();
    })
    .catch(err => {
      throw new Error("Loading Reports Failed");
    });
};

export const getReportDetails = (projectId, duration) => {
  const url = `${
    constants.API_URL
  }/v1/report/tslint/${projectId}/details/${duration}`;
  const options = {
    method: "GET",
    credentials: "include" 
  };
  return fetch(url, options)
    .then(response => {
      return response.json();
    })
    .catch(err => {
      throw new Error("Loading Reports Failed");
    });
};

export const getRecentSubmits = projectId => {
  const url = `${constants.API_URL}/v1/project/${projectId}/submissions`;
  const options = {
    method: "GET",
    credentials: "include"
  };
  return fetch(url, options)
    .then(response => {
      return response.json();
    })
    .catch(err => {
      throw new Error("Loading List of Submissions Failed");
    });
};