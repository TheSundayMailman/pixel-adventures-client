import React from 'react';
import {connect} from 'react-redux';

import {
  enterHubMode,
  enterTownMode,
  populateNpcObject,
  toggleConvoMode,
  toggleInnMode,
  enterExploreMode,
  populateEnemyObject,
  toggleBattleMode,
  updateEnemyHp,
  updatePlayerGold,
  updatePlayerHp,
  finishPlayerTurn,
  finishEnemyTurn,
  collectBattleRewards,
  toggleVictoryMode,
  toggleDefeatMode
} from '../actions/index.js';

import npcDb from '../database/npc-db.js';
import forestEnemyDb from '../database/forest-enemy-db.js';
import mountainEnemyDb from '../database/mountain-enemy-db.js';
import dungeonEnemyDb from '../database/dungeon-enemy-db.js';

export class CommandList extends React.Component {
  viewPlayerStatus() {
    console.log('tried to view status...');
  }

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
  
  resumeTown() {
    const messages = [
      'You are in back in TOWN.',
      'Where will you go next?'
    ];
    this.props.dispatch(enterTownMode(messages));
    // below generates a new npc for next conversation
    const randomNpc = npcDb[Math.floor(Math.random() * npcDb.length)];
    this.props.dispatch(populateNpcObject(randomNpc));
  }

  engageConversation() {
    const messages = this.props.npc.messages;
    this.props.dispatch(toggleConvoMode(messages));
  }

  engageInn() {
    const messages = [
      'INN-KEEPER:',
      'Would you like to stay the night and restore',
      'your HP?',
      'It costs 50 GOLD per stay...'
    ];
    this.props.dispatch(toggleInnMode(messages));
  }

  stayAtInn() {
    const newHp = this.props.player.hp.max;
    const oldGold = this.props.player.gold;
    const newGold = oldGold - 50;
    let messages;
    if (newGold < 0) {
      messages = [
        'INN-KEEPER:',
        'You do not have enough gold...'
      ];
      this.props.dispatch(toggleConvoMode(messages));
    } else {
      messages = [
        'INN-KEEPER:',
        'Thank you! Enjoy your stay!',
        ' ',
        '(Your HP is fully restored!)'
      ];
      this.props.dispatch(updatePlayerHp(newHp));
      this.props.dispatch(updatePlayerGold(newGold));
      this.props.dispatch(toggleConvoMode(messages));
    }
  }

  engageShop() {
    console.log('tried to visit shop...');
  }

  enterExploration(location) {
    let messages;
    let randomEnemy;
    // below generates a welcome message based on locale
    if (location === 'FOREST') {
      messages = [
        `You are in the ${location}, a mystical place filled`,
        'with mysterious creatures. This makes for a',
        'great place for beginners to explore.',
        'What will you do next?'
      ];
    }
    if (location === 'MOUNTAIN') {
      messages = [
        `You are in the ${location}, a treacherous locale`,
        'filled with tough enemies. Make sure you are',
        'well prepared before venturing further.',
        'What will you do next?'
      ];
    }
    if (location === 'DUNGEON') {
      messages = [
        `You are in the ${location}, an area feared by most`,
        'due to the terrible evil that dwell within.',
        'Truly a place to test your strength as a',
        'warrior.',
        'What will you do next?',
      ];
    }
    // below generates a new enemy for next battle locale
    if (location === 'FOREST') {
      randomEnemy = forestEnemyDb[Math.floor(Math.random() * forestEnemyDb.length)];
    }
    if (location === 'MOUNTAIN') {
      randomEnemy = mountainEnemyDb[Math.floor(Math.random() * mountainEnemyDb.length)];
    }
    if (location === 'DUNGEON') {
      randomEnemy = dungeonEnemyDb[Math.floor(Math.random() * dungeonEnemyDb.length)];
    }
    this.props.dispatch(enterExploreMode(location, messages));
    this.props.dispatch(populateEnemyObject(randomEnemy)); // may change this to an api call once db is setup
  }

