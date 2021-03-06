import React, { useState, useEffect, useContext, createContext } from 'react';

import Footer from '../footer.component';

const StateComponent = () => {
  const [isGreen, setIsGreen] = useState(true);
  const [name, setName] = useState('');

  const columnStyle = {
    display: 'flex',
    flexDirection: 'column'
  };

  return (
    <div className="using-state">
      <h1 className="text-4xl text-center">useState Example:</h1>
      <h3 onClick={() => setIsGreen(!isGreen)} style={{ color: isGreen ? 'limegreen' : 'orange' }}>
        Click here to toggle color!
      </h3>
      <form style={{ ...columnStyle, width: '300px' }}>
        <label style={columnStyle}>
          <span>What is your name?</span>
          <input onChange={e => setName(e.target.value)} value={name} type="text" />
        </label>
        <pre>{JSON.stringify({ name }, null, 2)}</pre>
      </form>
    </div>
  );
};

const EffectComponent = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setTimeout(setTime(new Date()), 1000);
    return () => clearTimeout(timer);
  }, []); // set array to [time] to see it work

  return (
    <div>
      <h1 className="text-4xl text-center">useEffect Example:</h1>
      <h3>{time.toLocaleTimeString()}</h3>
      <div style={{ color: 'red' }}>!disabled for the time being!</div>
    </div>
  );
};

const UserContext = createContext([
  {
    firstName: 'Bob',
    lastName: 'Bobberson',
    suffix: 1,
    email: 'theBob@theBobs.com'
  },
  obj => obj
]);

const LevelFive = () => {
  const [user, setUser] = useContext(UserContext);

  return (
    <div>
      <h5>{`${user.firstName} ${user.lastName} the ${user.suffix} born`}</h5>
      <button
        onClick={() => {
          setUser(Object.assign({}, user, { suffix: user.suffix + 1 }));
        }}
      >
        Increment
      </button>
    </div>
  );
};

const LevelFour = () => (
  <div>
    <h4>Fourth Level</h4>
    <LevelFive />
  </div>
);

const LevelThree = () => (
  <div>
    <h3>Third Level</h3>
    <LevelFour />
  </div>
);

const LevelTwo = () => (
  <div>
    <h2>Second level</h2>
    <LevelThree />
  </div>
);

const ContextComponent = () => {
  const userState = useState({
    firstName: 'Chip',
    lastName: 'McChipperson',
    suffix: 1,
    email: 'theChip@theBobs.com'
  });

  // not passing the hook (userState) from above to each level, 5 deep where it is rendered
  return (
    <UserContext.Provider value={userState}>
      <h1>First Level</h1>
      <LevelTwo />
    </UserContext.Provider>
  );
};

const HooksExamplesBasic = () => (
  <div className="hooks-examples-basic">
    <StateComponent />
    <hr />
    <EffectComponent />
    <hr />
    <ContextComponent />
    <hr />
    <Footer />
  </div>
);

export default HooksExamplesBasic;
