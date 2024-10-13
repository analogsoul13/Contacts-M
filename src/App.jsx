import React from 'react'
import './App.css'
import Landing from './components/Landing'
import Home from './pages/Home'
import { Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import AddContact from './components/AddContact'

function App() {

  return (
    <>
      <Navbar />
      <Routes >
        <Route path={'/'} element={<Home />} />
        <Route path={'/landing'} element={<Landing />} />
        <Route path={'/addcontact'} element={<AddContact />} />
      </Routes>
    </>
  )
}

export default App
