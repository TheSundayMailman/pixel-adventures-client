import React from 'react';
import {connect} from 'react-redux';

import {
  updatePlayerItems,
  updatePlayerGold,
  toggleBuyMode,
  toggleSellMode
} from '../actions/index.js';

import itemSet from '../database/item-db';

export class ShoppingList extends React.Component {
  purchaseItem(currentItem, player) {
    const oldPlayerGold = player.gold;
    const oldPlayerItems = player.items;
    
    let messages;
    let newPlayerGold;
    let newPlayerItems;

    const itemCheck = player.items.filter(item => item.name === currentItem.name);
    if (itemCheck.length === 0) {
      oldPlayerItems.push({id: currentItem.id, name: currentItem.name, quantity: 1});
      newPlayerItems = oldPlayerItems
        .filter(item => item.quantity >= 1)
        .sort((a, b) => a.id - b.id)
      ;
    } else {
      newPlayerItems = oldPlayerItems
        .map(item => {
          if (item.name === currentItem.name) {
            return {...item, quantity: item.quantity + 1};
          } else {
            return item;
          }
        })
        .filter(item => item.quantity >= 1)
        .sort((a, b) => a.id - b.id)
      ;
    }

    newPlayerGold = oldPlayerGold - currentItem.price;
    if (newPlayerGold < 0) {
      messages = [
        'SHOP-KEEPER:',
        'You don\'t have enough GOLD...'
      ];
      this.props.dispatch(toggleBuyMode(messages));
    } else {
      messages = [
        'SHOP-KEEPER:',
        `1x ${currentItem.name} purchased!`,
        'Thank you very much!'
      ];
      this.props.dispatch(updatePlayerGold(newPlayerGold));
      this.props.dispatch(updatePlayerItems(newPlayerItems));
      this.props.dispatch(toggleBuyMode(messages));
    }
  }

  sellItem(currentItem, player) {
    const oldPlayerGold = player.gold;
    const oldPlayerItems = player.items;
    
    const newPlayerGold = oldPlayerGold + itemSet[currentItem.name].price / 2;

    const newPlayerItems = oldPlayerItems
      .map(item => {
        if (item.name === currentItem.name) {
          return {...item, quantity: item.quantity - 1};
        } else {
          return item;
        }
      })
      .filter(item => item.quantity >= 1)
      .sort((a, b) => a.id - b.id)
    ;

    const messages = [
      'SHOP-KEEPER:',
      `1x ${currentItem.name} sold!`,
      'Thank you very much!'
    ];

    this.props.dispatch(updatePlayerGold(newPlayerGold));
    this.props.dispatch(updatePlayerItems(newPlayerItems));
    this.props.dispatch(toggleSellMode(messages));
  }

  render() {
    const playerItems = this.props.player.items.map(item =>
      <li key={item.id}>{item.name}: {item.quantity}</li>
    );

    if (this.props.buyMode) {
      // this sets up list of items for purchase
      const saleList = ['POTION', 'HI-POTION', 'ETHER'];
      const saleItems = saleList.map(item =>
        <button onClick={() => this.purchaseItem(itemSet[item], this.props.player)} key={itemSet[item].id}>{itemSet[item].name}: {itemSet[item].price} GOLD</button>
      );

      return (
        <section className="menu shopping-window">
          <h2>{this.props.player.name}</h2>
          <p>CLASS: {this.props.player.job}</p>
          <p>LVL: {this.props.player.level}</p>
          <p>HP: {this.props.player.hp.current} / {this.props.player.hp.max}</p>
          <p>MP: {this.props.player.mp.current} / {this.props.player.mp.max}</p>
          <p>GOLD: {this.props.player.gold}</p>
          <section className="menu items-for-barter">
            <p>Click to purchase an item:</p>
            {saleItems}
          </section>
          <section className="menu items-owned">
            <ul>Items currently owned:
              {playerItems}
            </ul>
          </section>
        </section>
      );
    }
    
    if (this.props.sellMode) {
      // this sets up list of items for sale
      const saleItems = this.props.player.items.map(item =>
        <button onClick={() => this.sellItem(item, this.props.player)} key={item.id}>{item.name}: {itemSet[item.name].price / 2} GOLD</button>
      );
  
      return (
        <section className="menu shopping-window">
          <h2>{this.props.player.name}</h2>
          <p>CLASS: {this.props.player.job}</p>
          <p>LVL: {this.props.player.level}</p>
          <p>HP: {this.props.player.hp.current} / {this.props.player.hp.max}</p>
          <p>MP: {this.props.player.mp.current} / {this.props.player.mp.max}</p>
          <p>GOLD: {this.props.player.gold}</p>
          <section className="menu items-for-barter">
            <p>Click to sell an item:</p>
            {saleItems}
          </section>
          <section className="menu items-owned">
            <ul>Items currently owned:
              {playerItems}
            </ul>
          </section>
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
