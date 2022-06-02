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
                        <i className="topIcon fa-brands fa-telegram"></i>
                    </div>
                    <div className="top-center">
                        <ul className="top-list">
                            <li className="top-list-item"><a href ='/home' className="inherit">Główna</a></li>
                            <li className="top-list-item">O nas</li>
                            <li className="top-list-item">Kontakt</li>
                        </ul>
                    </div>
                    <div className="top-right">
                    </div>
                </div>
            </BrowserView>
            <MobileView>
                <div className="top" style={{"display" : "block", "height" : 80}}>

                    <div className="top-center" style={{"margin-top" : 10}}>
                        <ul className="top-list">
                            <li className="top-list-item"><a href ='/home' className="inherit">Główna</a></li>
                            <li className="top-list-item">O nas</li>
                            <li className="top-list-item">Kontakt</li>
                        </ul>
                    </div>                    
                    <div className="top-left">
                        <i className="topIcon fa-brands fa-telegram"></i>
                    </div>
                </div>
            </MobileView>
        </>
    );
}

export default Topbar;