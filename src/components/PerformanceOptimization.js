import React, { useState, useMemo } from 'react';

const PerformanceOptimization = () => {
  const [count, setCount] = useState(0);

 
  const squared = useMemo(() => {
    console.log('Calculating squared...');
    return count * count;
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Squared: {squared}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default PerformanceOptimization;
