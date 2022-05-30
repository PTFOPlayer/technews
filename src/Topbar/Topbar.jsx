import React from "react";
import "./topbar.css";

function Topbar()
{
    return (
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
    );
}

export default Topbar;