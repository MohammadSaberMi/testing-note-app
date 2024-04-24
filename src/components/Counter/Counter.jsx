import { useCounter } from '../hooks/useCounter';

export const counter = () => {
  const { count, decrement, increment } = useCounter();
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
};
