import React from 'react';
import {connect} from 'react-redux';

import {toggleSkillMode} from '../actions/index.js';

export class SkillList extends React.Component {
  render() {
    if (this.props.skillMode) {
      return (
        <section className="menu skill-list">
          <button>BASH: 5 MP</button>
          <button>X-SLASH: 10 MP</button>
          <button>SHIELD-CHARGE: 15 MP</button>
          <button>HELM-SPLITTER: 20 MP</button>
          <button onClick={() => this.props.dispatch(toggleSkillMode())}>CANCEL</button>
        </section>
      );
    }
    return null;
  }
}

const mapStateToStore = (state, prop) => {
  return {
    skillMode: state.game.skillMode
  };
}

export default connect(mapStateToStore)(SkillList);
