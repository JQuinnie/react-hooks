import React from 'react';
import { Route, Link } from 'react-router-dom';

import HooksExamplesBasic from './components/hooks-examples/hooks-examples-basic.component';
import HooksExamplesAdvance from './components/hooks-examples/hooks-examples-advance.component';
import GithubCommit from './components/github-commit/github-commit.component';
import PokemonFetch from './components/pokemon-fetch/pokemon-fetch.component';
import StateVsRef from './components/state-vs-ref/state-vs-ref.component';

import './App.css';

//TODO: fix unordered list text
// project ideas could include the ones from codepen

const Home = () => (
  <div className="home">
    <h1>Please select a project below:</h1>
    <ul>
      <li>
        <Link className="link" to="/hooks-examples-basic">
          React Hooks Examples - Basic
        </Link>
      </li>
      <li>
        <Link className="link" to="/hooks-examples-advance">
          React Hooks Examples - Advance
        </Link>
      </li>
      <li>
        <Link className="link" to="/github-commit">
          Github Commits
        </Link>
      </li>
      <li>
        <Link className="link" to="/pokemon-fetch">
          Pokemon Fetch
        </Link>
      </li>
      <li>
        <Link className="link" to="/state-vs-ref">
          State Versus Ref
        </Link>
      </li>
    </ul>
  </div>
);

function App() {
  return (
    <div className="App-container">
      <Route exact path="/" component={Home} />
      <Route path="/hooks-examples-basic" component={HooksExamplesBasic} />
      <Route path="/hooks-examples-advance" component={HooksExamplesAdvance} />
      <Route path="/github-commit" component={GithubCommit} />
      <Route path="/pokemon-fetch" component={PokemonFetch} />
      <Route path="/state-vs-ref" component={StateVsRef} />
    </div>
  );
}

export default App;
