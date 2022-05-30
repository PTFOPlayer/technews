import React from 'react'
import {BrowserView, MobileView} from 'react-device-detect';
import "./home.css"
import Header from '../../Header/Header'
import Posts from '../../Posts/Posts'
import Sidebar from '../../Sidebar/Sidebar'


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
        <sidebar />
      </MobileView>
    </>
  )
}

export default Home