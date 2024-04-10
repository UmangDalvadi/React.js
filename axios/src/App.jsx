import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [data, setData] = useState([])
  const [err, setErr] = useState('')

  // useEffect(() => {
  //   axios.get('https://reqres.in/api/user?page=2')
  //     .then((res) => {
  //       setData(res.data.data)
  //     })
  //     .catch((err) => {
  //       setErr(err.message)
  //     })
  // }, [])

  const getApi = async () => {
    try {
      const res = await axios('https://reqres.in/api/user?page=2')
      setData(res.data.data)
    } catch (err) {
      setErr(err.message);
    }
  }

  useEffect(() => {
    getApi();
  }, [])

  return (
    <>
      {err !== '' && <h1>{err}</h1>}
      {data.map((data) => {
        return <div key={data.id}>
          <p>{data.id}</p>
          <p>{data.name}</p>
          <p>{data.year}</p>
        </div>
      })}
    </>
  )
}

export default App
