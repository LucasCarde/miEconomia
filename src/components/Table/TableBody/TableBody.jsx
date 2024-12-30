import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './TableBody.css'

const TableBody = () => {
  return (
    <Container className='containerBody'>
      <Row>
        <Col className='colIzqBody'>Fecha</Col>
        <Col className='colMedBody'>Monto</Col>
        <Col className='colDerBody'>Descripcion</Col>
      </Row>
    </Container>
  )
}

export default TableBody
