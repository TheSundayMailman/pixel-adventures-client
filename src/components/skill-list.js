import React from 'react';
import {connect} from 'react-redux';

import {
  toggleSkillMode,
  updatePlayerHp,
  updatePlayerMp,
  updateEnemyHp,
  collectBattleRewards,
  toggleLevelUpMode,
  toggleVictoryMode,
  finishPlayerTurn
} from '../actions/index.js';

import skillSet from '../database/skill-db.js';

export class SkillList extends React.Component {
  useSkill(skillName, player, enemy) {
    this.props.dispatch(toggleSkillMode());

    // initialize constants needed to process skill
    const currentSkill = skillSet[skillName];
    const oldPlayerHp = player.hp.current;
    const oldPlayerMp = player.mp.current;
    const oldEnemyHp = enemy.hp.current;
    const oldNextLevel = player.nextLevel;

    // initialize variables depending on player's skill type
    let newNextLevel;
    let damage;
    let heal;
    let newPlayerHp;
    let newPlayerMp;
    let newEnemyHp;
    let messages;

    if (currentSkill.type === 'attack') {
      damage = Math.floor(player.stats.attack * currentSkill.power * 0.7) - enemy.stats.defense - Math.floor(Math.random() * enemy.level * 0.5);
      if (damage <= 0) {
        damage = Math.floor(Math.random() * 10) + 1;
      } else if (damage > 9999) {
        damage = 9999;
      }
      newEnemyHp = oldEnemyHp - damage;
      newPlayerMp = oldPlayerMp - currentSkill.mp;
      if (newPlayerMp < 0) {
        messages = [
          `${player.name} tried to use ${skillName}!`,
          `But the skill has failed!`,
          `${player.name} does not have enough MP...`
        ];
        this.props.dispatch(finishPlayerTurn(messages));
      } else if (newEnemyHp <= 0) {
        newEnemyHp = 0;
        newNextLevel = oldNextLevel - enemy.rewards.exp;
        if (player.level === 20) {
          newNextLevel = 0;
        }
        messages = [
          `${player.name} used ${skillName}!`,
          `${enemy.name} received ${damage} damage points!`,
          `${enemy.name} is defeated!`,
          `${player.name} gains ${enemy.rewards.exp} EXP points and ${enemy.rewards.gold} GOLD!`
        ];
        this.props.dispatch(updatePlayerMp(newPlayerMp));
        this.props.dispatch(updateEnemyHp(newEnemyHp));
        this.props.dispatch(collectBattleRewards(enemy.rewards.exp, enemy.rewards.gold, newNextLevel));
        if (player.level === 20) {
          this.props.dispatch(toggleVictoryMode(messages));
        } else if (newNextLevel <= 0) {
          this.props.dispatch(toggleLevelUpMode(messages));
        } else {
          this.props.dispatch(toggleVictoryMode(messages));
        }
      } else {
        messages = [
          `${player.name} used ${skillName}!`,
          `${enemy.name} received ${damage} damage points!`
        ];
        this.props.dispatch(updatePlayerMp(newPlayerMp));
        this.props.dispatch(updateEnemyHp(newEnemyHp));
        this.props.dispatch(finishPlayerTurn(messages));
      }
    }

    if (currentSkill.type === 'magic') {
      damage = Math.floor(player.stats.intelligence * currentSkill.power * 0.7) - enemy.stats.defense - Math.floor(Math.random() * enemy.level * 0.5);
      if (damage <= 0) {
        damage = Math.floor(Math.random() * 10) + 1;
      } else if (damage > 9999) {
        damage = 9999;
      }
      newEnemyHp = oldEnemyHp - damage;
      newPlayerMp = oldPlayerMp - currentSkill.mp;
      if (newPlayerMp < 0) {
        messages = [
          `${player.name} tried to use ${skillName}!`,
          `But the skill has failed!`,
          `${player.name} does not have enough MP...`
        ];
        this.props.dispatch(finishPlayerTurn(messages));
      } else if (newEnemyHp <= 0) {
        newEnemyHp = 0;
        newNextLevel = oldNextLevel - enemy.rewards.exp;
        if (player.level === 20) {
          newNextLevel = 0;
        }
        messages = [
          `${player.name} used ${skillName}!`,
          `${enemy.name} received ${damage} damage points!`,
          `${enemy.name} is defeated!`,
          `${player.name} gains ${enemy.rewards.exp} EXP points and ${enemy.rewards.gold} GOLD!`
        ];
        this.props.dispatch(updatePlayerMp(newPlayerMp));
        this.props.dispatch(updateEnemyHp(newEnemyHp));
        this.props.dispatch(collectBattleRewards(enemy.rewards.exp, enemy.rewards.gold, newNextLevel));
        if (player.level === 20) {
          this.props.dispatch(toggleVictoryMode(messages));
        } else if (newNextLevel <= 0) {
          this.props.dispatch(toggleLevelUpMode(messages));
        } else {
          this.props.dispatch(toggleVictoryMode(messages));
        }
      } else {
        messages = [
          `${player.name} used ${skillName}!`,
          `${enemy.name} received ${damage} damage points!`
        ];
        this.props.dispatch(updatePlayerMp(newPlayerMp));
        this.props.dispatch(updateEnemyHp(newEnemyHp));
        this.props.dispatch(finishPlayerTurn(messages));
      }
    }

    if (currentSkill.type === 'heal') {
      heal = Math.floor(player.stats.intelligence * currentSkill.power * 0.7) - Math.floor(Math.random() * player.level * 0.5);
      newPlayerHp = oldPlayerHp + heal;
      newPlayerMp = oldPlayerMp - currentSkill.mp;
      if (newPlayerMp < 0) {
        messages = [
          `${player.name} tried to use ${skillName}!`,
          `But the skill has failed!`,
          `${player.name} does not have enough MP...`
        ];
        this.props.dispatch(finishPlayerTurn(messages));
      } else if (newPlayerHp > player.hp.max) {
        newPlayerHp = player.hp.max;
        messages = [
          `${player.name} used ${skillName}!`,
          `${heal} damage points recovered!`
        ];
        this.props.dispatch(updatePlayerHp(newPlayerHp));
        this.props.dispatch(updatePlayerMp(newPlayerMp));
        this.props.dispatch(finishPlayerTurn(messages));
      }
    }
  }

  render() {
    if (this.props.game.skillMode) {
      const skillButtons = this.props.player.skills.map((skillName, index) => 
        <button onClick={() => this.useSkill(skillName, this.props.player, this.props.enemy)} key={index}>{skillName}: {skillSet[skillName].mp} MP</button>
      );
      return (
        <section className="menu skill-list">
          {skillButtons}
          <button onClick={() => this.props.dispatch(toggleSkillMode())}>CANCEL</button>
        </section>
      );
    }
    return null;
  }
}

const mapStateToStore = (state, props) => {
  return {
    game: state.game,
    player: state.player,
    enemy: state.enemy,
  };
}

export default connect(mapStateToStore)(SkillList);
