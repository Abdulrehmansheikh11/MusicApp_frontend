import React from 'react'
import "./ES.css";
import img from "../../assets/spotify_logo.png"
import img1 from "../../assets/clock_icon.png"
import { useLocation } from 'react-router-dom';
import { elbumsData, songsData } from '../Imag';
function ElbumScreen() {
    const { state } = useLocation()
    console.log("data", state)
    return (
        <div className='e1'>
            <div className='e2'>
                <img src={state.image} />
                <div>
                    <h2>Playlist</h2>
                    <h1>{state.name}</h1>
                    <p>{state.desc}</p>
                    <p className='boh'><img src={img} />  Spotify : 50 Songs , likes 34k</p>
                </div>
            </div>
            <br/>
            <div className='e3' id="sp">
                <p># Title</p>
                <p>Elbum</p>
                <p>Date Added</p>
                <img src={img1} className='top'/>
            </div>
          <hr className='hi'/>
            <div className='e5'>
                {songsData.map((song, index) => (
                    <div className='e3' id="sps" >
                        <div className='e4'>
                            <p style={{fontWeight:"bolder"}}>{index + 1}</p>
                            <img src={song.image} />
                            <p >{song.name}</p>
                          
                        </div>
                        <p>Title</p>
                        <p>{state.name}</p>
                        <p>5 days Ago</p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default ElbumScreen
