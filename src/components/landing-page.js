import React from 'react';
import {Link} from 'react-router-dom';

import '../styles/landing-page.css';

export class LandingPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {};
  }

  render () {
    return (
      <React.Fragment>
        <header>
          <h1 className="in-progress">Welcome to...</h1>
          <img id="logo" src={require('../images/logo.png')} alt="Pixel Adventures" />
          <Link className="attract" to="#">Get started...</Link>
        </header>
        <main id="welcome">
          <article>
            <h1 className="in-progress">How to play section work in progress</h1>
          </article>
          <article>
            <h1 className="in-progress">Login/Register section work in progress</h1>
            <Link to="login">Login</Link>
            <Link to="register">Register</Link>
          </article>
        </main>
      </React.Fragment>
    );
  }
}

export default LandingPage;