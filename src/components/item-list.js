import React from 'react';
import {connect} from 'react-redux';

import {
  toggleItemMode,
  updatePlayerHp,
  updatePlayerMp,
  updatePlayerItems,
  collectBattleRewards,
  toggleLevelUpMode,
  toggleVictoryMode,
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
      this.props.dispatch(updatePlayerItems());
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
      this.props.dispatch(updatePlayerItems());
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
      this.props.dispatch(updatePlayerItems());
      this.props.dispatch(finishPlayerTurn(messages));
    }
  }

  render() {
    if (this.props.game.itemMode) {
      const itemButtons = this.props.player.items.map((item, index) =>
        <button onClick={() => this.useItem(item.name, item.quantity, this.props.player, this.props.enemy)}key={index}>{item.name}: {item.quantity}</button>
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
