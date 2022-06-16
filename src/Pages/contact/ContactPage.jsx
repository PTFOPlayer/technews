import React from 'react'
import './contactpage.css'
import Contact from '../../comp/contact/Contact'
import Sidebar from '../../comp/Sidebar/Sidebar'
import Header from '../../comp/Header/Header'
import { BrowserView, MobileView } from 'react-device-detect'

function ContactPage() {
  return (
    <>
      <BrowserView>
        <Header/>
        <div className="contactPage">
          <Sidebar />
          <Contact />
        </div>
      </BrowserView>
      <MobileView>
        <div className="contactPage">
          <Contact />
        </div>
        <Sidebar />
      </MobileView>
    </>
  )
}

export default ContactPage