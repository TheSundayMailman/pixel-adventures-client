import React from 'react';

import './App.css';

import NavBar from './components/nav-bar.js';
import GameContainer from './components/game-container.js';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <h1>Pixel Adventures</h1>
        <GameContainer />
      </div>
    );
  }
}
