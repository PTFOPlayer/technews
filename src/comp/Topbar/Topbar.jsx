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
                        <a href="https://t.me/+NjkWUOdpxWY3ODU8"><i className="topIcon fa-brands fa-telegram"></i></a>
                        <a href="https://github.com/PTFOPlayer/technews"><i className="topIcon fab fa-github"></i></a>
                    </div>
                    <div className="top-center">
                        <ul className="top-list">
                            <li className="top-list-item"><a href ='https://ptfoplayer.github.io/technews/#/' className="inherit">Główna</a></li>
                            <li className="top-list-item">O nas</li>
                            <li className="top-list-item"><a href ='https://ptfoplayer.github.io/technews/#/contact' className="inherit">Kontakt</a></li>
                        </ul>
                    </div>
                    <div className="top-right">
                        <ul className="top-list">
                        </ul>
                    </div>
                </div>
            </BrowserView>
            <MobileView>
                <div className="top" style={{"display" : "block", "height" : "fit-content", "padding" : 10}}>
                    <div className="top-center">
                        <ul className="top-list">
                            <li className="top-list-item"><a href ='https://ptfoplayer.github.io/technews/#/' className="inherit">Główna</a></li>
                            <li className="top-list-item">O nas</li>
                            <li className="top-list-item"><a href ='https://ptfoplayer.github.io/technews/#/contact' className="inherit">Kontakt</a></li>
                        </ul>
                    </div>                    
                    <div className="top-left" style={{"margin-top" : 10}}>
                        <a href="https://t.me/+NjkWUOdpxWY3ODU8"><i className="topIcon fa-brands fa-telegram"></i></a>
                        <a href="https://github.com/PTFOPlayer/technews"><i className="topIcon fab fa-github"></i></a>
                    </div>
                </div>
            </MobileView>
        </>
    );
}

export default Topbar;