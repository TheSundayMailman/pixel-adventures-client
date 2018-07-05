const dungeonEnemyDb = [
  {
    id: 1,
    name: 'WIZARD',
    level: 9,
    hp: {current: 80, max: 80},
    stats: {attack: 70, defense: 10},
    rewards: {exp: 60, gold: 130},
  },
  {
    id: 2,
    name: 'KNIGHT',
    level: 10,
    hp: {current: 110, max: 110},
    stats: {attack: 50, defense: 40},
    rewards: {exp: 62, gold: 83}
  },
  {
    id: 3,
    name: 'CENTAUR',
    level: 12,
    hp: {current: 170, max: 170},
    stats: {attack: 60, defense: 35},
    rewards: {exp: 110, gold: 96}
  },
  {
    id: 4,
    name: 'DRAGON',
    level: 15,
    hp: {current: 250, max: 250},
    stats: {attack: 70, defense: 60},
    rewards: {exp: 120, gold: 165}
  }
];

export default dungeonEnemyDb;
