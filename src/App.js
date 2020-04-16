import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './views/home';
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

// TODO: project ideas could include the ones from codepen

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
