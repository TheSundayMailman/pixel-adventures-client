import React from 'react';

export default function CommandList(props) {
  return (
    <section className="menu command-list animate-reveal animate-last">
      <ul>
        <li><a href="#">ATTACK</a></li>
        <li><a href="#">ITEMS</a></li>
        <li><a href="#">STATUS</a></li>
        <li><a href="#">RUN</a></li>
      </ul>
    </section>
  );
}
