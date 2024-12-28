import React from 'react'
import './balance.css'
import { IoEyeOutline } from "react-icons/io5";

const Balance = () => {
  return (
    <>
    <div className="balance-card">
        <div className="cardTitle">Balance</div>
        <div className="amount">$ 576.034,15</div>
        <IoEyeOutline className="icon"></IoEyeOutline>
    </div>
    </>

  )
}

export default Balance