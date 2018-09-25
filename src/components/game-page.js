import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import GameContainer from './game-container.js';
import Footer from './footer.js';

import { reinitializeGameState } from '../actions/index.js';
import { retrieveCharacter } from '../actions/characters.js';

import '../styles/game-page.css';

export class GamePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {};
  }

  componentDidMount() {
    if (this.props.loggedIn) {
      this.props.dispatch(reinitializeGameState());
      this.props.dispatch(retrieveCharacter());
    }
  }

  render() {
    if (!this.props.loggedIn) {
      return <Redirect to="/" />
    }
    return (
      <React.Fragment>
        <main id="game-container">
          <img id="logo" src={require('../images/logo.png')} alt="Pixel Adventures" />
          <GameContainer />
        </main>
        <Footer />
        <section id="tilt">
          <img id="tilt-message" src={require('../images/tilt.png')} alt="Please rotate your screen." />
        </section>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(GamePage);
