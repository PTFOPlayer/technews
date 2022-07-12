import React from 'react'
import './contactpage.css'
import Contact from '../../comp/contact/Contact'
import Sidebar from '../../comp/Sidebar/Sidebar'
import Header from '../../comp/Header/Header'
import {UserAgentProvider, UserAgent} from '@quentin-sommer/react-useragent'

function ContactPage() {
  return (
    <div> 
      <UserAgentProvider ua={window.navigator.userAgent}>
        <UserAgent computer>
          <Header/>
          <div className="contactPage">
            <Sidebar />
            <Contact />
          </div>
        </UserAgent>
      </UserAgentProvider>
      <UserAgentProvider ua={window.navigator.userAgent}>
        <UserAgent mobile>
          <div className="contactPage">
            <Contact />
          </div>
          <Sidebar />
        </UserAgent>
      </UserAgentProvider>
    </div>
  )
}

export default ContactPage