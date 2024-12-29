import React from 'react'
import './Footer.css'
import { FaHouse } from "react-icons/fa6";
import { FaPlusCircle } from "react-icons/fa";
import { MdHistory } from "react-icons/md";


const Footer = () => {
  return (
    <div className='footer'>
    <FaHouse className='casita'/> 
    <FaPlusCircle className='agregarMovimiento'/>
    <MdHistory className='ultimosMovimientos'/>
    </div>
  )
}

export default Footer