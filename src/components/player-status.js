import React from 'react';
import {connect} from 'react-redux';

export class PlayerStatus extends React.Component {
  render() {
    return (
      <section className="menu character-status">
        <h2>{this.props.player.name}</h2>
        <p>Level: {this.props.player.level}</p>
        <p>HP: {this.props.player.hp.current} / {this.props.player.hp.max}</p>
        <p>Gold: {this.props.player.gold}</p>
      </section>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    player: state.player
  };
};

export default connect(mapStateToProps)(PlayerStatus);
