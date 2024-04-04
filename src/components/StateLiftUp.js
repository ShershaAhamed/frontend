import React, { useState } from 'react';

const ChildComponent = ({ count, onIncrement }) => {
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={onIncrement}>Increment</button>
    </div>
  );
};

const StateLiftUp = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Parent Component</h2>
      <ChildComponent count={count} onIncrement={handleIncrement} />
    </div>
  );
};

export default StateLiftUp;
