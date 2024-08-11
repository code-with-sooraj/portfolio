import { useState } from 'react'
import './App.css'
import Blog from './components/Blog'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Blog/>
    </>
  )
}

export default App
