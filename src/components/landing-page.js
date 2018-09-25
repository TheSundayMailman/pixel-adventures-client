import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/float-grid.css';
import '../styles/landing-page.css';

export class LandingPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {};
  }

  render () {
    return (
      <React.Fragment>
        <header>
          <img id="logo" src={require('../images/logo.png')} alt="Pixel Adventures." />
          <section className="flex-container">
            <img src={require('../images/npcs/2.png')} alt="Demo NPC Sprite." />
            <img src={require('../images/npcs/3.png')} alt="Demo NPC Sprite." />
            <img src={require('../images/npcs/4.png')} alt="Demo NPC Sprite." />
            <img src={require('../images/npcs/6.png')} alt="Demo NPC Sprite." />
            <img src={require('../images/npcs/8.png')} alt="Demo NPC Sprite." />
            <img src={require('../images/npcs/9.png')} alt="Demo NPC Sprite." />
          </section>
          <a id="attract" href="#welcome">START</a>
        </header>
        <main id="welcome">
          <article className="how-to">
            <div className="row">
              <section className="col-12 box">
                <h1>SYNOPSIS</h1>
                <hr />
                <p>An Arch-Mage has invaded the kingdom of ASTERA!</p>
                <p>Everything has fallen into disarray...</p>
                <p>Monsters are running amok in the wilderness...</p>
                <p>Fight as a KNIGHT, WIZARD, or CLERIC!</p>
                <p>Restore peace to ASTERA once more!</p>
              </section>
            </div>
            <div className="row">
              <section className="col-12 box">
              <h1>CHARACTER CLASSES</h1>
              <hr />
              <p>Before starting an adventure, choose a character class. This will determine the path of your STATS and SKILLS as you progress through the game.</p>
              <h2>KNIGHT</h2>
              <p>These valiant warriors hone their supreme strengths and strike hard against any foes. When they level up, ATK increases faster than other traits.</p>
              <h2>WIZARD</h2>
              <p>Ultimate scholars of the arcane arts. Their magic are some of the deadliest skills in the realm. When they level up, INT increases faster than other traits.</p>
              <h2>CLERIC</h2>
              <p>With both a shield and the ability to cast healing spells, these are the kingdom's best defenders. When they level up, DEF increases faster than other traits.</p>
              </section>
            </div>
          </article>
          <article className="engage">
            <div className="row">
              <h1>OVERWORLD</h1>
              <section className="col-6 box">
                <img src={require('../images/tutorial/ss1-world.png')} alt="Screenshot of Astera overworld"/>
              </section>
              <section className="col-6 box">
                <p>While in Astera, you can choose to visit TOWN, or venture into the wilderness to fight monsters.</p>
                <p>Defeating monsters will accumulate EXP (experience points). With enough EXP, your character's LVL (level) will increase, thus giving you the power for fighting even stronger monsters.</p>
              </section>
              <hr />
            </div>
            <div className="row">
              <h1>BATTLE</h1>
              <section className="col-6 box">
                <img src={require('../images/tutorial/ss2-battle.png')} alt="Screenshot of Astera overworld"/>
              </section>
              <section className="col-6 box">
                <p>While in battle, you and your enemy each have a turn to inflict damage, which is represented by HP (hit points). Deal as much damage to the enemy as you can via ATTACK or SKILLS!</p>
                <p>Keep an eye on the upper left window. If your HP falls to 0 before your enemy's, then the game is over. Using SKILLS will also consume your MP (magic points), so use them sparingly!</p>
                <p>If your HP runs low, use ITEMS or HEAL spells to recover. Doing so will use up a turn. And if the tide of battle is not in your favor, consider making a RUN for your life!</p>
              </section>
              <hr />
            </div>
            <div className="row">
              <h1>STATUS</h1>
              <section className="col-6 box">
                <img src={require('../images/tutorial/ss3-status.png')} alt="Screenshot of Astera overworld"/>
              </section>
              <section className="col-6 box">
                <p>At any point during your adventure, click STATUS to examine the current status of your character.</p>
                <p>STATS: ATK determines your physical attack power. DEF determines your ability to absorb enemy's attack. INT determines the power of your magic spells.</p>
                <p>SKILLS: Each class has its unique skill set. New skills are learned as you level up. Each skill's name and MP cost is displayed here.</p>
                <p>ITEMS: Items currently in your possession are displayed here, along with remaining quantity.</p>
              </section>
              <hr />
            </div>
            <div className="row">
              <h1>SAVING YOUR GAME</h1>
              <section className="col-6 box">
                <img src={require('../images/tutorial/ss4-inn.png')} alt="Screenshot of Astera overworld"/>
              </section>
              <section className="col-6 box">
                <p>Before exiting the game, be sure to save your progress at the TOWN's INN!</p>
                <p>Good luck on your adventure!</p>
              </section>
              <hr />
            </div>
            <div className="row">
              <section className="col-6 box">
                <Link to="login">LOGIN</Link>
              </section>
              <section className="col-6 box">
                <Link to="register">REGISTER</Link>
              </section>
            </div>
          </article>
        </main>
        <footer role="contentinfo">
          <div className="row">
            <section className="col-6 box">
              <h1>ABOUT:</h1>
              <p>Pixel Adventures is built on HTML5, CSS3, and React. Server-side operations powered by Node and Express. Check out my GitHub Repo for more information.</p>
            </section>
            <section className="col-6 box">
            <ul><h1>LINKS:</h1>
              <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/TheSundayMailman/pixel-adventures-client">Client Repo</a></li>
              <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/TheSundayMailman/pixel-adventures-server">Server Repo</a></li>
              <li><a target="_blank" rel="noopener noreferrer" href="https://albert-sare.netlify.com/">My Portfolio</a></li>
            </ul>
            </section>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default LandingPage;
