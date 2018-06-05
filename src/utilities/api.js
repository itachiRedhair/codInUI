import fetch from 'isomorphic-fetch';

import constants from './../constants';

const { API_URL } = constants;

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
    .then(response => response.json())
    .catch((err) => {
      throw new Error('User information retrieval failed.');
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
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify({
      email,
      password,
    }),
  };
  return fetch(url, options)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      }
      return response.status;
    })
    .catch((err) => {
      throw new Error('Login Failed');
    });
};

export const logoutRequest = () => {
  const url = `${constants.API_URL}/v1/user/logout`;
  const options = {
    headers: getHeaders(),
    method: 'POST',
    credentials: 'include',
  };

  return fetch(url, options)
    .then(response => response.json())
    .catch((err) => {
      throw new Error('Logout Failed');
    });
};

export const signUpRequest = ({
  name, email, password, confirm,
}) => new Promise((resolve, reject) => {
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

    //Addded promise
    fetch(url, options).then(response => {
      const { status } = response;
      if (status === 200) {
        response.json().then(resolve);
      } else if (status === 400) {
        response.json().then(reject);
      } else {
        reject(new Error(response.statusText));
      }
    }).catch(err => {
      // throw ;
      reject(new Error("Signup Failed"));
    });
  });

export const projectRegisterRequest = (projectNamee, projectType) => {
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

  return fetch(url, options)
    .then(response => response.json())
    .catch((err) => {
      throw new Error('Project Register Failed');
    });
};

export const getUserProject = () => {
  const url = `${constants.API_URL}/v1/user/project`;
  const options = {
    method: 'GET',
    credentials: 'include',
  };
  return fetch(url, options)
    .then(response => response.json())
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
    .then(response => response.json())
    .catch((err) => {
      throw new Error('Loading Suggestion Failed');
    });
};

// export const addCollaborator = (contributorParameters) => {
//   const url = `${constants.API_URL}/v1/project/contributor`;
//   const contributorName = contributorParameters.name;
//   const contributorID = contributorParameters.contributorID;
//   const projectID = contributorParameters.projectID;
//   const options = {
//     headers: getHeaders(),
//     method: 'POST',
//     credentials: 'include',
//     body: JSON.stringify({
//       contributorName,
//       contributorID,
//       projectID,
//     }),
//   };

//   return fetch(url, options)
//     .then(response => response.json())
//     .catch((err) => {
//       throw new Error('Project Register Failed');
//     });
// };

export const getContributors = (projectId) => {
  const url = `${constants.API_URL}/v1/project/${projectId}`;
  const options = {
    method: 'GET',
    credentials: 'include',
  };
  return fetch(url, options)
    .then(response => response.json())
    .catch((err) => {
      throw new Error('Loading Contributors Failed');
    });
};

export const getReport = (projectId, duration) => {
  const url = `${
    constants.API_URL
    }/v1/report/tslint/${projectId}/summary/${duration}`;
  const options = {
    method: 'GET',
    credentials: 'include',
  };

  return fetch(url, options)
    .then(response => response.json())
    .catch((err) => {
      throw new Error('Loading Reports Failed');
    });
};

export const getReportDetails = (projectId, duration) => {
  const url = `${
    constants.API_URL
    }/v1/report/tslint/${projectId}/details/${duration}`;
  const options = {
    method: 'GET',
    credentials: 'include',
  };
  return fetch(url, options)
    .then(response => response.json())
    .catch((err) => {
      throw new Error('Loading Reports Failed');
    });
};

export const getRecentSubmits = (projectId) => {
  const url = `${constants.API_URL}/v1/project/${projectId}/submissions`;
  const options = {
    method: 'GET',
    credentials: 'include',
  };
  return fetch(url, options)
    .then(response => response.json())
    .catch((err) => {
      throw new Error('Loading List of Submissions Failed');
    });
};

export const getRecentActivities = () => {
  const url = `${constants.API_URL}/v1/user/me/submissions`;
  const options = {
    method: 'GET',
    credentials: 'include',
  };
  return fetch(url, options)
    .then(response => response.json())
    .catch((err) => {
      throw new Error('Loading Recent Activities Failed');
    });
};

// INVITATIONS

export const inviteContributor = contributorParameters => new Promise((resolve, reject) => {
  const url = `${constants.API_URL}/v1/user/invite`;
  // const contributorName = contributorParameters.name;
  const invitedUserID = contributorParameters.invitedUserID;
  const projectID = contributorParameters.projectID;
  const options = {
    headers: getHeaders(),
    method: "POST",
    credentials: "include",
    body: JSON.stringify({
      // contributorName,
      invitedUserID,
      projectID
    })
  };
  //Addded promise
  fetch(url, options).then(response => {
    const { status } = response;
    if (status === 200) {
      response.json().then(resolve);
    } else if (status === 400) {
      response.json().then(reject);
    } else {
      reject(new Error(response.statusText));
    }
  }).catch(err => {
    // throw ;
    reject(new Error("Invitation Failed"));
  });
})

export const respondInvite = (acceptedStatus, pID) => new Promise((resolve, reject) => {
  const url = `${constants.API_URL}/v1/user/invite/respond`;
  const accepted = acceptedStatus;
  const projectID = pID;
  const options = {
    headers: getHeaders(),
    method: "POST",
    credentials: "include",
    body: JSON.stringify({
      projectID,
      accepted
    })
  };

  // Added Promise
  return fetch(url, options).then(response => {
    const { status } = response;
    if (status === 200) {
      response.json().then(resolve);
    } else if (status === 400) {
      response.json().then(reject);
    } else {
      reject(new Error(response.statusText));
    }
  }).catch(err => {
    // throw ;
    // throw new Error("Invitation respond Failed");
    reject(new Error("Invitation respond Failed"));
  });
});

//NOTIFICATIONS
export const getUnseenNotifications = () => {
  const url = `${constants.API_URL}/v1/notification/unseen`;
  const options = {
    method: 'GET',
    credentials: 'include',
  };
  return fetch(url, options)
    .then(response => response.json())
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
    .then(response => response.json())
    .catch((err) => {
      throw new Error('all notification not loaded');
    });
};

export const notificationUpdate = (notifications) => {
  const url = `${constants.API_URL}/v1/notification/update`;
  const notificationIDs = notifications;
  const options = {
    headers: getHeaders(),
    method: "POST",
    credentials: "include",
    body: JSON.stringify({
      notificationIDs
    })
  };

  return fetch(url, options)
    .then(response => {
      return response.status;
    })
    .catch(err => {
      throw new Error("Notification Update Failed");
    });
};
