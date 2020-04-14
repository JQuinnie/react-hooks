import React, { useState, useRef } from 'react';

import Footer from '../footer.component';

const StateVsRef = () => {
  const [count, setCount] = useState(0);
  let countRef = useRef(0);

  const handleReset = () => {
    setCount(0);
    countRef.current = 0;
  };

  return (
    <div>
      <h1 className="text-4xl text-center">State vs. Ref</h1>
      <p>State Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment State Count</button>
      <hr />
      <p>Ref Counter: {countRef.current}</p>
      <button onClick={() => (countRef.current = countRef.current + 1)}>Increment Ref Count</button>
      <div style={{ color: 'red' }}>
        Ref counter will update outside of render, you will see ref count change only after triggering a
        re-render by setting state.
      </div>
      <button onClick={handleReset}>Reset Counters</button>
      <hr/>
      <Footer />
    </div>
  );
};

export default StateVsRef;
