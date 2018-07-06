import React from 'react';

import GameContainer from './game-container.js';

export class GamePage extends React.Component {
  render() {
    return (
      <main>
        <h1>Pixel Adventures</h1>
        <GameContainer />
      </main>
    );
  }
}

export default GamePage;
