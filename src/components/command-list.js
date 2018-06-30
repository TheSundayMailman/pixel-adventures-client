import React from 'react';
import {connect} from 'react-redux';

import {
  updatePlayerHp,
  updateEnemyHp,
  finishPlayerTurn,
  finishEnemyTurn,
  collectBattleRewards,
  toggleExploreMode,
  toggleBattleMode,
  toggleVictoryMode,
  toggleDefeatMode,
  populateEnemyObject
} from '../actions/index.js';

import forestEnemyDb from '../database/forest-enemy-db.js';

export class CommandList extends React.Component {
  startExploring() {
    const messages = [
      `You are in the ${this.props.game.currentLocation}.`,
      `What will you do next?`
    ];
    this.props.dispatch(toggleExploreMode(messages));
    // below generates a new enemy for next battle
    const randomEncounter = Math.floor(Math.random() * forestEnemyDb.length)
    const randomEnemy = forestEnemyDb[randomEncounter];
    this.props.dispatch(populateEnemyObject(randomEnemy)); // may change this to an api call once db is setup
  }

  startBattling() {
    const messages = [
      `As you explore the ${this.props.game.currentLocation}, a ${this.props.enemy.name} suddenly`,
      'draws near!',
      'It prepares for battle!',
      'What will you do next?'
    ];
    this.props.dispatch(toggleBattleMode(messages));
  }

  calculatePlayerAttack(player, enemy) {
    const oldHp = enemy.currentHp;
    const damage = (player.stats.attack - enemy.stats.defense) + Math.floor(Math.random() * player.level);
    let newHp = oldHp - damage;
    if (newHp <= 0) {
      newHp = 0;
      const messages = [
        `${player.name} attacked!`,
        `${enemy.name} received ${damage} damage points!`,
        `${enemy.name} is defeated!`,
        `${player.name} gains ${enemy.rewards.exp} exp points and ${enemy.rewards.gold} gold!`
      ];
      this.props.dispatch(updateEnemyHp(newHp));
      this.props.dispatch(toggleVictoryMode(messages));
      this.props.dispatch(collectBattleRewards(enemy.rewards.exp, enemy.rewards.gold));
    } else {
      const messages = [
        `${player.name} attacked!`,
        `${enemy.name} received ${damage} damage points!`
      ];
      this.props.dispatch(updateEnemyHp(newHp));
      this.props.dispatch(finishPlayerTurn(messages));
    }
  }

  calculateEnemyAttack(enemy, player) {
    const oldHp = player.currentHp;
    const damage = (enemy.stats.attack - player.stats.defense) + Math.floor(Math.random() * enemy.level);
    let newHp = oldHp - damage;
    if (newHp <= 0) {
      newHp = 0;
      const messages = [
        `${enemy.name} attacked!`,
        `${player.name} received ${damage} damage points!`,
        `${player.name} is defeated...`
      ];
      this.props.dispatch(updatePlayerHp(newHp));
      this.props.dispatch(toggleDefeatMode(messages));
    } else {
      const messages = [
        `${enemy.name} attacked!`,
        `${player.name} received ${damage} damage points!`,
        'What will you do next?'
      ];
      this.props.dispatch(updatePlayerHp(newHp));
      this.props.dispatch(finishEnemyTurn(messages));
    }
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
        <button onClick={() => this.startBattling()}>EXPLORE</button>
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
        <button onClick={() => this.startExploring()}>NEXT</button>
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
