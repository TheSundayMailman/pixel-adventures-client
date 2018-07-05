import React from 'react';
import {connect} from 'react-redux';

import {
  toggleItemMode,
  updatePlayerHp,
  updatePlayerMp,
  updatePlayerItems,
  finishPlayerTurn
} from '../actions/index.js';

import itemSet from '../database/item-db.js';

export class ItemList extends React.Component {
  useItem(itemName, itemQuantity, player, enemy) {
    this.props.dispatch(toggleItemMode());

    // initialize constants needed to process item
    const currentItem = itemSet[itemName];
    const oldPlayerHp = player.hp.current;
    const oldPlayerMp = player.mp.current;
    const oldPlayerItems = player.items;

    const newPlayerItems = oldPlayerItems
      .map(item => {
        if (item.name === currentItem.name) {
          return {...item, quantity: item.quantity -1};
        } else {
          return item;
        }
      })
      .filter(item => item.quantity >= 1)
      .sort((a, b) => a.id - b.id);

    // initialize variables depending on player's item type
    let newPlayerHp;
    let newPlayerMp;
    let messages;

    if (currentItem.type === 'hp') {
      newPlayerHp = oldPlayerHp + currentItem.power;
      if (newPlayerHp > player.hp.max) {
        newPlayerHp = player.hp.max;
      }
      messages = [
        `${player.name} used ${itemName}!`,
        `${currentItem.power} health points restored!`
      ];
      this.props.dispatch(updatePlayerHp(newPlayerHp));
      this.props.dispatch(updatePlayerItems(newPlayerItems));
      this.props.dispatch(finishPlayerTurn(messages));
    }

    if (currentItem.type === 'mp') {
      newPlayerMp = oldPlayerMp + currentItem.power;
      if (newPlayerMp > player.mp.max) {
        newPlayerMp = player.mp.max;
      }
      messages = [
        `${player.name} used ${itemName}!`,
        `${currentItem.power} magic points restored!`
      ];
      this.props.dispatch(updatePlayerMp(newPlayerMp));
      this.props.dispatch(updatePlayerItems(newPlayerItems));
      this.props.dispatch(finishPlayerTurn(messages));
    }

    if (currentItem.type === 'full-recovery') {
      newPlayerHp = player.hp.max;
      if (newPlayerHp > player.hp.max) {
        newPlayerHp = player.hp.max;
      }
      newPlayerMp = player.mp.max;
      if (newPlayerMp > player.mp.max) {
        newPlayerMp = player.mp.max;
      }
      messages = [
        `${player.name} used ${itemName}!`,
        `Health and magic points are fully restored!`
      ];
      this.props.dispatch(updatePlayerHp(newPlayerHp));
      this.props.dispatch(updatePlayerMp(newPlayerMp));
      this.props.dispatch(updatePlayerItems(newPlayerItems));
      this.props.dispatch(finishPlayerTurn(messages));
    }
  }

  render() {
    if (this.props.game.itemMode) {
      const itemButtons = this.props.player.items.map(item =>
        <button onClick={() => this.useItem(item.name, item.quantity, this.props.player, this.props.enemy)}key={item.id}>{item.name}: {item.quantity}</button>
      );
      return (
        <section className="menu item-list">
          {itemButtons}
          <button onClick={() => this.props.dispatch(toggleItemMode())}>CANCEL</button>
        </section>
      );
    }
    return null;
  }
}

const mapStateToStore = (state, prop) => {
  return {
    game: state.game,
    player: state.player,
    enemy: state.enemy
  };
}

export default connect(mapStateToStore)(ItemList);
