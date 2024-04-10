/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'


function App() {

  const [id, setId] = useState(1);
  return (
    <div>
      <button onClick={() => {
        setId(1)
      }}>1</button>
      <button onClick={() => {
        setId(2)
      }}>2</button>
      <button onClick={() => {
        setId(3)
      }}>3</button>
      <button onClick={() => {
        setId(4)
      }}>4</button>

      <Todo id={id} />
    </div>
  )
}

const Todo = ({ id }) => {
  const [todo, setTodo] = useState({});
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
      .then((res) => {
        setTodo(res.data.todo);
      })
      .catch((err) => {
        setError(err.message);
      })
  }, [id])

  return <div key={id}>
    {todo.title}
    {todo.description}
  </div>
}


export default App
