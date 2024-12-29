import 'react'
import './App.css'
import Balance from './components/Balance/Balance'
import Pagetitle from './components/PageTitle/PageTitle'
import CategoriaContainer from './components/CategoriaContainer/CategoriaContainer'
import './components/CategoriaContainer/categoriaContainer.css'

function App() {

  return (
    <>
    <Pagetitle />
    <Balance />
    <p className="sectionTitle">Gastos</p>
    <CategoriaContainer />
    </>
  )
}

export default App
