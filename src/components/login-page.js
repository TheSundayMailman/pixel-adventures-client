import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import LoginForm from './login-form.js';

export function LoginPage(props) {
  if (props.loggedIn) {
    return <Redirect to="game" />
  }
  return (
    <main aria-live="polite">
      <h1>Pixel Adventures</h1>
      <LoginForm />
    </main>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LoginPage);
