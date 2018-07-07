export const registerUser = (user) => (dispatch, getState) => {
  return fetch('http://localhost:8080/api/users', {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(user)
  })
  .then(res => res.json())
  .catch(err => console.error(err));
};
