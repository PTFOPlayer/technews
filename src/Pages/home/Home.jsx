import React from 'react'
import {BrowserView, MobileView} from 'react-device-detect';
import "./home.css"
import Header from '../../comp/Header/Header'
import Posts from '../../comp/Posts/Posts'
import Sidebar from '../../comp/Sidebar/Sidebar'


function Home() {

  return (
    <>
      <BrowserView>
        <Header />
        <div className="home">
            <Sidebar />
            <Posts />
        </div>
      </BrowserView>

      <MobileView>
        <Header />
        <div className="home">
            <Posts />
        </div>
        <Sidebar />
      </MobileView>
    </>
  )
}

export default Home