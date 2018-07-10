import React from 'react';
import {reduxForm, Field, focus} from 'redux-form';
import {Link} from 'react-router-dom';

import Input from './input.js';
import {required, isEmpty, isTrimmed, lengthCheck, matchCheck, classCheck} from './validators.js';

import {registerUser} from '../actions/users.js';
import {loginUser} from '../actions/auth.js';
import {createCharacter} from '../actions/characters.js';

const usernameLength = lengthCheck({min: 6});
const passwordLength = lengthCheck({min: 10, max: 72});
const matchesPassword = matchCheck('password');

const charNameLength = lengthCheck({min: 1, max: 12});

export class RegisterForm extends React.Component {
  submitUser(values) {
    const {username, password, name, job} = values;

    return this.props.dispatch(registerUser(username, password))
    .then(() => this.props.dispatch(loginUser(username, password)))
    .then(() => this.props.dispatch(createCharacter(name, job)));
  }

  render() {
    return (
      <section className="form-container">
        <h1>Register to play!</h1>
        <form className="form-input" onSubmit={this.props.handleSubmit(values => this.submitUser(values))}>
          <label htmlFor="username">Username: </label>
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
          <label htmlFor="passwordConfirm">Confirm password</label>
          <Field
            component={Input}
            type="password"
            name="passwordConfirm"
            validate={[required, isEmpty, matchesPassword]}
            id="passwordConfirm"
          />
          <label htmlFor="name">Character name: </label>
          <Field
            component={Input}
            element="input"
            type="text"
            name="name"
            validate={[required, isEmpty, isTrimmed, charNameLength]}
            id="name"
          />
          <label htmlFor="job">Choose a class: </label>
          <Field
            component={Input}
            element="select"
            name="job"
            validate={[classCheck]}
            id="job"
          >
            <option>KNIGHT</option>
            <option>WIZARD</option>
            <option>CLERIC</option>
          </Field>
          <Field component="button" name="register-button">Register</Field>
          <p>Have an account? Click <Link to="/">here</Link> to login!</p>
        </form>
      </section>
    );
  }
}

export default reduxForm({
  form: 'registration',
  onSubmitFail: (error, dispatch) => dispatch(focus('registration', Object.keys(error)[0]))
})(RegisterForm);
