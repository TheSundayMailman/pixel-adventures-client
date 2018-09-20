import React from 'react';

import '../styles/footer.css';

export class Footer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {};
  }

  render() {
    return (
      <footer role="contentinfo">
        <p>footer here!</p>
        <p>Contact</p>
        <p>GitHub</p>
      </footer>
    );
  }
}

export default Footer;