import { useEffect, useState } from 'react'
import './App.css'
import Bai1 from './components/Bai1'
import UserFetch from './components/UserFetch.jsx'
import UserFetchAsync from './components/UserFetchAsync.jsx'

function App() {


  return (
    <>
      <Bai1 />
      <div>
        <div style={{ fontWeight: 'bold', fontSize: 15, color: 'gray' }}>Bài 1: useEffect Fetch Users</div>
        <UserFetch />
      </div>

       <div>
        <div style={{ fontWeight: 'bold', fontSize: 15, color: 'gray' }}>Bài 3: Async/Await Fetch Users</div>
        <UserFetchAsync />
      </div>
    </>
  )
}

export default App


