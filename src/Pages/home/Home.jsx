import React from 'react'
import "./home.css"
import Header from '../../Header/Header'
import Posts from '../../Posts/Posts'
import Sidebar from '../../Sidebar/Sidebar'

function Home() {
  return (
    <>
      <Header />
      <div className="home">
          <Sidebar />
          <Posts />
      </div>
    </>
  )
}

export default Home