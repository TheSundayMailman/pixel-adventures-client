## Table of Contents

- [Introduction](#introduction)
- [Tech Stack](#tech-stack)
- [How to Play](#how-to-play)
  - [Synopsis](#synopsis)
  - [Character Classes](#character-classes)
  - [Overworld](#overworld)
  - [Battle](#battle)
  - [Status](#status)
  - [Saving Your Game](#saving-your-game)
- [Game Structure](#game-structure)
  - [Page Routes](#page-routes)
  - [GameContainer](#gamecontainer)
  - [CommandList](#commandlist)
  - [Character Model](#character-model)
- [Upcoming Changes](#upcoming-changes)

## Introduction

Welcome to [Pixel Adventures](https://pixel-adventures-client.herokuapp.com/)! This is a point-and-click text turn-based role-playing adventure game.

## Tech Stack

Pixel Adventures is built using the following:
* HTML5
* Cascading Style Sheet
* JavaScript (client-side) and Node (server-side)
* MongoDB

Client-Side Frameworks/Libraries:
* React
* React-Redux
* Redux-Form
* Redux-Thunk
* JWT-Decode

Server-Side Frameworks/Libraries:
* Express
* Mongoose
* Morgan
* Passport
* JSONWebToken
* bcryptjs

## How to Play

To start, simply visit the Register page, create a user account, a character name, and select a job class. Once your account is successfully created, you will be dropped into the game world as your new character.

Your ultimate goal is to battle monsters, level up your character, and prepare for a showdown with the final boss, the Arch-Mage.

### Synopsis

*An Arch-Mage has invaded the kingdom of ASTERA!*<br>
*Everything has fallen into disarray...*<br>
*Monsters are running amok in the wilderness...*<br>
*Fight as a KNIGHT, WIZARD, or CLERIC!*<br>
*Restore peace to ASTERA once more!*<br>

### Character Classes

Before starting an adventure, choose a character class. This will determine the path of your STATS and SKILLS as you progress through the game.

**KNIGHT**<br>
These valiant warriors hone their supreme strengths and strike hard against any foes. When they level up, ATK increases faster than other traits.

**WIZARD**<br>
Ultimate scholars of the arcane arts. Their magic are some of the deadliest skills in the realm. When they level up, INT increases faster than other traits.

**CLERIC**<br>
With both a shield and the ability to cast healing spells, these are the kingdom's best defenders. When they level up, DEF increases faster than other traits.

### Overworld

![Overworld](https://raw.githubusercontent.com/TheSundayMailman/pixel-adventures-client/master/src/images/tutorial/ss1-world.png)

While in Astera, you can choose to visit TOWN, or venture into the wilderness to fight monsters.

Defeating monsters will accumulate EXP (experience points). With enough EXP, your character's LVL (level) will increase, thus giving you the power for fighting even stronger monsters.

### Battle

![Battle](https://raw.githubusercontent.com/TheSundayMailman/pixel-adventures-client/master/src/images/tutorial/ss2-battle.png)

While in battle, you and your enemy each have a turn to inflict damage, which is represented by HP (hit points). Deal as much damage to the enemy as you can via ATTACK or SKILLS!

Keep an eye on the upper left window. If your HP falls to 0 before your enemy's, then the game is over. Using SKILLS will also consume your MP (magic points), so use them sparingly!

If your HP runs low, use ITEMS or HEAL spells to recover. Doing so will use up a turn. And if the tide of battle is not in your favor, consider making a RUN for your life!

### Status

![Status](https://raw.githubusercontent.com/TheSundayMailman/pixel-adventures-client/master/src/images/tutorial/ss3-status.png)

At any point during your adventure, click STATUS to examine the current status of your character.

**STATS:** ATK determines your physical attack power. DEF determines your ability to absorb enemy's attack. INT determines the power of your magic spells.

**SKILLS:** Each class has its unique skill set. New skills are learned as you level up. Each skill's name and MP cost is displayed here.

**ITEMS:** Items currently in your possession are displayed here, along with remaining quantity.

### Saving Your Game

![INN](https://raw.githubusercontent.com/TheSundayMailman/pixel-adventures-client/master/src/images/tutorial/ss4-inn.png)

Before exiting the game, be sure to save your progress at the TOWN's INN!<br>
**Note: this is a one-way operation. Once you `save`, you can’t go back!**

Good luck on your adventure!

## Game Structure

Pixel Adventures is comprised of the following files:

```
client/
  README.md
  node_modules/
  package.json
  public/
    favicon.ico
    index.html
    manifest.json
  src/
    components/
      command-list.js
      event-log.js
      game-page.js
      input.js
      item-list.js
      login-form.js
      login-page.js
      nav-bar.js
      player-status.js
      register-form.js
      register-page.js
      shopping-list.js
      skill-list.js
      sprite-display.js
      validators.js
    reducers/
      auth-reducer.js
      enemy-reducer.js
      game-reducer.js
      npc-reducer.js
      player-reducer.js
    actions/
      auth.js
      characters.js
      index.js
      users.js
      utils.js
    database/
    images/
    App.css
    App.js
    App.test.js
    index.css
    index.js
```

Pixel Adventures are rendered into the DOM entirely via React components. Root component is located in `src/index.js`, which calls `src/App.js`. `App.js`, in turn, renders all game components from login page to game container.

### Page Routes

The app contains 3 pages, login, register, and game.

* `LoginPage` component is located in `/` and handles logging in returning players. This component dispatches asycn actions for login, and if successful, updates the `auth` state, and redirects to `GamePage` component.

* `RegisterPage` component is routed to `/register` and handles new users. Taking in the user's account and character info, this component dispatches async actions to create a new user, along with a new character associated to that account. The user is then logged in and redirected to `GamePage` component.

* `GamePage` component is routed to `/game`. This component renders `GameContainer`, which is where the game lives. Upon mounting, this component will retrieve character associated with the current user. Player's progress is reflected in the character object, which is persisted in the server when the player rests at the TOWN's INN.

### GameContainer

This component is the basic interface of Pixel Adventures. It's a 640px by 480px window that houses the `PlayerStatus`, `EventLog`, and `CommandList` components

* `PlayerStatus` is rendered at the upper left corner as a quick way for the player to glance at the current HP/MP.

* `EventLog` is rendered at the lower left corner and displays what is currently happening in the game.

* `CommandList` is rendered at the lower right corner and is constantly updated to provide user with available commands during different parts of the game. More on next section...

### CommandList

`CommandList` component is the heart of Pixel Adventures.

Various game states determine what `CommandList` will render. For example, if a user is in ASTERA's overworld (`hubMode` in game state), `CommandList` will render buttons of available locales for the player to visit. During battle (`battleMode` in game state), `CommandList` will render buttons for available actions.

This component also has much of the game's logic, such as `ProcessPlayerTurn` and `ProcessEnemyTurn`, which are methods within the `CommandList` component. These methods dispatches various action to update the game state, which in turn causes `CommandList` to render different commands.

### Character Model

User and character objects are the only items that will persist via MongoDB. The character object is modfied when it is passed into various functions during the game, such as battles, leveling up, using items/skills, etc. This is an example of the character object,

```
{
  _id: ObjectId("5b44cf1c453c8209e3cb04af"),
  userId: ObjectId("5b44cf1c453c8209e3cb04ae"),
  name: "CECIL",
  job: "KNIGHT",
  level: 10,
  hp: {
    current: 90,
    max: 90
  },
  mp: {
    current: 35,
    "max": 35
  },
  stats: {
    attack: 39,
    defense: 31,
    intelligence: 22
  },
  skills: [ 
    "SHIELD-BASH", 
    "X-STRIKE", 
    "METEOR-SLASH"
  ],
  equipment: {
    weapon: "BROAD-SWORD",
    armor: "CHAIN-MAIL",
    accessory: "MEDALLION"
  },
  items: [ 
    {
      id: 1,
      name: "POTION",
      quantity: 3
    }, 
    {
      id: 3,
      name: "ETHER",
      quantity: 1
    }
  ],
  exp: 8991,
  gold: 800,
  nextLevel: 500,
}
```

## Upcoming Changes

* Arch-Mage, the final boss, will be implemented as an event which the player can enter via the overworld.

* Type-writer effect on `EventLog` to be added. All dialogues are comprised of arrays of text because they will be rendered as different elements in this component. CSS rule will be used for rendering each line one-by-one.

* New damage calculations and enemy stats. Enemies are currently either too easy or too hard depending on player class or level. This will be balanced in future updates.

* Character equipments are static at the moment but will be implemented in future udpates.

* Treasure chests containing items that are not found in shops will be added as random encounter upon exploration or end of battle.

* New graphics, enemies, NPC's, items, and skills will be added to enrich player experience.
