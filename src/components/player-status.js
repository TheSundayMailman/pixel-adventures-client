import React from 'react';
import {connect} from 'react-redux';

export class PlayerStatus extends React.Component {
  render() {
    if (!this.props.statusMode) {
      return (
        <section className="menu character-status" id="summaryView">
          <h2>{this.props.player.name}</h2>
          <p>LVL: {this.props.player.level}</p>
          <p>HP: {this.props.player.hp.current} / {this.props.player.hp.max}</p>
          <p>MP: {this.props.player.mp.current} / {this.props.player.mp.max}</p>
          <p>GOLD: {this.props.player.gold}</p>
        </section>
      );
    }
    if (this.props.statusMode) {
      return (
        <section className="menu character-status" id="fullView">
          <h2>{this.props.player.name}</h2>
          <p>CLASS: {this.props.player.job}</p>
          <p>LVL: {this.props.player.level}</p>
          <p>HP: {this.props.player.hp.current} / {this.props.player.hp.max}</p>
          <p>MP: {this.props.player.mp.current} / {this.props.player.mp.max}</p>
          <p>ATTACK: {this.props.player.stats.attack}</p>
          <p>DEFENSE: {this.props.player.stats.defense}</p>
          <p>SKILLS: NONE</p>
          <p>ITEMS: NONE</p>
          <p>GOLD: {this.props.player.gold}</p>
          <p>EXP: {this.props.player.exp}</p>
          <p>NEXT LEVEL UP: 999 EXP</p>
        </section>
      );
    }
  }
}

const mapStateToProps = (state, props) => {
  return {
    statusMode: state.game.statusMode,
    player: state.player
  };
};

export default connect(mapStateToProps)(PlayerStatus);
