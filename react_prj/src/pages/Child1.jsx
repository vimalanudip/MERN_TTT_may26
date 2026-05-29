import React, { memo } from 'react';

function Child1({ onIncrement }) {
  console.log('Child re-rendered!');
  
  return (
    <div>
      <button onClick={onIncrement}>Increment from Child</button>
    </div>
  );
}

// Memoizing the child component to avoid unnecessary renders when props don't change
export default memo(Child1);