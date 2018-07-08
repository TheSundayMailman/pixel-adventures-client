import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import GameContainer from './game-container.js';
import {retrieveCharacter} from '../actions/characters.js';

export class GamePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {};
  }

  componentDidMount() {
    this.props.dispatch(retrieveCharacter());
  }

  render() {
    if (!this.props.loggedIn) {
      return <Redirect to="/" />
    }
    return (
      <main>
        <h1>Pixel Adventures</h1>
        <GameContainer />
      </main>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(GamePage);
