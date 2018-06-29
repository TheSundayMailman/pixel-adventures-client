import React from 'react';
import {connect} from 'react-redux';

import {
  updatePlayerStats,
  updateEnemyStats,
  updateDamageDealtMessages,
  updateDamageReceivedMessages
} from '../actions/index.js';

export class CommandList extends React.Component {
  calculatePlayerAttack(char1, char2) {
    const damage = (char1.stats.attack - char2.stats.defense) + Math.floor(Math.random() * char1.level);
    const messages = [
      `${char1.name} attacked!`,
      `${char2.name} received ${damage} damage points!`
    ];
    this.props.dispatch(updateEnemyStats(damage));
    this.props.dispatch(updateDamageDealtMessages(messages));
  }

  calculateEnemyAttack(char1, char2) {
    const damage = (char1.stats.attack - char2.stats.defense) + Math.floor(Math.random() * char1.level);
    const messages = [
      `${char1.name} attacked!`,
      `${char2.name} received ${damage} damage points!`,
      'What will you do next?'
    ];
    this.props.dispatch(updatePlayerStats(damage));
    this.props.dispatch(updateDamageReceivedMessages(messages));
  }

  render() {
    if (this.props.game.hubMode) {
      return (
        <section className="menu command-list animate-reveal animate-last">
        <button>TOWN</button>
        <button>GRASSLANDS</button>
        <button>MOUNTAIN</button>
        <button>DUNGEON</button>
        <button>STATUS</button>
      </section>
      );
    } else if (this.props.game.townMode) {
      return (
        <section className="menu command-list animate-reveal animate-last">
        <button>PUB</button>
        <button>SHOP</button>
        <button>INN</button>
        <button>STATUS</button>
        <button>EXIT</button>
      </section>
      );
    } else if (this.props.game.exploreMode) {
      return (
        <section className="menu command-list animate-reveal animate-last">
        <button>EXPLORE</button>
        <button>STATUS</button>
        <button>EXIT</button>
      </section>
      );
    } else if (this.props.game.battleMode && this.props.game.playerTurn) {
      return (
        <section className="menu command-list animate-reveal animate-last">
        <button onClick={() => this.calculatePlayerAttack(this.props.player, this.props.enemy)}>ATTACK</button>
        <button>ITEMS</button>
        <button>STATUS</button>
        <button>RUN</button>
      </section>
      );
    } else if (this.props.game.battleMode && this.props.game.enemyTurn) {
      return (
        <section className="menu command-list animate-reveal animate-last">
        <button onClick={() => this.calculateEnemyAttack(this.props.enemy, this.props.player)}>NEXT</button>
      </section>
      );
    } else if (this.props.game.victoryMode) {
      return (
        <section className="menu command-list animate-reveal animate-last">
        <button>NEXT</button>
      </section>
      );
    } else if (this.props.game.defeatMode) {
      return (
        <section className="menu command-list animate-reveal animate-last">
        <button>RELOAD...</button>
      </section>
      );
    }
    return (
      <section className="menu command-list animate-reveal animate-last">
        <button>ERROR</button>
      </section>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    game: state.game,
    player: state.player,
    enemy: state.enemy
  };
};

export default connect(mapStateToProps)(CommandList);
