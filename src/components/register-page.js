import React from 'react';
import {reduxForm, Field} from 'redux-form';

export class RegisterPage extends React.Component {
  registerUser(values) {
    console.log(values);
  }

  render() {
    return (
      <main>
        <h1>Pixel Adventures</h1>
        <p>Register to play!</p>
        <form onSubmit={this.props.handleSubmit(values => this.registerUser(values))}>
          <label htmlFor="username">Username: </label>
          <Field component="input" type="text" name="username" /><br />
          <label htmlFor="password">Password: </label>
          <Field component="input" type="password" name="password" /><br />
          <label htmlFor="char-name">Character Name: </label>
          <Field component="input" type="text" name="char-name" /><br />
          <Field component="select" name="char-class">
            <option>Choose a class</option>
            <option>KNIGHT</option>
          </Field><br />
          <Field component="button" name="register-button">Register</Field>
        </form>
      </main>
    );
  }
}

export default reduxForm({
  form: 'register'
  // onSubmitFail: (error, dispatch) => dispatch(focus('register', Object.keys(error)[0]))
})(RegisterPage);
