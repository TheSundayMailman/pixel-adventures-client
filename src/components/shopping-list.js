import React from 'react';
import {connect} from 'react-redux';

import itemSet from '../database/item-db';

export class ShoppingList extends React.Component {
  render() {
    if (this.props.buyMode) {
      return (
        <section className="menu shopping-window">
          <p>PURCHASE WINDOW IN CONSTRUCTION</p>
        </section>
      );
    }
    if (this.props.sellMode) {
      return (
        <section className="menu shopping-window">
          <p>SALES WINDOW IN CONSTRUCTION</p>
        </section>
      );
    }
    return null;
  }
}

const mapStateToProps = (state, props) => {
  return {
    buyMode: state.game.buyMode,
    sellMode: state.game.sellMode,
    player: state.player
  };
};

export default connect(mapStateToProps)(ShoppingList);
