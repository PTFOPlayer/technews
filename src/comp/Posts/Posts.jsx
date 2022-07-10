import React from 'react'
import "./posts.css"
import  Post from "../post/Post"
import {UserAgentProvider, UserAgent} from '@quentin-sommer/react-useragent'

function Posts({posts}) {
  function getScreenWidth() {
    return window.innerWidth
  }

  return (
    <UserAgentProvider ua={window.navigator.userAgent}>
      <UserAgent computer>
        <div className="posts">
          {posts.map(post => (
            <Post key={post.id} post={post} />
            ))}
        </div>
      </UserAgent>
      <UserAgent mobile>
        <div className="posts-mobile" style={{"maxWidth": getScreenWidth()}}>
          {posts.map(post => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </UserAgent>
    </UserAgentProvider>
  )
}

export default Posts