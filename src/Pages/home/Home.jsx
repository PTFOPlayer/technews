import React, {useState, useEffect} from 'react'
import {BrowserView, MobileView} from 'react-device-detect';
import "./home.css"
import Header from '../../comp/Header/Header'
import Posts from '../../comp/Posts/Posts'
import Sidebar from '../../comp/Sidebar/Sidebar'
import Data from '../../Assets/data'

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(Data);
  }, [])

  return (
    <>
      <BrowserView>
        <Header />
        <div className="home">
            <Sidebar />
            <Posts posts={posts} />
        </div>
      </BrowserView>

      <MobileView>
        <Header />
        <div className="home">
            <Posts posts={posts}/>
        </div>
        <Sidebar />
      </MobileView>
    </>
  )
}

export default Home