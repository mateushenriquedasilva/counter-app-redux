import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, icrementByAmount } from '../../features/counter/counterSlice';

function Counter() {

  const [number, setNumber] = useState("")

  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <input type="number" min={1} onChange={(e) => setNumber(e.target.value)}/>
      <div>
        <button 
          aria-label='Icrement value'
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button 
          aria-label='Decrement value'
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <br />
        <button 
          aria-label='Icrement By Amount'
          onClick={() => {
            if(number === ""){
              return console.log('empty')
            }else{
              dispatch(icrementByAmount(number))
            }
          }}
        >
          Icrement By Amount
        </button>
      </div>
    </div>
  );
}

export default Counter;