import React from 'react';
import'../styles/nav.css';
import logo from '../assets/Logo.png'

export default function Nav() {
    return(
        <div id='navigation'>
            <img src={logo} id='logo'/>
            <button id='menu'>Placeholder</button>
        </div>
    )
}