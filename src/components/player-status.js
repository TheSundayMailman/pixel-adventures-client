import React from 'react';
import {connect} from 'react-redux';

import skillSet from '../database/skill-db.js';

export class PlayerStatus extends React.Component {
  render() {
    if (this.props.buyMode || this.props.sellMode) {
      return null;
    }
    if (!this.props.statusMode) {
      return (
        <section className="menu character-status" id="summaryView">
          <ul>{this.props.player.name}
            <li>LVL: {this.props.player.level}</li>
            <li>HP: {this.props.player.hp.current} / {this.props.player.hp.max}</li>
            <li>MP: {this.props.player.mp.current} / {this.props.player.mp.max}</li>
            <li>GOLD: {this.props.player.gold}</li>
          </ul>
        </section>
      );
    }
    if (this.props.statusMode) {
      const playerItems = this.props.player.items.map(item =>
        <li key={item.id}>{item.name}: {item.quantity}</li>
      );

      const playerSkills = this.props.player.skills.map(skill =>
        <li key={skillSet[skill].id}>{skillSet[skill].name}: {skillSet[skill].mp} MP</li>
      );

      return (
        <section className="menu character-status" id="fullView">
          <ul>{this.props.player.name}
            <li>LVL: {this.props.player.level}</li>
            <li>HP: {this.props.player.hp.current} / {this.props.player.hp.max}</li>
            <li>MP: {this.props.player.mp.current} / {this.props.player.mp.max}</li>
            <li>GOLD: {this.props.player.gold}</li>
          </ul>
          <section className="menu equipment-details">
            <ul>EQUIPMENT
              <li>WEAPON: {this.props.player.equipment.weapon}</li>
              <li>ARMOR: {this.props.player.equipment.armor}</li>
              <li>ACCESSORY: {this.props.player.equipment.accessory}</li>
            </ul>
          </section>
          <section className="menu stats-details">
            <ul>STATS
              <li>CLASS: {this.props.player.job}</li>
              <li>STATUS: NORMAL</li>
              <li>ATK: {this.props.player.stats.attack}</li>
              <li>DEF: {this.props.player.stats.defense}</li>
              <li>INT: {this.props.player.stats.intelligence}</li>
              <li>EXP: {this.props.player.exp}</li>
              <li>NEXT LVL: {this.props.player.nextLevel}</li>
            </ul>
          </section>
          <section className="menu current-skills">
          <ul>SKILLS
            {playerSkills}
          </ul>
          </section>
          <section className="menu current-items">
            <ul>ITEMS
              {playerItems}
            </ul>
          </section>
        </section>
      );
    }
    return null;
  }
}

const mapStateToProps = (state, props) => {
  return {
    statusMode: state.game.statusMode,
    buyMode: state.game.buyMode,
    sellMode: state.game.sellMode,
    player: state.player
  };
};

export default connect(mapStateToProps)(PlayerStatus);
