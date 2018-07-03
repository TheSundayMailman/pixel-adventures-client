const forestEnemyDb = [
  {
    id: 1,
    name: 'SLIME',
    level: 1,
    hp: {current: 5, max: 5},
    stats: {attack: 20, defense: 10},
    rewards: {exp: 999, gold: 100},
  },
  {
    id: 2,
    name: 'GHOUL',
    level: 3,
    hp: {current: 23, max: 23},
    stats: {attack: 20, defense: 10},
    rewards: {exp: 12, gold: 33}
  },
  {
    id: 3,
    name: 'ZOMBIE',
    level: 4,
    hp: {current: 45, max: 45},
    stats: {attack: 20, defense: 10},
    rewards: {exp: 37, gold: 76}
  },
  {
    id: 4,
    name: 'SKELETON',
    level: 5,
    hp: {current: 38, max: 38},
    stats: {attack: 20, defense: 10},
    rewards: {exp: 29, gold: 65}
  }
];

export default forestEnemyDb;
