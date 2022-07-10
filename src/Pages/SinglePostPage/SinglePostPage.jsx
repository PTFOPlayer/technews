import React from 'react'
import './singlepostpage.css'
import Sidebar from '../../comp/Sidebar/Sidebar'
import SinglePost from '../../comp/SinglePost/SinglePost'
import {UserAgentProvider, UserAgent} from '@quentin-sommer/react-useragent'

function SinglePostPage() {

  return (
    <UserAgentProvider ua={window.navigator.userAgent}>
      <UserAgent computer>
        <div className='SinglePostPage'>
          <Sidebar />  
          <SinglePost/>
        </div>
      </UserAgent>
      <UserAgent mobile>
        <div className='SinglePostPage'>  
          <SinglePost/>
        </div>
      </UserAgent >
    </UserAgentProvider>
  )
}

export default SinglePostPage