import React from 'react';
import {connect} from 'react-redux';

import PlayerStatus from './player-status.js';
import ShoppingList from './shopping-list.js';
import SpriteDisplay from './sprite-display.js';
import EventLog from './event-log.js';
import CommandList from './command-list.js';
import ItemList from './item-list.js';
import SkillList from './skill-list.js';

export class GameContainer extends React.Component {
  render() {
    return (
      <main className="game-container" aria-live="polite" id={this.props.currentLocation}>
        <PlayerStatus />
        <ShoppingList />
        <SpriteDisplay />
        <EventLog />
        <CommandList />
        <ItemList />
        <SkillList />
      </main>
    );
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
