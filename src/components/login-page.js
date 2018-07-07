import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {Link} from 'react-router-dom';

export class LoginPage extends React.Component {
  loginUser(values) {
    console.log(values);
  }

  render() {
    return (
      <main>
        <h1>Pixel Adventures</h1>
        <p>Login to continue!</p>
        <form onSubmit={this.props.handleSubmit(values => this.loginUser(values))}>
          <label htmlFor="username">Username: </label>
          <Field component="input" type="text" name="username" /><br />
          <label htmlFor="password">Password: </label>
          <Field component="input" type="password" name="password" /><br />
          <Field component="button" name="login-button">Login</Field>
        </form>
        <p>Don't have an account? Click <Link to="/register">here</Link> to make one!</p>
      </main>
    );
  }
}

export default reduxForm({
  form: 'login'
  // onSubmitFail: (error, dispatch) => dispatch(focus('login', Object.keys(error)[0]))
})(LoginPage);
