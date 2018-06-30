const dungeonEnemyDb = [
  {
    id: 1,
    name: 'WIZARD',
    level: 9,
    currentHp: 80,
    maxHp: 80,
    stats: {attack: 70, defense: 10},
    rewards: {exp: 999, gold: 999},
  },
  {
    id: 2,
    name: 'KNIGHT',
    level: 10,
    currentHp: 110,
    maxHp: 110,
    stats: {attack: 50, defense: 10},
    rewards: {exp: 12, gold: 33}
  },
  {
    id: 3,
    name: 'CENTAUR',
    level: 12,
    currentHp: 170,
    maxHp: 170,
    stats: {attack: 60, defense: 10},
    rewards: {exp: 37, gold: 76}
  },
  {
    id: 4,
    name: 'DRAGON',
    level: 15,
    currentHp: 250,
    maxHp: 250,
    stats: {attack: 70, defense: 10},
    rewards: {exp: 29, gold: 65}
  }
];

export default dungeonEnemyDb;
