import React from 'react';
import {connect} from 'react-redux';

import {toggleSkillMode} from '../actions/index.js';

import skillSet from '../database/skill-db.js';

export class SkillList extends React.Component {
  render() {
    const skillButtons = this.props.skills.map((skillName, index) => 
      <button onClick={() => console.log(skillName)} key={index}>{skillName}: {skillSet[skillName].mp} MP</button>
    );
    if (this.props.skillMode) {
      return (
        <section className="menu skill-list">
          {skillButtons}
          <button onClick={() => this.props.dispatch(toggleSkillMode())}>CANCEL</button>
        </section>
      );
    }
    return null;
  }
}

const mapStateToStore = (state, prop) => {
  return {
    skillMode: state.game.skillMode,
    skills: state.player.skills
  };
}

export default connect(mapStateToStore)(SkillList);
