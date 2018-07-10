import {SubmissionError} from 'redux-form';

import {normalizeResponseErrors} from '../actions/utils.js';

export const registerUser = (username, password) => (dispatch, getState) => {
  return fetch('http://localhost:8080/api/users', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({username, password})
  })
  .then(res => normalizeResponseErrors(res))
  .then(res => res.json())
  .catch(err => {
    const {reason, message, location} = err;
    if (reason === 'ValidationError') {
      // Convert ValidationErrors into SubmissionErrors for Redux Form
      return Promise.reject(new SubmissionError({[location]: message}));
    }
  });
};
