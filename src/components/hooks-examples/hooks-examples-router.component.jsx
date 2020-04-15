import React, { useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';

import Footer from '../footer.component';

const RouterComponent = ({ name }) => {
  const [param, setParam] = useState('');
  const history = useHistory();
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/hooks-examples-router/${param}`);
  };

  return (
    <div className="routers-component">
      <h1 className="text-4xl text-center">Hooks Example - Routes</h1>
      <p className="text-2xl p-2">Hooks include - useParam, useHistory and useLocation</p>
      <form onSubmit={handleSubmit}>
        <label>
          <p className="text-xl pt-8 p-2">Fill in the route param (then press Enter):</p>
          <span className="text-orange-800">http://localhost:3000/hooks-examples-router/</span>
          <input
            className="shadow border rounded"
            onChange={(e) => setParam(e.target.value)}
            value={param}
            type="text"
          />
        </label>
      </form>
      {name ? (
        <>
          <p className="text-lg pt-4">This is the new route via Params: /{name}</p>
          <p className="text-lg pb-4">From useLocation, location.pathname: <i>{location.pathname}</i></p>
        </>
      ) : (
        <p className="text-xl p-4">This is the main route: /</p>
      )}
      {location.state ? (
        <p className="text-lg p-4">From useLocation, location.state: <i>{location.state.customMessageKey}</i></p>
      ) : null}
      <button className='bg-gray-200 text-gray-800 py-2 px-4 border border-gray-400 rounded shadow' onClick={() => history.goBack()}>Go Back via useHistory</button>
    </div>
  );
};

const HooksExamplesRouter = () => {
  const { name } = useParams();

  return (
    <div className="hooks-examples-basic">
      <RouterComponent name={name} />
      <Footer />
    </div>
  );
};

export default HooksExamplesRouter;
