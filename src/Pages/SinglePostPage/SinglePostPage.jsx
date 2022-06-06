import React from 'react'
import './singlepostpage.css'
import Sidebar from '../../comp/Sidebar/Sidebar'
import SinglePost from '../../comp/SinglePost/SinglePost'
import { BrowserView, MobileView } from 'react-device-detect'

function SinglePostPage() {

  return (
    <>
      <BrowserView>
        <div className='SinglePostPage'>
          <Sidebar />  
          <SinglePost/>
        </div>
      </BrowserView>
      <MobileView>
        <div className='SinglePostPage'>  
          <SinglePost/>
        </div>
      </MobileView>
    </>
  )
}

export default SinglePostPage