const mountainEnemyDb = [
  {
    id: 1,
    name: 'FAIRY',
    level: 7,
    currentHp: 30,
    maxHp: 30,
    stats: {attack: 30, defense: 10},
    rewards: {exp: 999, gold: 999},
  },
  {
    id: 2,
    name: 'HARPY',
    level: 8,
    currentHp: 55,
    maxHp: 55,
    stats: {attack: 25, defense: 10},
    rewards: {exp: 12, gold: 33}
  },
  {
    id: 3,
    name: 'OGRE',
    level: 9,
    currentHp: 80,
    maxHp: 80,
    stats: {attack: 30, defense: 20},
    rewards: {exp: 37, gold: 76}
  },
  {
    id: 4,
    name: 'GRIFFON',
    level: 10,
    currentHp: 90,
    maxHp: 90,
    stats: {attack: 35, defense: 20},
    rewards: {exp: 29, gold: 65}
  }
];

export default mountainEnemyDb;
