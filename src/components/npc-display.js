import React from 'react';

export class NpcDisplay extends React.Component {
  render() {
    return (
      <img className="sprite" src={require('../images/npcs/npc.png')} alt="NPC sprite." />
    );
  }
}

export default NpcDisplay;
