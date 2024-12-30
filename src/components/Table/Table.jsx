import React from 'react'
import TableHeader from './TableHeader/TableHeader'
import TableBody from './TableBody/TableBody'
import './Table.css'

const Table = () => {
  return (
    <div className="table">
        <TableHeader />
        <TableBody />
    </div>
  )
}

export default Table