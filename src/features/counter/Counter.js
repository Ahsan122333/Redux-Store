import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  decrementByAmount,
  increment,
  incrementByAmount,
} from './counterSlice';

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(1);
  const [decrementAmount, setdecrementAmount] = useState(1);
  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <br />

        <input
          type="number"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />

        <button
          aria-label={`Increment by ${incrementAmount}`}
          onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}
        >
          Increment by Amount
        </button>
        <br />
        <input
          type="number"
          value={decrementAmount}
          onChange={(e) => setdecrementAmount(e.target.value)}
        />
        <button
          aria-label={`Decrement by ${decrementAmount}`}
          onClick={() => dispatch(decrementByAmount(Number(decrementAmount)))}
        >
          Decrement by Amount
        </button>
        <br />
        <span>Count: {count}</span>
      </div>
    </div>
  );
}
