import React from 'react'
import "./Main.css";
import Navbar from '../Navbar/Navbar';
import LandSc from '../LandSc/LandSc';
import ElbumScreen from '../ElbumScreen/ElbumScreen';
import { Route,Routes } from 'react-router-dom';
function Main() {
  return (
    <div className='main'>
     <Navbar/>
    <Routes>
        <Route path='/' element={<LandSc/>}  />
        <Route path='elbum' element={<ElbumScreen/>}  />
    </Routes>
    </div>
  )
}

export default Main
