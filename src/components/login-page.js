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
    <section aria-live="polite">
      <LoginForm />
    </section>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LoginPage);
