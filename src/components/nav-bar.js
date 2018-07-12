import React from 'react';

export class NavBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      helpDisplay: false,
      pageCount: 1
    };
  }

  toggleHelpDisplay() {
    this.setState({helpDisplay: true});
  }

  incrementPageCount() {
    this.setState({pageCount: this.state.pageCount + 1});
  }

  decrementPageCount() {
    this.setState({pageCount: this.state.pageCount -1});
  }

  resetDisplay() {
    this.setState({
      helpDisplay: false,
      pageCount: 1
    })
  }

  render() {
    let helpContent;
    if (this.state.pageCount === 1) {
      helpContent = [
          <h1>SYNOPSIS</h1>,
          <p id="synopsis">An Arch-Mage has invade the kingdom of ASTERA!</p>,
          <br />,
          <p id="synopsis">Everything has fallen into disarray...</p>,
          <br />,
          <p id="synopsis">Monsters run amuck in the wilderness...</p>,
          <br />,
          <p id="synopsis">Fight as a KNIGHT, WIZARD, or CLERIC!</p>,
          <br />,
          <p id="synopsis">Restore peace to ASTERA once more!</p>,
          <br />,
          <button onClick={() => this.incrementPageCount()}>NEXT</button>
      ];
    }
    if (this.state.pageCount === 2) {
      helpContent = [
          <h1>CHARACTER CLASSES</h1>,
          <p>Before starting an adventure, choose a character class. This will determine the STATS and SKILLS as you progress through the game.</p>,
          <br />,
          <h1>KNIGHT</h1>,
          <p>These valiant warriors hone their supreme strengths and strike hard against any foes. When they level up, ATK increases faster than other traits.</p>,
          <br />,
          <h1>WIZARD</h1>,
          <p>Ultimate scholars of the arcane arts. Their magic are some of the deadliest skills in the realm. When they level up, INT increases faster than other traits.</p>,
          <br />,
          <h1>CLERIC</h1>,
          <p>With both a shield and the ability to cast healing spells, these are the kingdom's best defenders.  When they level up, DEF increases faster than other traits.</p>,
          <button onClick={() => this.decrementPageCount()}>PREV</button>,
          <button onClick={() => this.incrementPageCount()}>NEXT</button>
      ];
    }
    if (this.state.pageCount === 3) {
      helpContent = [
          <h1>OVERWORLD</h1>,
          <img src={require('../images/tutorial/ss1-world.png')} alt="Screenshot of Astera overworld"/>,
          <br />,
          <p>While in Astera, you can choose to visit TOWN, or venture into the wilderness to fight monsters.</p>,
          <br />,
          <p>Defeating monsters will accumulate EXP (experience points). With enough EXP, your character's LVL (level) will increase, thus giving you the power for fighting even more stronger monsters.</p>,
          <button onClick={() => this.decrementPageCount()}>PREV</button>,
          <button onClick={() => this.incrementPageCount()}>NEXT</button>
      ];
    }
    if (this.state.pageCount === 4) {
      helpContent = [
          <h1>BATTLE</h1>,
          <img src={require('../images/tutorial/ss2-battle.png')} alt="Screenshot of Astera overworld"/>,
          <br />,
          <p>While in battle, you and your enemy each have a turn to inflict damage, which is represented by HP (hit points). Deal as much damage to the enemy as you can via ATTACK or SKILLS!</p>,
          <br />,
          <p>Keep an eye on the upper right hand corner. If your HP falls to 0 before your enemy's, then the game is over. Using SKILLS will also consume your MP (magic points), so use them sparingly!</p>,
          <br />,
          <p>If your HP runs low, use ITEMS or HEAL spells to recover. Doing so will use up a turn. And if the tide of battle is not in your favor, consider making a RUN for your life!</p>,
          <button onClick={() => this.decrementPageCount()}>PREV</button>,
          <button onClick={() => this.incrementPageCount()}>NEXT</button>
      ];
    }
    if (this.state.pageCount === 5) {
      helpContent = [
          <h1>STATUS</h1>,
          <img src={require('../images/tutorial/ss3-status.png')} alt="Screenshot of Astera overworld"/>,
          <br />,
          <p>At any point during your adventure, click STATUS to open the full status menu.</p>,
          <br />,
          <p>STATS: ATK determines your physical attack power. DEF determines your ability to absorb enemy's attack. INT determines the power of your magic spells.</p>,
          <br />,
          <p>SKILLS: Each class has its unique skill set. New skills are learned as you level up. Each skill's name and MP cost is displayed here.</p>,
          <br />,
          <p>ITEMS: Items currently in your posession are displayed here, along with remaining quantity.</p>,
          <button onClick={() => this.decrementPageCount()}>PREV</button>,
          <button onClick={() => this.incrementPageCount()}>NEXT</button>
      ];
    }
    if (this.state.pageCount === 6) {
      helpContent = [
        <h1>SAVING YOUR GAME</h1>,
        <img src={require('../images/tutorial/ss4-inn.png')} alt="Screenshot of Astera overworld"/>,
        <br />,
        <p>Before exiting the game, be sure to save your progress at the TONW's INN!</p>,
        <button onClick={() => this.decrementPageCount()}>PREV</button>,
        <button onClick={() => this.resetDisplay()}>DONE</button>
      ];
    }

    if (this.state.helpDisplay) {
      return (
        <nav className="overlay">
          <section className="modal">
            {helpContent}
          </section>
        </nav>
      );
    } else if (!this.state.helpDisplay) {
      return (
        <nav>
          <button onClick={() => this.toggleHelpDisplay()}>HOW TO PLAY</button>
        </nav>
      );
    }
  }
}

export default NavBar;
