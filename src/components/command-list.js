import React from 'react';
import {connect} from 'react-redux';

import {
  toggleStatusMode,
  enableNpcDisplay,
  enableEnemyDisplay,
  disableSpriteDisplay,
  enterHubMode,
  enterTownMode,
  populateNpcObject,
  toggleConvoMode,
  toggleInnMode,
  enterExploreMode,
  populateEnemyObject,
  toggleBattleMode,
  toggleItemMode,
  toggleSkillMode,
  updateEnemyHp,
  updatePlayerGold,
  updatePlayerHp,
  updatePlayerMp,
  finishPlayerTurn,
  finishEnemyTurn,
  collectBattleRewards,
  toggleLevelUpMode,
  toggleVictoryMode,
  toggleDefeatMode,
  levelUpPlayer
} from '../actions/index.js';

import npcDb from '../database/npc-db.js';
import forestEnemyDb from '../database/forest-enemy-db.js';
import mountainEnemyDb from '../database/mountain-enemy-db.js';
import dungeonEnemyDb from '../database/dungeon-enemy-db.js';

export class CommandList extends React.Component {
  viewPlayerStatus() {
    this.props.dispatch(toggleStatusMode());
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
    this.props.dispatch(disableSpriteDisplay());
    this.props.dispatch(enterTownMode(messages));
    // below generates a new npc for next conversation
    const randomNpc = npcDb[Math.floor(Math.random() * npcDb.length)];
    this.props.dispatch(populateNpcObject(randomNpc));
  }

  engageConversation() {
    const messages = this.props.npc.messages;
    this.props.dispatch(enableNpcDisplay());
    this.props.dispatch(toggleConvoMode(messages));
  }

  engageInn() {
    const messages = [
      'INN-KEEPER:',
      'Would you like to stay the night and restore',
      'your HP and MP?',
      'It costs 50 GOLD per stay...'
    ];
    this.props.dispatch(enableNpcDisplay());
    this.props.dispatch(toggleInnMode(messages));
  }

