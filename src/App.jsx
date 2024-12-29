import 'react'
import './App.css'
import Footer from './components/Footer/Footer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './components/HomePage/HomePage'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/balance" element={''} />
        <Route path="/categorias" element={''} />
        <Route path="/footer" element={''} /> 
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
