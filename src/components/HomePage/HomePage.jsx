import React from 'react'
import Balance from '../Balance/Balance'
import Pagetitle from '../PageTitle/PageTitle'
import CategoriaContainer from '../CategoriaContainer/CategoriaContainer'

const HomePage = () => {
  return (
    <>
        <Pagetitle message='miEconomia'/>
        <Balance />
        <CategoriaContainer />
    </>
  )
}

export default HomePage