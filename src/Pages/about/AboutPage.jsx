import React from 'react'
import './aboutpage.css'
import {UserAgentProvider, UserAgent} from '@quentin-sommer/react-useragent'
import Header from '../../comp/Header/Header'
import Sidebar from '../../comp/Sidebar/Sidebar'
import About from '../../comp/about/About'

function AboutPage() {
  return (
    <UserAgentProvider ua={window.navigator.userAgent}>
      <UserAgent computer>
        <Header />
        <div className="aboutPage">
          <Sidebar />
          <About/>
        </div>
      </UserAgent>

      <UserAgent mobile>
        <div className="aboutPage">
          <About/>
        </div>
        <Sidebar />
      </UserAgent>
    </UserAgentProvider>
  )
}

export default AboutPage