  stayAtInn() {
    const newHp = this.props.player.hp.max;
    const newMp = this.props.player.mp.max;
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
        '(Your HP and MP are fully restored!)'
      ];
      this.props.dispatch(updatePlayerHp(newHp));
      this.props.dispatch(updatePlayerMp(newMp));
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
    this.props.dispatch(disableSpriteDisplay());
    this.props.dispatch(enterExploreMode(this.props.game.currentLocation, messages));
    this.props.dispatch(populateEnemyObject(randomEnemy)); // may change this to an api call once db is setup
  }

  engageBattle() {
    const messages = [
      `As you explore the ${this.props.game.currentLocation}, a ${this.props.enemy.name}`,
      'suddenly draws near!',
      'It prepares for battle!',
      'What will you do next?'
    ];
    this.props.dispatch(enableEnemyDisplay());
    this.props.dispatch(toggleBattleMode(messages));
  }

  processPlayerTurn(intent, player, enemy) {
    // initialize constants needed to process player's turn
    const oldEnemyHp = enemy.hp.current;
    const oldNextLevel = player.nextLevel;
    const escapeChance = player.level / enemy.level;

    // initialize variables depending on player's intent
    let newNextLevel;
    let damage;
    let newEnemyHp;
    let messages;

    if (intent === 'ATTACK') {
      damage = (player.stats.attack - enemy.stats.defense) + Math.floor(Math.random() * player.level);
      newEnemyHp = oldEnemyHp - damage;
      if (newEnemyHp <= 0) {
        newEnemyHp = 0;
        newNextLevel = oldNextLevel - enemy.rewards.exp;
        messages = [
          `${player.name} attacked!`,
          `${enemy.name} received ${damage} damage points!`,
          `${enemy.name} is defeated!`,
          `${player.name} gains ${enemy.rewards.exp} EXP points and ${enemy.rewards.gold} GOLD!`
        ];
        this.props.dispatch(updateEnemyHp(newEnemyHp));
        this.props.dispatch(collectBattleRewards(enemy.rewards.exp, enemy.rewards.gold, newNextLevel));
        if (newNextLevel <= 0) {
          this.props.dispatch(toggleLevelUpMode(messages));
        } else {
          this.props.dispatch(toggleVictoryMode(messages));
        }
      } else {
        messages = [
          `${enemy.name} received ${damage} damage points!`
        ];
        this.props.dispatch(updateEnemyHp(newEnemyHp));
        this.props.dispatch(finishPlayerTurn(messages));
      }
    }

    if (intent === 'ITEMS') {
      this.props.dispatch(toggleItemMode());
    }

    if (intent === 'SKILLS') {
      this.props.dispatch(toggleSkillMode());
    }

    if (intent === 'ESCAPE') {
      if (escapeChance > Math.random()) {
        newNextLevel = oldNextLevel;
        messages = [
          `${player.name} successfully makes a daring escape`,
          `from the ${enemy.name}!`,
          `${player.name} gains 0 EXP point and 1 GOLD...`
        ];
        this.props.dispatch(toggleVictoryMode(messages));
        this.props.dispatch(collectBattleRewards(0, 1, newNextLevel));
        this.props.dispatch(disableSpriteDisplay());
      } else {
        messages = [
          `${player.name} tried to escape from the`,
          `${enemy.name}! But was not successful...`
        ];
        this.props.dispatch(finishPlayerTurn(messages));
      }
    }
  }

  processEnemyTurn(intent, enemy, player) {
    // initialize constants needed to process enemy's turn
    const oldPlayerHp = player.hp.current;

    // initialize variables depending on enemy's intent
    let damage;
    let newPlayerHp;
    let messages;

    if (intent === 'ATTACK') {
      damage = (enemy.stats.attack - player.stats.defense) + Math.floor(Math.random() * enemy.level);
      newPlayerHp = oldPlayerHp - damage;
      if (newPlayerHp <= 0) {
        newPlayerHp = 0;
        messages = [
          `${enemy.name} attacked!`,
          `${player.name} received ${damage} damage points!`,
          `${player.name} is defeated...`
        ];
        this.props.dispatch(updatePlayerHp(newPlayerHp));
        this.props.dispatch(toggleDefeatMode(messages));
      } else {
        messages = [
          `${enemy.name} attacked!`,
          `${player.name} received ${damage} damage points!`,
          'What will you do next?'
        ];
        this.props.dispatch(updatePlayerHp(newPlayerHp));
        this.props.dispatch(finishEnemyTurn(messages));
      }
    }
  }

  calculateLevelUp(player) {
    const oldLevel = player.level;
    const newLevel = oldLevel + 1;

    const oldMaxHp = player.hp.max;
    const hpGain = Math.floor(oldMaxHp * 0.1) + Math.floor(Math.random() * 10);
    const newMaxHp = oldMaxHp + hpGain;

    const oldMaxMp = player.mp.max;
    const mpGain = Math.floor(oldMaxMp * 0.1) + Math.floor(Math.random() * 5);
    const newMaxMp = oldMaxMp + mpGain;

    const oldAttack = player.stats.attack;
    const attackGain = Math.floor(oldAttack * 0.14) + Math.floor(Math.random() * 3);
    const newAttack = oldAttack + attackGain;

    const oldDefense = player.stats.defense;
    const defenseGain = Math.floor(oldDefense * 0.12) + Math.floor(Math.random() * 6);
    const newDefense = oldDefense + defenseGain;

    const oldIntelligence = player.stats.intelligence;
    const intelligenceGain = Math.floor(oldIntelligence * 0.1) + Math.floor(Math.random() * 3);
    const newIntelligence = oldIntelligence + intelligenceGain;

    // need a table for this...
    const newNextLevel = 300; // need a table for this...

    // also need to add skills
    const messages = [
      `${player.name} reached LVL ${newLevel}! HP increased by ${hpGain},`,
      `MP increased by ${mpGain}, ATK increased by ${attackGain},`,
      `DEF increased by ${defenseGain}, INT increased by ${intelligenceGain}!`
    ];
    this.props.dispatch(levelUpPlayer(newLevel, newMaxHp, newMaxMp, newAttack, newDefense, newIntelligence, newNextLevel));
    this.props.dispatch(toggleVictoryMode(messages));
    this.props.dispatch(disableSpriteDisplay());
  }

  restartGame() {
    console.log('tried to restart game...');
  }

  render() {
    if (this.props.game.statusMode) {
      return (
        <section id="statusMode" className="menu command-list animate-reveal animate-last">
          <button onClick={() => this.viewPlayerStatus()}>OK</button>
        </section>
      );
    }
    if (this.props.game.itemMode || this.props.game.skillMode) {
      return (
        <section id="listMode" className="menu command-list animate-reveal animate-last">
          <button>WAITING...</button>
        </section>
      );
    }
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
          <button onClick={() => this.processPlayerTurn('ATTACK', this.props.player, this.props.enemy)}>ATTACK</button>
          <button onClick={() => this.processPlayerTurn('SKILLS', this.props.player, this.props.enemy)}>SKILLS</button>
          <button onClick={() => this.processPlayerTurn('ITEMS', this.props.player, this.props.enemy)}>ITEMS</button>
          <button onClick={() => this.viewPlayerStatus()}>STATUS</button>
          <button onClick={() => this.processPlayerTurn('ESCAPE', this.props.player, this.props.enemy)}>RUN</button>
        </section>
      );
    }
    if (this.props.game.battleMode && this.props.game.enemyTurn) {
      return (
        <section id="enemyTurn" className="menu command-list animate-reveal animate-last">
          <button onClick={() => this.processEnemyTurn('ATTACK', this.props.enemy, this.props.player)}>NEXT</button>
        </section>
      );
    }
    if (this.props.game.levelUpMode) {
      return (
        <section id="levelUpMode" className="menu command-list animate-reveal animate-last">
          <button onClick={() => this.calculateLevelUp(this.props.player)}>OK</button>
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
    return null;
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
