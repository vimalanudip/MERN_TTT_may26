import React, { useState, useCallback } from 'react';
import Child1 from './Child1';

function Parent1() {
  const [prev, setPrev] = useState(0);

  // Using useCallback to memoize the function and prevent unnecessary re-renders of the child component
  const increment = useCallback(() => {
    setPrev((prevCount) => prevCount + 1);
  }, []); // Only recreate the function if dependencies change (in this case, none)

  return (
     <div className="container-fluid py-5" style={{'margin-top':'50px'}}>
        <div className="container">
            <div className="text-center">
    <div>
      <h1>Count: {prev}</h1>
      {/* Pass the memoized function to the child */}
      <Child1 onIncrement={increment} />
      <button onClick={() => setPrev(prev + 1)}>Update Parent</button>
    </div>
    </div>
    </div>
    </div>
  );
}

export default Parent1;