const dungeonEnemyDb = [
  {
    id: 1,
    name: 'WIZARD',
    level: 9,
    hp: {current: 80, max: 80},
    stats: {attack: 70, defense: 10},
    rewards: {exp: 999, gold: 999},
  },
  {
    id: 2,
    name: 'KNIGHT',
    level: 10,
    hp: {current: 110, max: 110},
    stats: {attack: 50, defense: 10},
    rewards: {exp: 12, gold: 33}
  },
  {
    id: 3,
    name: 'CENTAUR',
    level: 12,
    hp: {current: 170, max: 170},
    stats: {attack: 60, defense: 10},
    rewards: {exp: 37, gold: 76}
  },
  {
    id: 4,
    name: 'DRAGON',
    level: 15,
    hp: {current: 250, max: 250},
    stats: {attack: 70, defense: 10},
    rewards: {exp: 29, gold: 65}
  }
];

export default dungeonEnemyDb;
