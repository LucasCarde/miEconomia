import React from 'react'
import Balance from '../Balance/Balance'
import Pagetitle from '../PageTitle/PageTitle'
import Table from '../Table/Table'

const UltimosMovimientos = () => {
  return (
    <>
        <Pagetitle message='ultimosMovimientos'/>
        <Balance padding='0'/>
        <Table />
    </>
  )
}

export default UltimosMovimientos