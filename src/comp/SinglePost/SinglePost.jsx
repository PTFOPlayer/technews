import React from 'react'
import './singlepost.css'

function SinglePost() {

    return (
        <div className='Single-Post'>
                <div className="Singe-Post-wrapper">
                    <img src= {require('./pobrane.png')} 
                    alt="" 
                    className="Single-Post-img"
                    />
                    <h1 className="Single-Post-title">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        <div className="Single-Post-edit">
                            <i className="Single-Post-icon fa fa-edit"></i>
                            <i className="Single-Post-icon fa fa-heart"></i>
                        </div>
                    </h1>
                    <div className="Single-Post-info">
                        <span>Autor: <b>Autor</b></span>
                        <span>Data: <b>Data</b></span>
                    </div>
                    <p className='Single-Post-desc'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>
        </div>
    )
}

export default SinglePost