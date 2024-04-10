import { useState } from 'react'
import ProfileCard from './components/ProfileCard'
import './App.css'

function App() {

  return (
    <div className=''>
      <ProfileCard
        name={"Umang Dalvadi"}
        age={20}
        city={"Morbi"}
        followersCount={"456"}
        likesCount={"2k"}
        photosCount={"2"}
      />
    </div>
  )
}

export default App
