import React from 'react'
import "./posts.css"
import  Post from "../post/Post"
import { BrowserView, MobileView } from 'react-device-detect'
function Posts() {
  function getScreenWidth() {
    return window.innerWidth
  }
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
        <div className="posts-mobile" style={{"maxWidth": getScreenWidth()}}>
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