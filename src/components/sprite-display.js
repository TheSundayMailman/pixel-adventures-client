import React from 'react';
import {connect} from 'react-redux';

export class SpriteDisplay extends React.Component {
  render() {
    if (this.props.npcDisplay) {
      return (
        <img className="sprite" src={require('../images/npcs/npc.png')} alt="NPC sprite." />
      );
    }
    if (this.props.enemyDisplay) {
      return (
        <img className="sprite" src={require('../images/enemies/enemy.png')} alt="Enemy sprite." />
      );
    }
    return null;
  }
}

const mapStateToStore = (state, props) => {
  return {
    npcDisplay: state.game.npcDisplay,
    enemyDisplay: state.game.enemyDisplay
  };
};

export default connect(mapStateToStore)(SpriteDisplay);
