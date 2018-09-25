import React from 'react';

import '../styles/float-grid.css';
import '../styles/footer.css';

export function Footer(props) {
  return (
    <footer className="game-footer" role="contentinfo">
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
  );
}

export default Footer;
