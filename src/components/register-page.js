import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import RegisterForm from './register-form.js';

import '../styles/login-register-forms.css';

export function RegisterPage(props) {
  if (props.loggedIn) {
    return <Redirect to="/game" />
  }
  return (
    <main aria-live="polite">
      <img id="logo" src={require('../images/logo.png')} alt="Pixel Adventures" />
      <RegisterForm />
    </main>
  );
};

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(RegisterPage);
