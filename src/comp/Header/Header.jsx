import React from 'react'
import './header.css'
import {UserAgentProvider, UserAgent} from '@quentin-sommer/react-useragent'

function Header() {
  return (
    <UserAgentProvider ua={window.navigator.userAgent}>
      <UserAgent computer>
        <div className="header">
            <div className="header-tiles">
                <span className="header-title">TechNews</span>
            </div>
        </div>
      </UserAgent>
      <UserAgent mobile>
        <div className="header">
            <div className="header-tiles">
                <span className="header-title" style={{"font-size": 50}}>TechNews</span>
            </div>
        </div>
      </UserAgent>
    </UserAgentProvider>
  )
}

export default Header