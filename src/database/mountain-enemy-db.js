const mountainEnemyDb = [
  {
    id: 1,
    name: 'FAIRY',
    level: 7,
    hp: {current: 30, max: 30},
    stats: {attack: 28, defense: 14},
    rewards: {exp: 999, gold: 999},
  },
  {
    id: 2,
    name: 'HARPY',
    level: 8,
    hp: {current: 55, max: 55},
    stats: {attack: 32, defense: 16},
    rewards: {exp: 12, gold: 33}
  },
  {
    id: 3,
    name: 'OGRE',
    level: 9,
    hp: {current: 80, max: 80},
    stats: {attack: 35, defense: 18},
    rewards: {exp: 37, gold: 76}
  },
  {
    id: 4,
    name: 'GRIFFON',
    level: 10,
    hp: {current: 90, max: 90},
    stats: {attack: 39, defense: 21},
    rewards: {exp: 29, gold: 65}
  }
];

export default mountainEnemyDb;
