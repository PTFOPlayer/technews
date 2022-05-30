import React from 'react'
import "./post.css"
function Post() {
  return (
    <div>
        <img className="post-image"
            src={require("./pobrane.png")}
            alt=""
        />
        <div className="post-info">
            <div className="post-cats">
                <span className="post-cat">Leak</span>
                <span className="post-cat">News</span>
            </div>
            <span className="post-title">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </span>
            <hr />
            <span className="post-date">
                January 1, 2020
            </span>
        </div>
    </div>
  )
}

export default Post