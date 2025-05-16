// import { useState } from 'react';

// export default function Counter() {
//   const [count, setCount] = useState(0);

//   return (
//     <div style={{
//       display: 'flex',
//       alignItems: 'center',
//       gap: '0.5rem',
//       fontFamily: 'sans-serif',
//       padding: '1rem',
//     }}>
//       <button onClick={() => setCount(c => c - 1)}>-</button>
//       <span>{count}</span>
//       <button onClick={() => setCount(c => c + 1)}>+</button>
//     </div>
//   );
// }
import { useCounter } from './useCounter';

export default function Counter() {
  const { count, increment, decrement } = useCounter();

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      fontFamily: 'sans-serif',
      padding: '1rem',
    }}>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}