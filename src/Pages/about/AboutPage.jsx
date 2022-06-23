import React from 'react'
import './aboutpage.css'
import { BrowserView, MobileView } from 'react-device-detect'
import Header from '../../comp/Header/Header'
import Sidebar from '../../comp/Sidebar/Sidebar'
import About from '../../comp/about/About'
function AboutPage() {
  return (
    <>
      <BrowserView>
        <Header />
        <div className="aboutPage">
          <Sidebar />
          <About/>
        </div>
      </BrowserView>

      <MobileView>
        <div className="aboutPage">
          <About/>
        </div>
        <Sidebar />
      </MobileView>
    </>
  )
}

export default AboutPage
