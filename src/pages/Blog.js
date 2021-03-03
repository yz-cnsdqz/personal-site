import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';
import data from '../data/blog';

const Projects = () => (
  <Main
    title="Blog"
    description="Learn about Yan Zhang's blog articles."
  >
    <article className="post" id="blog">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/blog">Blog Articles</Link></h2>
          {/* <p>A full list is on google scholar as well.</p> */}
        </div>
      </header>
      {data.map((project) => (
        <Cell
          data={project}
          key={project.title}
        />
      ))}
    </article>
  </Main>
);

export default Projects;
