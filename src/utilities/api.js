import fetch from 'isomorphic-fetch';

import constants from './../constants';

const getHeaders = () => ({
  'Content-Type': 'application/json',
});

export const getUser = () => {
  const url = `${constants.API_URL}/v1/user/me`;

  const options = {
    headers: getHeaders(),
    method: 'GET',
    credentials: 'include',
  };

  return fetch(url, options)
    .then((response) => response.json())
    .catch((err) => {
      throw new Error('User information retrieval failed.');
    });
};

export const loginRequest = ({ email, password }) =>
  new Promise((resolve, reject) => {
    const url = `${constants.API_URL}/v1/user/login`;

    const options = {
      headers: getHeaders(),
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({
        email,
        password,
      }),
    };
    // Addded promise
    fetch(url, options)
      .then((response) => {
        const { status } = response;
        if (status === 200) {
          response.json().then(resolve);
        } else if (status === 400) {
          response.json().then(reject);
        } else {
          reject(new Error(response.statusText));
        }
      })
      .catch((err) => {
        // throw ;
        reject(new Error('Login Failed'));
      });
  });

export const logoutRequest = () => {
  const url = `${constants.API_URL}/v1/user/logout`;
  const options = {
    headers: getHeaders(),
    method: 'POST',
    credentials: 'include',
  };

  return fetch(url, options)
    .then((response) => response.json())
    .catch((err) => {
      throw new Error('Logout Failed');
    });
};

export const signUpRequest = ({ name, email, password, confirm }) =>
  new Promise((resolve, reject) => {
    const url = `${constants.API_URL}/v1/user/signup`;

    const options = {
      headers: getHeaders(),
      method: 'POST',
      body: JSON.stringify({
        name,
        email,
        password,
        confirm,
      }),
    };

    // Addded promise
    fetch(url, options)
      .then((response) => {
        const { status } = response;
        if (status === 200) {
          response.json().then(resolve);
        } else if (status === 400) {
          response.json().then(reject);
        } else {
          reject(new Error(response.statusText));
        }
      })
      .catch((err) => {
        // throw ;
        reject(new Error('Signup Failed'));
      });
  });

  export const changePasswordRequest = ( email, password, new_password, confirm ) =>
  new Promise((resolve, reject) => {
    const url = `${constants.API_URL}/v1/user/password`;
    const options = {
      headers: getHeaders(),
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({
        email,
        password,
        new_password,
        confirm
      }),
    };
    console.log("---options--", options.body);
    // Addded promise
    fetch(url, options)
      .then((response) => {
        const { status } = response;
        if (status === 200) {
          response.json().then(resolve);
        } else if (status === 400) {
          response.json().then(reject);
        } else {
          reject(new Error(response.statusText));
        }
      })
      .catch((err) => {
        // throw ;
        reject(new Error('Signup Failed'));
      });
  });

export const projectRegisterRequest = (projectNamee, projectType) =>
  new Promise((resolve, reject) => {
    const url = `${constants.API_URL}/v1/project/register`;
    const name = projectNamee;
    const type = projectType;
    const options = {
      headers: getHeaders(),
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({
        name,
        type,
      }),
    };

    // Addded promise
    fetch(url, options)
      .then((response) => {
        const { status } = response;
        if (status === 200) {
          response.json().then(resolve);
        } else if (status === 400) {
          response.json().then(reject);
        } else {
          reject(new Error(response.statusText));
        }
      })
      .catch((err) => {
        // throw ;
        reject(new Error('Project Registration Failed'));
      });
  });

export const getUserProject = () => {
  const url = `${constants.API_URL}/v1/user/project`;
  const options = {
    method: 'GET',
    credentials: 'include',
  };
  return fetch(url, options)
    .then((response) => response.json())
    .catch((err) => {
      throw new Error('Adding Project Failed');
    });
};

export const getUserSuggestions = ({ name }) => {
  const url = `${constants.API_URL}/v1/user/suggestions/${name}`;
  const options = {
    method: 'GET',
    credentials: 'include',
  };
  return fetch(url, options)
    .then((response) => response.json())
    .catch((err) => {
      throw new Error('Loading Suggestion Failed');
    });
};

