import React from 'react';
import {reduxForm, Field, focus} from 'redux-form';
import {Link} from 'react-router-dom';

import Input from './input.js';
import {required, isEmpty, isTrimmed, lengthCheck} from './validators.js';

import {loginUser} from '../actions/auth.js';

const usernameLength = lengthCheck({min: 6});
const passwordLength = lengthCheck({min: 10, max: 72});

export class LoginForm extends React.Component {
  submitUser(values) {
    const {username, password} = values;
    return this.props.dispatch(loginUser(username, password));
  }

  render() {
    let error;
    if (this.props.error) {
      error = (
        <div className="form-error" aria-live="polite">
          {this.props.error}
        </div>
      );
    }
    return (
      <section className="form-container" aria-live="polite">
        <h1>Login to continue...</h1>
        <form className="form-input" onSubmit={this.props.handleSubmit(values => this.submitUser(values))}>
          <label htmlFor="username">Username: {error}</label>
          <Field
            component={Input}
            element="input"
            type="text"
            name="username"
            validate={[required, isEmpty, isTrimmed, usernameLength]}
            id="username"
          />
          <label htmlFor="password">Password: </label>
          <Field
            component={Input}
            element="input"
            type="password"
            name="password"
            validate={[required, isEmpty, isTrimmed, passwordLength]}
            id="password"
          />
          <Field component="button" name="login-button">Login</Field>
          <p>Don't have an account?</p>
          <p>Click <Link to="/register">here</Link> to register!</p>
          <br />
          <p>Or try a demo Lvl 20 Knight!</p>
          <p>Username: batman</p>
          <p>Password: password123</p>
        </form>
      </section>
    );
  }
}

export default reduxForm({
  form: 'login',
  onSubmitFail: (error, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);
