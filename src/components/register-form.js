import React from 'react';
import {reduxForm, Field} from 'redux-form';

import {registerUser} from '../actions/users.js';
import {loginUser} from '../actions/auth.js';
import {createCharacter} from '../actions/characters.js';

export class RegisterForm extends React.Component {
  submitUser(values) {
    const {username, password, name, job} = values;
    const user = {username, password};
    const character = {name, job};

    return this.props.dispatch(registerUser(user))
    .then(() => this.props.dispatch(loginUser(user)))
    .then(() => this.props.dispatch(createCharacter(character)));
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(values => this.submitUser(values))}>
        <label htmlFor="username">Username: </label>
        <Field component="input" type="text" name="username" /><br />
        <label htmlFor="password">Password: </label>
        <Field component="input" type="password" name="password" /><br />
        <label htmlFor="char-name">Character Name: </label>
        <Field component="input" type="text" name="name" /><br />
        <Field component="select" name="job">
          <option>Choose a class</option>
          <option>KNIGHT</option>
        </Field><br />
        <Field component="button" name="register-button">Register</Field>
      </form>
    );
  }
}

export default reduxForm({
  form: 'register'
  // onSubmitFail: (error, dispatch) => dispatch(focus('register', Object.keys(error)[0]))
})(RegisterForm);
