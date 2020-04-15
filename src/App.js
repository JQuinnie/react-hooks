import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import HooksExamplesBasic from './components/hooks-examples/hooks-examples-basic.component';
import HooksExamplesAdvance from './components/hooks-examples/hooks-examples-advance.component';
import HooksExamplesRouter from './components/hooks-examples/hooks-examples-router.component';
import GithubCommit from './components/github-commit/github-commit.component';
import PokemonFetch from './components/pokemon-fetch/pokemon-fetch.component';
import StateVsRef from './components/state-vs-ref/state-vs-ref.component';
import ReducerForms from './components/reducer-form/reducer-form.component';
import LearnAboutCountries from './components/learn-about-countries/learn-about-countries.component';
import ErrorPage from './components/error-page.component';

import './App.css';

//TODO: fix unordered list text
// project ideas could include the ones from codepen

const Home = () => (
  <div className="home">
    <h1 className="text-4xl text-center">Please select a project below:</h1>
    <ul className="list-disc">
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
        <Link className="link" to="/hooks-examples-router">
          React Hooks Examples - Router
        </Link>
      </li>
      <li>
        <Link
          className="link"
          to={{
            pathname: '/hooks-examples-router',
            state: {
              customMessageKey: 'passing object into route with custom message',
            },
          }}
        >
          React Hooks Examples - Router with State Passing
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
      <li>
        <Link className="link" to="/reducer-form">
          Reducer Form
        </Link>
      </li>
      <li>
        <Link className="link" to="/learn-about-countries">
          Learn About Countries
        </Link>
      </li>
    </ul>
  </div>
);

function App() {
  return (
    <div className="App-container">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/hooks-examples-basic" component={HooksExamplesBasic} />
        <Route path="/hooks-examples-advance" component={HooksExamplesAdvance} />
        <Route exact path="/hooks-examples-router" component={HooksExamplesRouter} />
        <Route path="/hooks-examples-router/:name" component={HooksExamplesRouter} />
        <Route path="/github-commit" component={GithubCommit} />
        <Route path="/pokemon-fetch" component={PokemonFetch} />
        <Route path="/state-vs-ref" component={StateVsRef} />
        <Route path="/reducer-form" component={ReducerForms} />
        <Route path="/learn-about-countries" component={LearnAboutCountries} />
        <Route component={ErrorPage} />
      </Switch>
    </div>
  );
}

export default App;
