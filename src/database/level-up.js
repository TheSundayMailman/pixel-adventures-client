export const getLevelUp = (player) => {
  const oldLevel = player.level;
  const newLevel = oldLevel + 1;

  const oldMaxHp = player.hp.max;
  const oldMaxMp = player.mp.max;
  const oldAttack = player.stats.attack;
  const oldDefense = player.stats.defense;
  const oldIntelligence = player.stats.intelligence;
  
  let hpGain;
  let newMaxHp;
  let mpGain;
  let newMaxMp;
  let attackGain;
  let newAttack;
  let defenseGain;
  let newDefense;
  let intelligenceGain;
  let newIntelligence;

  const newSkills = [...player.skills];

  let newNextLevel = newLevel * 25;
  if (newLevel === 20) {
    newNextLevel = 0;
  }

  if (player.job === 'KNIGHT') {
    hpGain = Math.floor(oldMaxHp * 0.1) + Math.floor(Math.random() * 11);
    newMaxHp = oldMaxHp + hpGain;

    mpGain = Math.floor(oldMaxMp * 0.1) + Math.floor(Math.random() * 3);
    newMaxMp = oldMaxMp + mpGain;

    attackGain = Math.floor(oldAttack * 0.12) + Math.floor(Math.random() * 4);
    newAttack = oldAttack + attackGain;

    defenseGain = Math.floor(oldDefense * 0.1) + Math.floor(Math.random() * 4);
    newDefense = oldDefense + defenseGain;

    intelligenceGain = Math.floor(oldIntelligence * 0.1) + Math.floor(Math.random() * 3);
    newIntelligence = oldIntelligence + intelligenceGain;

    if (newLevel === 5) {
      newSkills.push('X-STRIKE');
    } else if (newLevel === 10) {
      newSkills.push('METEOR-SLASH');
    } else if (newLevel === 15) {
      newSkills.push('HELM-SPLITTER');
    }

  } else if (player.job === 'WIZARD') {
    hpGain = Math.floor(oldMaxHp * 0.11) + Math.floor(Math.random() * 4);
    newMaxHp = oldMaxHp + hpGain;

    mpGain = Math.floor(oldMaxMp * 0.1) + Math.floor(Math.random() * 10);
    newMaxMp = oldMaxMp + mpGain;

    attackGain = Math.floor(oldAttack * 0.11) + Math.floor(Math.random() * 3);
    newAttack = oldAttack + attackGain;

    defenseGain = Math.floor(oldDefense * 0.11) + Math.floor(Math.random() * 3);
    newDefense = oldDefense + defenseGain;

    intelligenceGain = Math.floor(oldIntelligence * 0.12) + Math.floor(Math.random() * 4);
    newIntelligence = oldIntelligence + intelligenceGain;

    if (newLevel === 5) {
      newSkills.push('ICE');
    } else if (newLevel === 10) {
      newSkills.push('THUNDER');
    } else if (newLevel === 15) {
      newSkills.push('METEOR');
    }

  } else if (player.job === 'CLERIC') {
    hpGain = Math.floor(oldMaxHp * 0.1) + Math.floor(Math.random() * 7);
    newMaxHp = oldMaxHp + hpGain;
    
    mpGain = Math.floor(oldMaxMp * 0.1) + Math.floor(Math.random() * 7);
    newMaxMp = oldMaxMp + mpGain;
    
    attackGain = Math.floor(oldAttack * 0.1) + Math.floor(Math.random() * 3);
    newAttack = oldAttack + attackGain;
    
    defenseGain = Math.floor(oldDefense * 0.12) + Math.floor(Math.random() * 4);
    newDefense = oldDefense + defenseGain;
    
    intelligenceGain = Math.floor(oldIntelligence * 0.11) + Math.floor(Math.random() * 3);
    newIntelligence = oldIntelligence + intelligenceGain;

    if (newLevel === 5) {
      newSkills.push('HEAL');
    } else if (newLevel === 10) {
      newSkills.push('SHIELD-CHARGE');
    } else if (newLevel === 15) {
      newSkills.push('HOLY');
    }

  }

  return {
    newLevel,
    hpGain, newMaxHp,
    mpGain, newMaxMp,
    attackGain, newAttack,
    defenseGain, newDefense,
    intelligenceGain, newIntelligence,
    newSkills,
    newNextLevel
  };

};

export default getLevelUp;
