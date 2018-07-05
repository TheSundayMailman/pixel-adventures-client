import React from 'react';
import {connect} from 'react-redux';

import PlayerStatus from './player-status.js';
import EventLog from './event-log.js';
import CommandList from './command-list.js';
import ItemList from './item-list.js';
import SkillList from './skill-list.js';
import NpcDisplay from './npc-display.js';
import EnemyDisplay from './enemy-display.js';

export class GameContainer extends React.Component {
  componentDidMount() {
    // fetch player data here
  }

  render() {
    if (this.props.npcDisplay && !this.props.enemyDisplay) {
      return (
        <main className="game-container" id={this.props.currentLocation}>
          <PlayerStatus />
          <NpcDisplay />
          <EventLog />
          <CommandList />
          <ItemList />
          <SkillList />
        </main>
      );
    }
    if (!this.props.npcDisplay && this.props.enemyDisplay) {
      return (
        <main className="game-container" id={this.props.currentLocation}>
          <PlayerStatus />
          <EnemyDisplay />
          <EventLog />
          <CommandList />
          <ItemList />
          <SkillList />
        </main>
      );
    }
    else {
      return (
        <main className="game-container" id={this.props.currentLocation}>
          <PlayerStatus />
          <EventLog />
          <CommandList />
          <ItemList />
          <SkillList />
        </main>
      );
    }
  }
}

const mapStateToStore = (state, props) => {
  return {
    currentLocation: state.game.currentLocation,
    npcDisplay: state.game.npcDisplay,
    enemyDisplay: state.game.enemyDisplay
  };
};

export default connect(mapStateToStore)(GameContainer);
