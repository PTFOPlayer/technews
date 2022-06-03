import React from 'react'
import "./posts.css"
import  Post from "../post/Post"
import { BrowserView, MobileView } from 'react-device-detect'
function Posts() {
  return (
    <>
      <BrowserView>
        <div className="posts">
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
      </BrowserView>
      <MobileView>
        <div className="posts-mobile">
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
      </MobileView>
    </>
  )
}

export default Posts