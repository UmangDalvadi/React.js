
import { useRecoilValue, useRecoilValueLoadable, RecoilRoot } from 'recoil'
import './App.css'
import { todosAtom } from './store/atoms/todosAtom'

function App() {

  return (
    <RecoilRoot>
      <Todo id={1} />
      <Todo id={2} />
      <Todo id={4} />
    </RecoilRoot>
  )
}

const Todo = ({ id }) => {
  // const todo = useRecoilValue(todosAtom(id));

  const todo = useRecoilValueLoadable(todosAtom(id));
  // state.loading
  // state.hasValue
  // state.hasError
  // contents

  if (todo.state === "loading") {
    return <div>
      Loading...
    </div>
  }
  else if (todo.state === "hasValue") {
    return <div>
      <b>{todo.title}</b>
      <p>{todo.description}</p>
    </div>
  }
  else if (todo.state === "hasError") {
    return <div>
      Error...
    </div>
  }

}

export default App
