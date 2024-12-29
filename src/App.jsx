import 'react'
import './App.css'
import Balance from './components/Balance/Balance'
import Pagetitle from './components/PageTitle/PageTitle'
import CategoriaContainer from './components/CategoriaContainer/CategoriaContainer'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
    <Pagetitle />
    <Balance />
    <CategoriaContainer />
    <Footer />
    </>
  )
}

export default App
