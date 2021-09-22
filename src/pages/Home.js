import React, { useState, useEffect } from 'react';
import '../styles/landing.css'
import orb from '../assets/TAFKHAN_ORB.png'
import mouse from '../componenets/mouse'

export default function Home(){
    useEffect(() => {
        mouse();
    
    });
    return (
        <div id ='landingpage'class = 'page'>
            <img src={orb}/>
            <h1 id='tafkhan'>
                TAFKHAN
            </h1>
            <h1 id='developer'>
                DEVELOPER
            </h1>
            <h1 id='designer'>
                DESIGNER
            </h1>
            <h1 id='programmer'>
                PROGRAMMER
            </h1>
        </div>
    )
}
