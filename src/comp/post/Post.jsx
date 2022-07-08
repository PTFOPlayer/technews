import React from 'react'
import { BrowserView, MobileView } from 'react-device-detect'
import "./post.css"

function Post({post}) {
    const ref = "https://ptfoplayer.github.io/technews/#/post/" + post.id;

    const content = (check) => {

        let cN = String()
        if (check === "mobile") {
            cN = "post-mobile"
        } else if (check === "browser") {
            cN = "post"
        }

        return(
            <div className={cN}>
                <a href={ref}>
                {post.img ? <img className="post-image"
                    src={require(`../../Assets/img/${post.img}`)}
                    alt=""/>: null} </a>
                <div className="post-info">
                    <a style = {{"textDecoration": "none"}}className="post-title" href={ref} >
                        <p style = {{"textDecoration": "none"}} className = "post-title">{post.title}</p>
                    </a>
                    <span className="post-date">{post.date}</span>
                    <div className="post-cats">
                        {post.cats.map(cat => (
                            <span key={cat} className="post-cat">{cat}</span>
                        ))}
                    </div>
                </div>
            </div>
        )
    }

    return (
    <>
        <BrowserView>
            {content("browser")}
        </BrowserView>
        <MobileView>
            {content("mobile")}
        </MobileView>
    </>
    )
}

export default Post