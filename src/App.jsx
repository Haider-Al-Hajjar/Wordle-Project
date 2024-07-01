import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from '../pages/Welcome';
import Game from '../pages/Game';
import Rules from '../pages/Rules'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/Game" element={<Game />} />
          <Route path="/Rules" element={<Rules />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
