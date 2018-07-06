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
      <div>
        <NavBar />
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage}/>
        <Route exact path="/game" component={GamePage} />
      </div>
    );
  }
}

export default App;
