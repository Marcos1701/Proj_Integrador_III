import React from "react"
import { Routes, Route } from "react-router-dom"
import { Home } from "./Components/pages/home"

function App() {
  //definindo rotas

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        
      </Routes>    
    </>
  )
}

export default App
