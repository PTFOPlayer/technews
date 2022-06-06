import React from 'react'
import { BrowserView, MobileView } from 'react-device-detect'
import "./post.css"
function Post({post}) {
  const ref = "https://ptfoplayer.github.io/w3/#/post/" + post.id;
  
  return (
    <>
        <BrowserView>
            <div className="post">
                <a href={ref}>
                {post.img ? <img className="post-image"
                    src={require(`../../Assets/img/${post.img}`)}
                    alt=""/>: null} </a>
                <div className="post-info">
                    <a style = {{"textDecoration": "none"}}className="post-title" href={ref} >
                        <spam style = {{"textDecoration": "none"}} className = "post-title">{post.title}</spam>
                    </a>
                    <span className="post-date">{post.date}</span>
                    <div className="post-cats">
                        {post.cats.map(cat => (
                            <span key={cat} className="post-cat">{cat}</span>
                        ))}
                    </div>
                </div>
            </div>
        </BrowserView>
        <MobileView>
            <div className="post-mobile">
            <a href={ref}>
                {post.img ? <img className="post-image"
                    src={require(`../../Assets/img/${post.img}`)}
                    alt=""/>: null} </a>
                <div className="post-info">
                    <a style = {{"textDecoration": "none"}}className="post-title" href={ref} >
                        <spam style = {{"textDecoration": "none"}} className = "post-title">{post.title}</spam>
                    </a>
                    <span className="post-date">{post.date}</span>
                    <div className="post-cats">
                        {post.cats.map(cat => (
                            <span key={cat} className="post-cat">{cat}</span>
                        ))}
                    </div>
                </div>
            </div>
        </MobileView>
    </>
  )
}

export default Post