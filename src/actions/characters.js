import {API_BASE_URL} from '../config.js';

export const POPULATE_PLAYER_OBJECT = 'POPULATE_PLAYER_OBJECT';
export const populatePlayerObject = (player) => {
  return {
    type: POPULATE_PLAYER_OBJECT,
    player
  };
};

export const CREATE_CHARACTER = 'CREATE_CHARACTER';
export const createCharacter = (name, job) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return (
    fetch(`${API_BASE_URL}/characters`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`
      },
      body: JSON.stringify({name, job})
    })
    .then(res => res.json())
    .then(player => dispatch(populatePlayerObject(player)))
    .catch(err => console.error(err))
  );
}

export const RETRIEVE_CHARACTER = 'RETRIEVE_CHARACTER';
export const retrieveCharacter = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return (
    fetch(`${API_BASE_URL}/characters`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`
      },
    })
    .then(res => res.json())
    .then(player => dispatch(populatePlayerObject(player)))
    .catch(err => console.error(err))
  );
}

export const RECORD_CHARACTER = 'RECORD_CHARACTER';
export const recordCharacter = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  const id = getState().player.id;
  const player = getState().player;
  return (
    fetch(`${API_BASE_URL}/characters/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`
      },
      body: JSON.stringify(player)
    })
    .then(res => res.json())
    .then(player => dispatch(populatePlayerObject(player)))
    .catch(err => console.error(err))
  );
}
