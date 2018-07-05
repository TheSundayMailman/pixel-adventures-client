import React from 'react';

export class EnemyDisplay extends React.Component {
  render() {
    return (
      <img className="sprite" src={require('../images/enemies/enemy.png')} alt="Enemy sprite." />
    );
  }
}

export default EnemyDisplay;
