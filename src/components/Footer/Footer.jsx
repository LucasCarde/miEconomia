import React from 'react'
import './Footer.css'
import { FaHouse } from "react-icons/fa6";
import { FaPlusCircle } from "react-icons/fa";
import { MdHistory } from "react-icons/md";
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <>
    <FaPlusCircle className='agregarMovimiento'/>
    <div className='footer'>
    <Link to='/' className='links' style={{'textDecoration': 'none', color: 'inherit'}}>
    <FaHouse className='casita'/> 
    </Link>
    <Link to='/ultimosMovimientos' className='links' style={{'textDecoration': 'none', color: 'inherit'}}>
    <MdHistory className='ultimosMovimientos'/>
    </Link>
    </div>
    </>
  )
}

export default Footer