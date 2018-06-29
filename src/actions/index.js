'use strict';

export const UPDATE_PLAYER_STATS = 'UPDATE_PLAYER_STATS';
export const updatePlayerStats = (damage) => {
  return {
    type: UPDATE_PLAYER_STATS,
    damage,
  };
};

export const UPDATE_ENEMY_STATS = 'UPDATE_ENEMY_STATS';
export const updateEnemyStats = (damage) => {
  return {
    type: UPDATE_ENEMY_STATS,
    damage,
  };
};

export const UPDATE_DAMAGE_DEALT_MESSAGES = 'UPDATE_DAMAGE_DEALT_MESSAGES';
export const updateDamageDealtMessages = (messages) => {
  return {
    type: UPDATE_DAMAGE_DEALT_MESSAGES,
    messages
  }
};

export const UPDATE_DAMAGE_RECEIVED_MESSAGES = 'UPDATE_DAMAGE_RECEIVED_MESSAGES';
export const updateDamageReceivedMessages = (messages) => {
  return {
    type: UPDATE_DAMAGE_RECEIVED_MESSAGES,
    messages
  }
};
