import { BrowserRouter, Routes, Route } from "react-router-dom"

import "./App.css"

import Home from "./pages/Home"
import Details from "./pages/Details"
import NavBar from "./components/NavBar"


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:cityName" element={<Details />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
