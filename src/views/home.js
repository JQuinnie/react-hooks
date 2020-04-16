import React from 'react';
import { Link } from 'react-router-dom';


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
      <li>
        <Link className="link" to="/movies-context">
          Movies via Context API
        </Link>
      </li>
    </ul>
  </div>
);

export default Home;
