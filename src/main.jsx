import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter,Routes,Route, Link} from "react-router-dom"
import About from './components/about.jsx'
import Contact from './components/Contact.jsx'
import Services from './components/services.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <header>
        <nav className='flex gap-[1.5rem]'>
            <Link to="/about">About</Link>
            <Link to="/services">services</Link>
            <Link to="/contact">Contact</Link>
        </nav>
      </header>
    <Routes>
     
      <Route path='/' element={<App/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/services' element={<Services/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
