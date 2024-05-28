import React from 'react'
import './club.css'
import glob from "../../globalCss/glob.module.css"
const Club = ({designer, showPrice}) => {
  return (
    <div id='club'> 
        <h1 style={{color: "red", borderBottom: "2px solid pink"}}>My favourite football club is not {designer ? designer:"Manchester United"}</h1>
        <button className={glob.button} onClick={showPrice}>Show Price</button>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam id doloribus tempora.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam id doloribus tempora.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam id doloribus tempora.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam id doloribus tempora.</p>
    </div>
  )
}

export default Club