import React from 'react';
import {connect} from 'react-redux';

import PlayerStatus from './player-status.js';
import EventLog from './event-log.js';
import CommandList from './command-list.js';

export class GameContainer extends React.Component {
  componentDidMount() {
    // fetch player data here
  }

  render() {
    return (
        <main className="game-container" id={this.props.currentLocation}>
          <PlayerStatus />
          <EventLog />
          <CommandList />
        </main>
    );
  }
}

const mapStateToStore = (state, props) => {
  return {
    currentLocation: state.game.currentLocation
  };
};

export default connect(mapStateToStore)(GameContainer);
