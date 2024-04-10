import { useEffect, useState } from 'react'
import './App.css'

function useIsOnline() {

  const [isOnline, setIsOnline] = useState(window.navigator.onLine);

  useEffect(() => {

    window.addEventListener("online", () => {
      setIsOnline(true);
    })
    window.addEventListener("offline", () => {
      setIsOnline(false);
    })

  }, [])

  return isOnline
}

function App() {
  const isOnline = useIsOnline();

  return (
    <>
      {isOnline ? "Online" : "Offline"}
    </>
  )
}

export default App
