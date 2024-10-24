import { useSelector, useDispatch } from 'react-redux'

import { increment, decrement } from '../store/counter'

const Counter = () => {
  const counter = useSelector(state => state.counter)

  const dispatch = useDispatch()

  return (
    <div>
      <h3>Counter with Redux</h3>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <button onClick={() => dispatch(increment())}>+1</button>
        <h1>{counter}</h1>
        <button onClick={() => dispatch(decrement())}>-1</button>
      </div>
    </div>
  )
}

export default Counter