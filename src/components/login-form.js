import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {Link} from 'react-router-dom';

import {loginUser} from '../actions/auth.js';

export class LoginForm extends React.Component {
  submitUser(values) {
    const {username, password} = values;
    const user = {username, password};
    return this.props.dispatch(loginUser(user));
  }

  render() {
    return (
      <section className="form-container">
        <h1>Login to continue...</h1>
        <form className="form-input" onSubmit={this.props.handleSubmit(values => this.submitUser(values))}>
          <label htmlFor="username">Username: </label>
          <Field component="input" type="text" name="username" />
          <label htmlFor="password">Password: </label>
          <Field component="input" type="password" name="password" />
          <Field component="button" name="login-button">Login</Field>
          <p>Don't have an account? Click <Link to="/register">here</Link> to make one!</p>
        </form>
      </section>
    );
  }
}

export default reduxForm({
  form: 'login'
  // onSubmitFail: (error, dispatch) => dispatch(focus('login', Object.keys(error)[0]))
})(LoginForm);
