import { useState } from 'react'
import Signin from './components/signin' 
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './components/dashboard'
// import PrivateRoutes from './middleware/PrivateRoute'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Signin/>} />
          {/* <Route element={<PrivateRoutes/>}>
            
          </Route> */}
            <Route path="/:id" element = {<Dashboard/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
