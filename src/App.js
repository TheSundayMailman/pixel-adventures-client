import React from 'react';
import {Route} from 'react-router-dom';

import './styles/App.css';

import NavBar from './components/nav-bar.js';
import LandingPage from './components/landing-page.js';
import LoginPage from './components/login-page.js';
import RegisterPage from './components/register-page.js';
import GamePage from './components/game-page.js';
import Footer from './components/footer.js';

export class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage}/>
        <Route exact path="/game" component={GamePage} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
