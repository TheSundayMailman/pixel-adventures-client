import React from 'react';
import {reduxForm, Field} from 'redux-form';

import {loginUser} from '../actions/auth.js';
import {retrieveCharacter} from '../actions/characters.js';

export class LoginForm extends React.Component {
  submitUser(values) {
    const {username, password} = values;
    const user = {username, password};

    return this.props.dispatch(loginUser(user))
    .then(() => this.props.dispatch(retrieveCharacter()));
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(values => this.submitUser(values))}>
        <label htmlFor="username">Username: </label>
        <Field component="input" type="text" name="username" /><br />
        <label htmlFor="password">Password: </label>
        <Field component="input" type="password" name="password" /><br />
        <Field component="button" name="login-button">Login</Field>
      </form>
    );
  }
}

export default reduxForm({
  form: 'login'
  // onSubmitFail: (error, dispatch) => dispatch(focus('login', Object.keys(error)[0]))
})(LoginForm);
