import React from 'react';

import PlayerStatus from './player-status.js';
import EventLog from './event-log.js';
import CommandList from './command-list.js';

export default class App extends React.Component {
  componentDidMount() {
    // fetch player data here
  }

  render() {
    return (
        <main className="game-container">
          <PlayerStatus />
          <EventLog />
          <CommandList />
        </main>
    );
  }
}
