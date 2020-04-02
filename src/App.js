import React from 'react';
import { Route, Link } from 'react-router-dom';

import GithubCommit from './components/github-commit/github-commit.component';
import HooksExamplesBasic from './components/hooks-examples/hooks-examples-basic.component'
import PokemonFetch from './components/pokemon-fetch/pokemon-fetch.component';

import './App.css';

//TODO: fix unordered list text
// project ideas could include the ones from codepen

const Home = () => (
  <div>
    <h1>Please select a project below:</h1>
    <ul>
      <li>
        <Link to="/github-commit">Github Commits</Link>
      </li>
      <li>
        <Link to='/hooks-examples-basic'>React Hooks Examples - Basic</Link>
      </li>
      <li>
      <Link to='/pokemon-fetch'>Pokemon Fetch</Link>
    </li>
    </ul>
  </div>
);

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route path="/github-commit" component={GithubCommit} />
      <Route path="/hooks-examples" component={HooksExamplesBasic} />
      <Route path='/pokemon-fetch' component={PokemonFetch} />
    </div>
  );
}

export default App;
