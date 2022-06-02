import React from 'react'
import "./post.css"
function Post() {
  return (
    <div className="post">
        <img className="post-image"
            src={require("./pobrane.png")}
            alt=""
        />
        <div className="post-info">
            <div className="post-cats">
                <span className="post-cat">Leak</span>
                <span className="post-cat">News</span>
            </div>
            <a className="post-title" href="https://ptfoplayer.github.io/w3/#/post/1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </a>
            <hr />
            <span className="post-date">
                January 1, 2020
            </span>
        </div>
        <p className="post-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, quidem.Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, quidem.Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, quidem.Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, quidem.            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, quidem.Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, quidem.Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, quidem.Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, quidem.            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, quidem.Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, quidem.Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, quidem.Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, quidem.            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, quidem.Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, quidem.Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, quidem.Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, quidem.
        </p>
    </div>
  )
}

export default Post