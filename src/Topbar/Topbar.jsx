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
                        <i className="topIcon fa-brands fa-youtube"></i>
                        <i className="topIcon fa-brands fa-telegram"></i>
                        <i className="topIcon fa-brands fa-facebook"></i>
                    </div>
                    <div className="top-center">
                        <ul className="top-list">
                            <li className="top-list-item">HOME</li>
                            <li className="top-list-item">ABOUT</li>
                            <li className="top-list-item">CONTACT</li>
                        </ul>
                    </div>
                    <div className="top-right">
                        <i className="topIcon fa-solid fa-magnifying-glass"></i>
                    </div>
                </div>
            </BrowserView>
            <MobileView>
                <div className="top" style={{"display" : "block", "height" : 120}}>
                    <div className="top-left" style={{"margin-top" : 10}}>
                        <i className="topIcon fa-brands fa-youtube"></i>
                        <i className="topIcon fa-brands fa-telegram"></i>
                        <i className="topIcon fa-brands fa-facebook"></i>
                    </div>
                    <div className="top-center" style={{"margin-top" : 10}}>
                        <ul className="top-list">
                            <li className="top-list-item">HOME</li>
                            <li className="top-list-item">ABOUT</li>
                            <li className="top-list-item">CONTACT</li>
                        </ul>
                    </div>
                    <div className="top-right" style={{"margin-top" : 10}}>
                        <i className="topIcon fa-solid fa-magnifying-glass"></i>
                    </div>
                </div>
            </MobileView>
        </>
    );
}

export default Topbar;