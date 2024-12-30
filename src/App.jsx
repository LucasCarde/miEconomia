import 'react'
import './App.css'
import Footer from './components/Footer/Footer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './components/HomePage/HomePage'
import UltimosMovimientos from './components/UltimosMovimientos/UltimosMovimientos'
import AgregarMovimiento from './components/AgregarMovimiento/AgregarMovimiento'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ultimosMovimientos" element={<UltimosMovimientos/>} />
        <Route path="/agregarMovimiento" element={<AgregarMovimiento/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
