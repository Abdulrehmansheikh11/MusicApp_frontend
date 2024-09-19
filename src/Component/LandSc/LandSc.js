import React from 'react'
import { elbumsData } from '../Imag';
import { songsData } from '../Imag';
import { useNavigate } from 'react-router-dom';
function LandSc() {
    const navigate=useNavigate();
    return (
        <>
            <div className='cat'>

                <button className='cat1' id='active'>ALL</button>
                <button className='cat1'>Music</button>
                <button className='cat1'>Albums</button>
            </div>
            <div>
                <p className='fet'>Featured Carts</p>
                <div className='elbum-list'>
                    {
                        elbumsData.map((elbum) => (
                            <div className='album' onClick={()=>navigate("/elbum",{state:elbum}) }>
                                <img src={elbum.image} />
                                <h2>{elbum.name}</h2>
                                <p>{elbum.desc}</p>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div>
                <p className='fet'>Trending hits</p>
                <div className='elbum-list'>
                    {
                        songsData.map((song) => (
                            <div className='album'>
                                <img src={song.image} />
                                <h2>{song.name}</h2>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default LandSc;