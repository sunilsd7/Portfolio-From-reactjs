import { useState } from 'react'
import Home from './Component/Home'
import './App.css'
import { Toaster } from 'react-hot-toast'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <div>
    <Toaster
  position="top-center"
  
  reverseOrder={false}
/>
    </div>

   <Home/>
    </>
  )
}

export default App
