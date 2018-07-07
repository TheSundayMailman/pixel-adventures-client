export const POPULATE_PLAYER_OBJECT = 'POPULATE_PLAYER_OBJECT';
export const populatePlayerObject = (player) => {
  return {
    type: POPULATE_PLAYER_OBJECT,
    player
  };
};

export const CREATE_CHARACTER = 'CREATE_CHARACTER';
export const createCharacter = (character) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch('http://localhost:8080/api/characters', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`
      },
      body: JSON.stringify(character)
    }
  )
  .then(res => res.json())
  .then(player => dispatch(populatePlayerObject(player)))
  .catch(err => console.error(err));
}
