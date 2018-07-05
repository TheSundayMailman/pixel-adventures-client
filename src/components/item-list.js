import React from 'react';
import {connect} from 'react-redux';

import {toggleItemMode} from '../actions/index.js';

export class ItemList extends React.Component {
  render() {
    if (this.props.itemMode) {
      return (
        <section className="menu item-list">
          <button>POTION: 12</button>
          <button>HI-POTION: 3</button>
          <button>ETHER: 3</button>
          <button>HI-ETHER: 3</button>
          <button>ELIXIR: 1</button>
          <button onClick={() => this.props.dispatch(toggleItemMode())}>CANCEL</button>
        </section>
      );
    }
    return null;
  }
}

const mapStateToStore = (state, prop) => {
  return {
    itemMode: state.game.itemMode
  };
}

export default connect(mapStateToStore)(ItemList);
