import { height } from '@mui/system';
import React from 'react';
import img from './images/d.jpg';

const White = () => {
  return (
    <>
    <div align="center" style={{paddingTop:'100px'}}><img src={img} alt='logo' width='600px' height='300px'/></div>
    <div style={{backgroundColor:'white', height:'150px'}}>
        <br/>
        <h3 align= "center">Our team will connect you shortly</h3>
        </div>
    </>
  );
}

export default White;