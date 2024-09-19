import React from 'react'
import "./Player.css"
import { songsData } from '../Imag'
import img1 from "../../assets/shuffle.png";
import img2 from "../../assets/prev.png";
import img3 from "../../assets/play.png";
import img4 from "../../assets/next.png";


import img5 from "../../assets/plays.png";
import img6 from "../../assets/mic.png";
import img7 from "../../assets/queue.png";
import img8 from "../../assets/speaker.png";
import img9 from "../../assets/volume.png";
import img10 from "../../assets/mini-player.png";
import img11 from "../../assets/zoom.png";
function Player() {
    return (
        <div className='p1'>
            <div className='p2'>
                <img src={songsData[0].image} />
                <div>
                    <p>{songsData[0].name}</p>
                    <p>{songsData[0].desc}</p>
                </div>
            </div>

            <div className='p3'>
                <div className='p4'>
                    <img src={img1} />
                    <img src={img2} />
                    <img src={img3} />
                    <img src={img4} />
                </div>

                <div className='vard'>
                    <p>1.06</p>
                    <div className='vard2'>
                        <hr />
                    </div>
                    <p>3.00</p>
                </div>
            </div>

            <div className='p45'>
                <img src={img5} />
                <img src={img6} />
                <img src={img7} />
                <img src={img8} />
                <img src={img9} />

                <div className='p5'>
                <hr/>
                </div>

                <img src={img10} />
                <img src={img11} />

            </div>

        </div>
    )
}

export default Player
