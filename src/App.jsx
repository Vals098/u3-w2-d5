import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {

  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<h1>Home</h1>}/>
    <Route path='/details' element={<h1>Details</h1>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App
