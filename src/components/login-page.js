import React from 'react';
import {connect} from 'react-redux';
import {Redirect, Link} from 'react-router-dom';

import LoginForm from './login-form.js';

export function LoginPage(props) {
  if (props.loggedIn) {
    return <Redirect to="game" />
  }
  return (
    <main>
      <h1>Pixel Adventures</h1>
      <p>Login to continue!</p>
      <LoginForm />
      <p>Don't have an account? Click <Link to="/register">here</Link> to make one!</p>
    </main>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LoginPage);
