import React, { useState } from 'react';

function Parent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Parent Component</h1>
      <Child count={count} />
    </div>
  );
}

function Child({ count }) {
  const handleClick = () => {
    count += 1;
  };

  return (
    <div>
      <h2>Child Component</h2>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

export default Parent;