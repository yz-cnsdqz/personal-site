import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Yan Zhang's personal website."}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">News about me</Link></h2>
          <p>
            Do AI for People: Human behavior capturing, understanding, and synthesis.
          </p>
        </div>
      </header>
      <ul>
        <li>[2021.3.3] Two papers are accepted by CVPR 2021.</li>
        <li>[2020.11.26] Our paper of grasping field gets the best paper award on 3DV 2020.</li>
        <li>[2020.10.1] Two papers (1 oral + 1 poster) are accepted by 3DV 2020.</li>
        <li>[2020.8.1] Start the postdoc position at ETH Zurich, advised by Prof. Siyu Tang.</li>
      </ul>
      {/* <p> Source available <a href="https://github.com/mldangelo/personal-site">here</a>.</p> */}
    </article>
  </Main>
);

export default Index;
