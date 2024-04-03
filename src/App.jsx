import { useState } from 'react'
import Signin from './components/signin' 
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './components/dashboard'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Signin/>} />
          <Route path="/:id" element = {<Dashboard/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
