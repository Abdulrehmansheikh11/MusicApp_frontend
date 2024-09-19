import React from 'react'
import "./Sidebar.css";
import hi from "../../assets/home.png"
import si from "../../assets/search.png"
import st from "../../assets/stack.png"
import arrow from "../../assets/arrow.png"
import pulse from "../../assets/plus.png"

function SideBar() {
    return (
        <div className='sidenav'>
            <div className='main-div2'>
                <div className='div2'>
                    <img src={hi} />
                    <p>Home</p>
                </div>
                <div className='div2'>
                    <img src={si} />
                    <p>Serach</p>
                </div>
            </div>

            <div className='divWWE'>
            <div className='main-div21'>
                <div className='div21'>
                    <img src={st} />
                </div>
                <div className='div21'>
                    <img src={arrow} />
                    <img src={pulse} />
                </div>
            </div>

            <div className='banner'>
           <h1>this is owsome for us </h1>
           <p>this is the playlist for us</p>
            <button>Create playlist</button>
            </div>
            
            <div className='banner'>
           <h1> this is great for us</h1>
           <p>this is the playlis for us in it</p>
           <button>Browse playlist </button>
            </div>
            </div>
            
        </div>



    )
}

export default SideBar
