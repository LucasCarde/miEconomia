import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './TableHeader.css'

const TableHeader = () => {
  return (
    <Container className='containerHeader'>
      <Row>
        <Col className='colIzq'>Fecha</Col>
        <Col className='colMed'>Monto</Col>
        <Col className='colDer'>Descripcion</Col>
      </Row>
    </Container>
  )
}

export default TableHeader