  resumeExploration() {
    const messages = [
      `You are in the ${this.props.game.currentLocation}.`,
      `What will you do next?`
    ];
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
    this.props.dispatch(enterExploreMode(this.props.game.currentLocation, messages));
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

  useItems() {
    console.log('tried to use items...');
  }

  useSkills() {
    console.log('tried to use skills...');
  }

  calculatePlayerAttack(player, enemy) {
    const oldHp = enemy.hp.current;
    const damage = (player.stats.attack - enemy.stats.defense) + Math.floor(Math.random() * player.level);
    let newHp = oldHp - damage;
    let messages;
    if (newHp <= 0) {
      newHp = 0;
      messages = [
        `${player.name} attacked!`,
        `${enemy.name} received ${damage} damage points!`,
        `${enemy.name} is defeated!`,
        `${player.name} gains ${enemy.rewards.exp} exp points and ${enemy.rewards.gold} gold!`
      ];
      this.props.dispatch(updateEnemyHp(newHp));
      this.props.dispatch(toggleVictoryMode(messages));
      this.props.dispatch(collectBattleRewards(enemy.rewards.exp, enemy.rewards.gold));
    } else {
      messages = [
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
    let messages;
    if (newHp <= 0) {
      newHp = 0;
      messages = [
        `${enemy.name} attacked!`,
        `${player.name} received ${damage} damage points!`,
        `${player.name} is defeated...`
      ];
      this.props.dispatch(updatePlayerHp(newHp));
      this.props.dispatch(toggleDefeatMode(messages));
    } else {
      messages = [
        `${enemy.name} attacked!`,
        `${player.name} received ${damage} damage points!`,
        'What will you do next?'
      ];
      this.props.dispatch(updatePlayerHp(newHp));
      this.props.dispatch(finishEnemyTurn(messages));
    }
  }

  calculateEscape(player, enemy) {
    const escapeChance = player.level / enemy.level;
    let messages;
    if (escapeChance > Math.random()) {
      messages = [
        `${player.name} successfully makes a daring escape`,
        `from the ${enemy.name}!`,
        `${player.name} gains 1 exp point and 1 gold...`
      ];
      this.props.dispatch(toggleVictoryMode(messages));
      this.props.dispatch(collectBattleRewards(1, 1))
    } else {
      messages = [
        `${player.name} tried to escape from the`,
        `${enemy.name}! But was not successful...`
      ];
      this.props.dispatch(finishPlayerTurn(messages));
    }
  }

  restartGame() {
    console.log('tried to restart game...')
  }

  render() {
    if (this.props.game.hubMode) {
      return (
        <section id="hubMode" className="menu command-list animate-reveal animate-last">
        <button onClick={() => this.enterTown()}>TOWN</button>
        <button onClick={() => this.enterExploration('FOREST')}>FOREST</button>
        <button onClick={() => this.enterExploration('MOUNTAIN')}>MOUNTAIN</button>
        <button onClick={() => this.enterExploration('DUNGEON')}>DUNGEON</button>
        <button onClick={() => this.viewPlayerStatus()}>STATUS</button>
      </section>
      );
    }
    if (this.props.game.townMode) {
      return (
        <section id="townMode" className="menu command-list animate-reveal animate-last">
        <button onClick={() => this.engageConversation()}>PUB</button>
        <button onClick={() => this.engageInn()}>INN</button>
        <button onClick={() => this.engageShop()}>SHOP</button>
        <button onClick={() => this.viewPlayerStatus()}>STATUS</button>
        <button onClick={() => this.enterHub()}>EXIT</button>
      </section>
      );
    }
    if (this.props.game.convoMode) {
      return (
        <section id="convoMode" className="menu command-list animate-reveal animate-last">
        <button onClick={() => this.resumeTown()}>OK</button>
      </section>
      );
    }
    if (this.props.game.innMode) {
      return (
        <section id="innMode" className="menu command-list animate-reveal animate-last">
        <button onClick={() => this.stayAtInn()}>YES</button>
        <button onClick={() => this.resumeTown()}>NO</button>
      </section>
      );
    }
    if (this.props.game.exploreMode) {
      return (
        <section id="exploreMode" className="menu command-list animate-reveal animate-last">
        <button onClick={() => this.engageBattle()}>EXPLORE</button>
        <button onClick={() => this.viewPlayerStatus()}>STATUS</button>
        <button onClick={() => this.enterHub()}>EXIT</button>
      </section>
      );
    }
    if (this.props.game.battleMode && this.props.game.playerTurn) {
      return (
        <section id="playerTurn" className="menu command-list animate-reveal animate-last">
        <button onClick={() => this.calculatePlayerAttack(this.props.player, this.props.enemy)}>ATTACK</button>
        <button onClick={() => this.useSkills()}>SKILLS</button>
        <button onClick={() => this.useItems()}>ITEMS</button>
        <button onClick={() => this.viewPlayerStatus()}>STATUS</button>
        <button onClick={() => this.calculateEscape(this.props.player, this.props.enemy)}>ESCAPE</button>
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
        <button onClick={() => this.resumeExploration()}>OK</button>
      </section>
      );
    }
    if (this.props.game.defeatMode) {
      return (
        <section id="defeatMode" className="menu command-list animate-reveal animate-last">
        <button onClick={() => this.restartGame()}>RELOAD...</button>
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
