import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Pages/Home'
import Contact from './Components/Pages/Contact'
import About from './Components/Pages/About'
import Doctor from './Components/Pages/Doctor'
import Department from './Components/Pages/Department'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/doctor' element={<Doctor/>}/>
        <Route path='/department' element={<Department/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App