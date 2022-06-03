import React from "react";
import "./topbar.css";
import {BrowserView, MobileView} from 'react-device-detect';

function Topbar()
{
    return (
        <>
            <BrowserView>
                <div className="top">
                    <div className="top-left">
                        <a href="https://t.me/+NjkWUOdpxWY3ODU8">
                            <i className="topIcon fa-brands fa-telegram"></i>
                        </a>
                    </div>
                    <div className="top-center">
                        <ul className="top-list">
                            <li className="top-list-item"><a href ='https://ptfoplayer.github.io/w3/#/home' className="inherit">Główna</a></li>
                            <li className="top-list-item">O nas</li>
                            <li className="top-list-item">
                                <a href ='https://ptfoplayer.github.io/w3/#/contact' className="inherit">Kontakt</a>
                            </li>
                        </ul>
                    </div>
                    <div className="top-right">
                    </div>
                </div>
            </BrowserView>
            <MobileView>
                <div className="top" style={{"display" : "block", "height" : "80", "padding" : "5"}}>

                    <div className="top-center" style={{"margin-top" : 10}}>
                        <ul className="top-list">
                            <li className="top-list-item">
                                <a href ='https://ptfoplayer.github.io/w3/#/home' className="inherit">Główna</a>
                            </li>
                            <li className="top-list-item">O nas</li>
                            <li className="top-list-item">
                                <a href ='https://ptfoplayer.github.io/w3/#/contact' className="inherit">Kontakt</a>
                            </li>
                        </ul>
                    </div>                    
                    <div className="top-left" style={{"margin-top" : 10}}>
                        <a href="https://t.me/+NjkWUOdpxWY3ODU8">
                            <i className="topIcon fa-brands fa-telegram"></i>
                        </a>
                    </div>
                </div>
            </MobileView>
        </>
    );
}

export default Topbar;