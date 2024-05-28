import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router-dom'
import Form from './components/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <nav className='flex gap-[1.5rem]'>
      <Link to="/about">About</Link>
      <Link to="/services">services</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/about">About</Link>
    </nav>
    <Form></Form>
    </>
  )
}

export default App
