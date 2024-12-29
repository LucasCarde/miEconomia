import React from 'react'
import './Footer.css'
import { FaHouse } from "react-icons/fa6";
import { FaPlusCircle } from "react-icons/fa";
import { MdHistory } from "react-icons/md";


const Footer = () => {
  return (
    <>
    <FaPlusCircle className='agregarMovimiento'/>
    <div className='footer'>
    <FaHouse className='casita'/> 
    <MdHistory className='ultimosMovimientos'/>
    </div>
    </>
  )
}

export default Footer