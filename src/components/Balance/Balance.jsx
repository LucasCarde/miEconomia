import {useState} from 'react'
import './balance.css'
import {IoEyeOutline} from "react-icons/io5";

const Balance = ({padding}) => {
    const [show, setShow] = useState(true)
    const changeVisibility = () => {
        setShow(!show)
    }
    return (
        <> < div className = "balance-card" style={{'padding': `${padding}px 40px`}}> <div className="cardTitle">Balance</div>
            {
            show
                ? <div className="amount">$ 576.034,15</div>
                : <div className="amount">$ *********</div>
        } < IoEyeOutline className = "icon" onClick = {
            changeVisibility
        } > </IoEyeOutline>
</div>
</>

    )
}

export default Balance