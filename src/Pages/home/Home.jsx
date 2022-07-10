import React, {useState, useEffect} from 'react'
import "./home.css"
import Header from '../../comp/Header/Header'
import Posts from '../../comp/Posts/Posts'
import Sidebar from '../../comp/Sidebar/Sidebar'
import Data from '../../Assets/data'
import {UserAgentProvider, UserAgent} from '@quentin-sommer/react-useragent'

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(Data);
  }, [])

  return (
    <UserAgentProvider ua={window.navigator.userAgent}>
      <UserAgent computer>
        <Header />
        <div className="home">
            <Sidebar />
            <Posts posts={posts} />
        </div>
      </UserAgent>
      
      <UserAgent mobile>
        <Header />
        <div className="home">
            <Posts posts={posts}/>
        </div>
        <Sidebar />
      </UserAgent>
    </UserAgentProvider>
  )
}

export default Home