export const getReport = (projectId, duration = 'all') => {
  const url = `${constants.API_URL}/v1/report/summary/${projectId}/${duration}`;
  const options = {
    method: 'GET',
    credentials: 'include',
  };

  return fetch(url, options);
};

export const getReportDetails = (projectId, duration = 'recent') => {
  const url = `${constants.API_URL}/v1/report/lint/${projectId}/${duration}`;
  const options = {
    method: 'GET',
    credentials: 'include',
  };
  return fetch(url, options);
};

// Coverage Details
export const getCoverage = (projectId, duration = 'recent') => {
  const url = `${constants.API_URL}/v1/report/coverage/${projectId}/${duration}`;
  const options = {
    method: 'GET',
    credentials: 'include',
  };

  return fetch(url, options);
};

export const getRecentSubmits = (projectId) => {
  const url = `${constants.API_URL}/v1/project/${projectId}/submissions`;
  const options = {
    method: 'GET',
    credentials: 'include',
  };
  return fetch(url, options);
};

export const getRecentActivities = () => {
  const url = `${constants.API_URL}/v1/user/me/submissions`;
  const options = {
    method: 'GET',
    credentials: 'include',
  };
  return fetch(url, options)
    .then((response) => response.json())
    .catch((err) => {
      throw new Error('Loading Recent Activities Failed');
    });
};

// INVITATIONS

export const inviteContributor = (contributorParameters) =>
  new Promise((resolve, reject) => {
    const url = `${constants.API_URL}/v1/user/invite`;
    const { invitedUserID, projectID } = contributorParameters;
    const options = {
      headers: getHeaders(),
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({
        invitedUserID,
        projectID,
      }),
    };
    // Addded promise
    fetch(url, options)
      .then((response) => {
        const { status } = response;
        if (status === 200) {
          response.json().then(resolve);
        } else if (status === 400) {
          response.json().then(reject);
        } else {
          reject(new Error(response.statusText));
        }
      })
      .catch((err) => {
        reject(new Error('Invitation Failed'));
      });
  });

export const respondInvite = (acceptedStatus, pID) =>
  new Promise((resolve, reject) => {
    const url = `${constants.API_URL}/v1/user/invite/respond`;
    const accepted = acceptedStatus;
    const projectID = pID;
    const options = {
      headers: getHeaders(),
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({
        projectID,
        accepted,
      }),
    };

    // Added Promise
    return fetch(url, options)
      .then((response) => {
        const { status } = response;
        if (status === 200) {
          response.json().then(resolve);
        } else if (status === 400) {
          response.json().then(reject);
        } else {
          reject(new Error(response.statusText));
        }
      })
      .catch((err) => {
        reject(new Error('Invitation respond Failed'));
      });
  });

// NOTIFICATIONS
export const getUnseenNotifications = () => {
  const url = `${constants.API_URL}/v1/notification/unseen`;
  const options = {
    method: 'GET',
    credentials: 'include',
  };
  return fetch(url, options)
    .then((response) => response.json())
    .catch((err) => {
      throw new Error('unseen notification not loaded');
    });
};

export const getAllNotifications = () => {
  const url = `${constants.API_URL}/v1/notification/all`;
  const options = {
    method: 'GET',
    credentials: 'include',
  };
  return fetch(url, options)
    .then((response) => response.json())
    .catch((err) => {
      throw new Error('all notification not loaded');
    });
};

export const notificationUpdate = (notifications) => {
  const url = `${constants.API_URL}/v1/notification/update`;
  const notificationIDs = notifications;
  const options = {
    headers: getHeaders(),
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify({
      notificationIDs,
    }),
  };

  return fetch(url, options)
    .then((response) => response.status)
    .catch((err) => {
      throw new Error('Notification Update Failed');
    });
};

// To get basic project info
export const getProjectInfo = (projectId) => {
  const url = `${constants.API_URL}/v1/project/${projectId}`;
  const options = {
    method: 'GET',
    credentials: 'include',
  };
  return fetch(url, options);
};

// Coverage OverTheTime
export const getCoverageOT = (projectId, duration = 'all') => {
  const url = `${constants.API_URL}/v1/report/coverage/${projectId}/${duration}`;
  const options = {
    method: 'GET',
    credentials: 'include',
  };
  return fetch(url, options);
};
