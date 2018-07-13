const dungeonEnemyDb = [
  {
    id: 11,
    name: 'SHAMAN',
    level: 11,
    hp: {current: 80, max: 80},
    stats: {attack: 70, defense: 10},
    rewards: {exp: 60, gold: 130},
  },
  {
    id: 12,
    name: 'CENTRY',
    level: 12,
    hp: {current: 110, max: 110},
    stats: {attack: 50, defense: 40},
    rewards: {exp: 62, gold: 83}
  },
  {
    id: 13,
    name: 'MINOTAUR',
    level: 13,
    hp: {current: 170, max: 170},
    stats: {attack: 60, defense: 35},
    rewards: {exp: 110, gold: 96}
  },
  {
    id: 14,
    name: 'GOLEM',
    level: 14,
    hp: {current: 250, max: 250},
    stats: {attack: 70, defense: 60},
    rewards: {exp: 120, gold: 165}
  },
  {
    id: 15,
    name: 'PHOENIX',
    level: 15,
    hp: {current: 250, max: 250},
    stats: {attack: 70, defense: 60},
    rewards: {exp: 120, gold: 165}
  }
];

export default dungeonEnemyDb;
