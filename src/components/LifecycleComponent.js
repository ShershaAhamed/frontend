import React, { useState, useEffect } from 'react';

const LifecycleComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Component is done');
    return () => {
      console.log('Component is notdone');
    };
  }, []);

  useEffect(() => {
    console.log('Count has changed:', count);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default LifecycleComponent;
