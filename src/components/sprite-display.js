import React from 'react';
import {connect} from 'react-redux';

export class SpriteDisplay extends React.Component {
  render() {
    if (this.props.game.innMode && this.props.game.npcDisplay) {
      return (
        <img className="sprite" src={require('../images/npcs/innkeep.png')} alt="NPC sprite." />
      );    
    }
    if (this.props.game.disengageInnMode && this.props.game.npcDisplay) {
      return (
        <img className="sprite" src={require('../images/npcs/innkeep.png')} alt="NPC sprite." />
      );    
    }
    if (this.props.game.shopMode && this.props.game.npcDisplay) {
      return (
        <img className="sprite" src={require('../images/npcs/shopkeep.png')} alt="NPC sprite." />
      );    
    }
    if (this.props.game.disengageShopMode && this.props.game.npcDisplay) {
      return (
        <img className="sprite" src={require('../images/npcs/shopkeep.png')} alt="NPC sprite." />
      );    
    }
    if (this.props.game.npcDisplay) {
      return (
        <img className="sprite" src={require(`../images/npcs/${this.props.npc.id}.png`)} alt="NPC sprite." />
      );
    }
    if (this.props.game.enemyDisplay) {
      return (
        <img className="sprite" src={require(`../images/enemies/${this.props.enemy.id}.png`)} alt="Enemy sprite." />
      );
    }
    return null;
  }
}

const mapStateToStore = (state, props) => {
  return {
    game: state.game,
    enemy: state.enemy,
    npc: state.npc
  };
};

export default connect(mapStateToStore)(SpriteDisplay);
