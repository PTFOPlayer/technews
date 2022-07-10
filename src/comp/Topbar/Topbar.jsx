import React from "react";
import "./topbar.css";
import {UserAgentProvider, UserAgent} from '@quentin-sommer/react-useragent'

function Topbar()
{
    return (
        <UserAgentProvider ua={window.navigator.userAgent}>
            <UserAgent computer>
                <div className="top">
                    <div className="top-left">
                        <a href="https://t.me/+NjkWUOdpxWY3ODU8"><i className="topIcon fa-brands fa-telegram"></i></a>
                        <a href="https://github.com/PTFOPlayer/technews"><i className="topIcon fab fa-github"></i></a>
                    </div>
                    <div className="top-center">
                        <ul className="top-list">
                            <li className="top-list-item"><a href ='https://ptfoplayer.github.io/technews/#/' className="inherit">Główna</a></li>
                            <li className="top-list-item"><a href ='https://ptfoplayer.github.io/technews/#/about' className="inherit">O nas</a></li>
                            <li className="top-list-item"><a href ='https://ptfoplayer.github.io/technews/#/contact' className="inherit">Kontakt</a></li>
                        </ul>
                    </div>
                    <div className="top-right" />
                </div>
            </UserAgent>
            <UserAgent mobile>
                <div className="top" style={{"display" : "block", "height" : "fit-content", "padding" : 10}}>
                    <div className="top-center">
                        <ul className="top-list">
                            <li className="top-list-item"><a href ='https://ptfoplayer.github.io/technews/#/' className="inherit">Główna</a></li>
                            <li className="top-list-item"><a href ='https://ptfoplayer.github.io/technews/#/about' className="inherit">O nas</a></li>
                            <li className="top-list-item"><a href ='https://ptfoplayer.github.io/technews/#/contact' className="inherit">Kontakt</a></li>
                        </ul>
                    </div>                    
                    <div className="top-left" style={{"margin-top" : 10}}>
                        <a href="https://t.me/+NjkWUOdpxWY3ODU8"><i className="topIcon fa-brands fa-telegram"></i></a>
                        <a href="https://github.com/PTFOPlayer/technews"><i className="topIcon fab fa-github"></i></a>
                    </div>
                </div>
            </UserAgent>
        </UserAgentProvider>
    );
}

export default Topbar;