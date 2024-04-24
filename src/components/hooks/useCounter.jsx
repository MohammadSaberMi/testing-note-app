import { useState } from 'react';

export const useCounter = ({ intialCount = 0 } = {}) => {
  const [count, setCount] = useState(intialCount);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  return { count, increment, decrement };
};
