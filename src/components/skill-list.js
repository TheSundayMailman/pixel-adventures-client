import React from 'react';
import {connect} from 'react-redux';

import {
  toggleSkillMode,
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
    const oldPlayerMp = player.mp.current;
    const oldEnemyHp = enemy.hp.current;
    const oldNextLevel = player.nextLevel;

    // initialize variables depending on player's skill type
    let newNextLevel;
    let damage;
    let newPlayerMp;
    let newEnemyHp;
    let messages;

    if (currentSkill.type === 'attack') {
      damage = Math.floor(player.stats.attack * currentSkill.power * 0.7);
      newPlayerMp = oldPlayerMp - currentSkill.mp;
      newEnemyHp = oldEnemyHp - damage;
      if (newPlayerMp <= 0) {
        messages = [
          `${player.name} tried to use ${skillName}!`,
          `But the skill has failed!`,
          `${player.name} does not have enough MP...`
        ];
        this.props.dispatch(finishPlayerTurn(messages));
      } else if (newEnemyHp <= 0) {
        newEnemyHp = 0;
        newNextLevel = oldNextLevel - enemy.rewards.exp;
        messages = [
          `${player.name} used ${skillName}!`,
          `${enemy.name} received ${damage} damage points!`,
          `${enemy.name} is defeated!`,
          `${player.name} gains ${enemy.rewards.exp} EXP points and ${enemy.rewards.gold} GOLD!`
        ];
        this.props.dispatch(updatePlayerMp(newPlayerMp));
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
        this.props.dispatch(updatePlayerMp(newPlayerMp));
        this.props.dispatch(updateEnemyHp(newEnemyHp));
        this.props.dispatch(finishPlayerTurn(messages));
      }
    }

    if (currentSkill.type === 'heal') {
      console.log('healing skills not yet implemented...');
    }
  }

  render() {
    const skillButtons = this.props.player.skills.map((skillName, index) => 
      <button onClick={() => this.useSkill(skillName, this.props.player, this.props.enemy)} key={index}>{skillName}: {skillSet[skillName].mp} MP</button>
    );
    if (this.props.game.skillMode) {
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
