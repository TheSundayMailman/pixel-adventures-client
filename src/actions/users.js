export const registerUser = (user) => (dispatch, getState) => {
  return fetch('http://localhost:8080/api/users', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(user)
  })
  .then(res => res.json())
  .catch(err => console.error(err));
};
