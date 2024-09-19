import React from 'react'
import "./Navbar.css"
import left from "../../assets/left_arrow.png";
import right from "../../assets/right_arrow.png";
import { useNavigate } from 'react-router-dom';
function Navbar() {
    const navigate=useNavigate();
    return (
        <div className='nav'>
            <div className='nav1'>
                <img src={left} onClick={()=>navigate(-1)} />
                <img src={right} onClick={()=>navigate(1)} />
            </div>

            <div className='nav2'>
                <div style={{display:"flex",gap:"15px"}}>
                <button>Explore Premium</button>
                <button>install App</button>
                </div>
               <h1>R</h1>
            </div>
        </div>
    )
}

export default Navbar
