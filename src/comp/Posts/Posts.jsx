import React from 'react'
import "./posts.css"
import  Post from "../post/Post"
import { BrowserView, MobileView } from 'react-device-detect'

function Posts({posts}) {
  function getScreenWidth() {
    return window.innerWidth
  }

  return (
    <>
      <BrowserView>
        <div className="posts">
          {posts.map(post => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </BrowserView>
      <MobileView>
        <div className="posts-mobile" style={{"maxWidth": getScreenWidth()}}>
          {posts.map(post => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </MobileView>
    </>
  )
}

export default Posts