import React from 'react';
import {Link} from 'react-router-dom';

import '../styles/landing-page.css';

export function LandingPage() {
  return (
    <section>
      <h1 className="in-progress">Landing page work in progress</h1>
      <Link to="login">Login</Link>
      <Link to="register">Register</Link>
    </section>
  );
}

export default LandingPage;