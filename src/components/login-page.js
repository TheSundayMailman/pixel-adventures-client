import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import LoginForm from './login-form.js';
import '../styles/login-register-forms.css';

export function LoginPage(props) {
  if (props.loggedIn) {
    return <Redirect to="game" />
  }
  return (
    <main aria-live="polite">
      <img id="logo" src={require('../images/logo.png')} alt="Pixel Adventures" />
      <LoginForm />
    </main>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LoginPage);
