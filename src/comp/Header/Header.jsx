import React from 'react'
import './header.css'
import {BrowserView, MobileView} from 'react-device-detect';

function Header() {
  return (
    <>
      <BrowserView>
        <div className="header">
            <div className="header-tiles">
                <span className="header-title">TechNews</span>
            </div>
        </div>
      </BrowserView>
      <MobileView>
        <div className="header">
            <div className="header-tiles">
                <span className="header-title" style={{"font-size": 50}}>TechNews</span>
            </div>
        </div>
      </MobileView>
    </>
  )
}

export default Header