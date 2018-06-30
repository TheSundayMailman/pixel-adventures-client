import React from 'react';
import {connect} from 'react-redux';

import {
  enterHubMode,
  enterTownMode,
  enterExploreMode,
  updatePlayerHp,
  updateEnemyHp,
  finishPlayerTurn,
  finishEnemyTurn,
  collectBattleRewards,
  toggleConvoMode,
  toggleExploreMode,
  toggleBattleMode,
  toggleVictoryMode,
  toggleDefeatMode,
  populateEnemyObject,
  populateNpcObject
} from '../actions/index.js';

import forestEnemyDb from '../database/forest-enemy-db.js';
import mountainEnemyDb from '../database/mountain-enemy-db.js';
import dungeonEnemyDb from '../database/dungeon-enemy-db.js';
import npcDb from '../database/npc-db.js';

export class CommandList extends React.Component {
  enterHub() {
    const messages = [
      'You are now back in the world of ASTERA! Pick',
      'a place to go! Visit the TOWN for some rest,',
      'or venture into the wilderness to hunt for',
      'some monsters or treasures!'
    ];
    this.props.dispatch(enterHubMode(messages));
  }

  enterTown() {
    const messages = [
      'Welcome to TOWN! Visit the INN to restore your',
      'health. Swing by the SHOP for equipments and',
      'items. The PUB is also a good place to learn',
      'the latest rumors around here.'
    ];
    this.props.dispatch(enterTownMode(messages));
    // below generates a new npc for next conversation
    const randomNpc = npcDb[Math.floor(Math.random() * npcDb.length)];
    this.props.dispatch(populateNpcObject(randomNpc));
  }

  engageConversation() {
    console.log(this.props.npc);
    const messages = this.props.npc.messages;
    this.props.dispatch(toggleConvoMode(messages));
  }

  enterExploration(location) {
    const messages = [
      `You are in the ${location}`,
      'What will you do next?',
    ];
    this.props.dispatch(enterExploreMode(location, messages));
    // below generates a new enemy for next battle
    let randomEnemy;
    if (location === 'FOREST') {
      randomEnemy = forestEnemyDb[Math.floor(Math.random() * forestEnemyDb.length)];
    }
    if (location === 'MOUNTAIN') {
      randomEnemy = mountainEnemyDb[Math.floor(Math.random() * mountainEnemyDb.length)];
    }
    if (location === 'DUNGEON') {
      randomEnemy = dungeonEnemyDb[Math.floor(Math.random() * dungeonEnemyDb.length)];
    }
    this.props.dispatch(populateEnemyObject(randomEnemy)); // may change this to an api call once db is setup
  }

  resumeExploring() {
    const messages = [
      `You are in the ${this.props.game.currentLocation}.`,
      `What will you do next?`
    ];
    this.props.dispatch(toggleExploreMode(messages));
    // below generates a new enemy for next battle
    let randomEnemy;
    if (this.props.game.currentLocation === 'FOREST') {
      randomEnemy = forestEnemyDb[Math.floor(Math.random() * forestEnemyDb.length)];
    }
    if (this.props.game.currentLocation === 'MOUNTAIN') {
      randomEnemy = mountainEnemyDb[Math.floor(Math.random() * mountainEnemyDb.length)];
    }
    if (this.props.game.currentLocation === 'DUNGEON') {
      randomEnemy = dungeonEnemyDb[Math.floor(Math.random() * dungeonEnemyDb.length)];
    }
    this.props.dispatch(populateEnemyObject(randomEnemy)); // may change this to an api call once db is setup
  }

  engageBattle() {
    const messages = [
      `As you explore the ${this.props.game.currentLocation}, a ${this.props.enemy.name} suddenly`,
      'draws near!',
      'It prepares for battle!',
      'What will you do next?'
    ];
    this.props.dispatch(toggleBattleMode(messages));
  }

  calculatePlayerAttack(player, enemy) {
    const oldHp = enemy.hp.current;
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
    const oldHp = player.hp.current;
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
        <section id="hubMode" className="menu command-list animate-reveal animate-last">
        <button onClick={() => this.enterTown()}>TOWN</button>
        <button onClick={() => this.enterExploration('FOREST')}>FOREST</button>
        <button onClick={() => this.enterExploration('MOUNTAIN')}>MOUNTAIN</button>
        <button onClick={() => this.enterExploration('DUNGEON')}>DUNGEON</button>
        <button >STATUS</button>
      </section>
      );
    }
    if (this.props.game.townMode) {
      return (
        <section id="townMode" className="menu command-list animate-reveal animate-last">
        <button onClick={() => this.engageConversation()}>PUB</button>
        <button>SHOP</button>
        <button>INN</button>
        <button>STATUS</button>
        <button onClick={() => this.enterHub()}>EXIT</button>
      </section>
      );
    }
    if (this.props.game.convoMode) {
      return (
        <section id="convoMode" className="menu command-list animate-reveal animate-last">
        <button onClick={() => this.enterTown()}>OK</button>
      </section>
      );
    }
    if (this.props.game.exploreMode) {
      return (
        <section id="exploreMode" className="menu command-list animate-reveal animate-last">
        <button onClick={() => this.engageBattle()}>EXPLORE</button>
        <button>STATUS</button>
        <button onClick={() => this.enterHub()}>EXIT</button>
      </section>
      );
    }
    if (this.props.game.battleMode && this.props.game.playerTurn) {
      return (
        <section id="playerTurn" className="menu command-list animate-reveal animate-last">
        <button onClick={() => this.calculatePlayerAttack(this.props.player, this.props.enemy)}>ATTACK</button>
        <button>ITEMS</button>
        <button>STATUS</button>
        <button>RUN</button>
      </section>
      );
    }
    if (this.props.game.battleMode && this.props.game.enemyTurn) {
      return (
        <section id="enemyTurn" className="menu command-list animate-reveal animate-last">
        <button onClick={() => this.calculateEnemyAttack(this.props.enemy, this.props.player)}>NEXT</button>
      </section>
      );
    }
    if (this.props.game.victoryMode) {
      return (
        <section id="victoryMode" className="menu command-list animate-reveal animate-last">
        <button onClick={() => this.resumeExploring()}>NEXT</button>
      </section>
      );
    }
    if (this.props.game.defeatMode) {
      return (
        <section id="defeatMode" className="menu command-list animate-reveal animate-last">
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
    enemy: state.enemy,
    npc: state.npc
  };
};

export default connect(mapStateToProps)(CommandList);
