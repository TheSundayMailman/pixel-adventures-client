import React from 'react';
import {Route} from 'react-router-dom';

import './App.css';

import NavBar from './components/nav-bar.js';
import LoginPage from './components/login-page.js';
import RegisterPage from './components/register-page.js';
import GamePage from './components/game-page.js';

export class App extends React.Component {
  render() {
    return (
      <main>
        <div id="main-container">
        <NavBar />
        <img id="logo" src={require('./images/logo.png')} alt="Pixel Adventures" />
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage}/>
        <Route exact path="/game" component={GamePage} />
        </div>
        <div id="tilt">
          <img id="tilt-message" src={require('./images/tilt.png')} alt="Please rotate your screen." />
        </div>
      </main>
    );
  }
}

export default App;
