import React from 'react';

import './App.css';

import CharacterStatus from './components/character-status.js';
import EventLog from './components/event-log.js';
import CommandList from './components/command-list.js';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Pixel Adventures</h1>
        <main className="game-container">
          <CharacterStatus />
          <EventLog />
          <CommandList />
        </main>
      </div>
    );
  }
}
