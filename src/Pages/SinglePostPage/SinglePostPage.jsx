import React from 'react'
import './singlepostpage.css'
import Sidebar from '../../comp/Sidebar/Sidebar'
import SinglePost from '../../comp/SinglePost/SinglePost'

function SinglePostPage() {
  return (
    <div className='SinglePostPage'>
      <Sidebar />  
      <SinglePost />
          
    </div>
  )
}

export default SinglePostPage