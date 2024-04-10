import { useMemo, useState } from 'react'

import './App.css'

function App() {

  let [counter, setCounter] = useState(0);

  return (
    <>
      <Sum></Sum>
      <button onClick={() => setCounter(counter + 1)}> Counter {counter}</button>
    </>
  )
}

const Sum = () => {

  const [input, setInput] = useState(1);

  // When we count ++ this loop is looping unessesory, That's why useMemo is comes for prevent this extra re-rendering
  let res= useMemo(()=>{
    console.log("hello")
    let count = 0;
    for (let i = 1; i <= input; i++) {
      count = count + i;
    }
    return count;
  }, [input])

  return <div>
    <input type="text" onChange={(e) => {
      setInput(e.target.value);
    }} />
    <p>Sum is {res}</p>
  </div>
}

export default App

//useCallbacke is same as useMemo but it used to prevent re-render another componet while passing function or object as a props to component
// and wrap another component inside memo when use useCallback