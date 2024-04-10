import React from 'react'
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil';
import { countAtom, evenSelector } from './store/atoms/countAtom';

const App = () => {
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  )
}

const Count = () => {
  const count = useRecoilValue(countAtom);
  const isEven = useRecoilValue(evenSelector);
  return <div>
    <b>
      {count}
    </b>
    <p> {isEven ? "it is even" : "it is odd"} </p>
    <Buttons />
  </div>
 }

const Buttons = () => {
  const setCount = useSetRecoilState(countAtom);
  return <div>
    <button onClick={() => {
      setCount(count => count + 1)
    }}>
      Increment
    </button>
    <button onClick={() => {
      setCount(count => count - 1)
    }}>
      decrement
    </button>
  </div>
}

export default App




