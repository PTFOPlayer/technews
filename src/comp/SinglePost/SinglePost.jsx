import React, {useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import './singlepost.css'
import Data from '../../Assets/data'

function SinglePost() {
    
    const location = useLocation();
    const postId = location.pathname.split('/')[2];
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
      setPosts(Data);
    }, [])
    
    function findIndex() {
        for (let i = 0; i < posts.length; i++) {
            if ( // eslint-disable-next-line
                posts[i].id == postId) {
                return i;
            }
        }
        return 0;
    }
    const index = findIndex();
    
    const postsTitles = posts.map(post => {
        return post.title;
    })

    const postsAutors = posts.map(post => {
        return post.autor;
    })
    
    const postsDates = posts.map(post => {
        return post.date;
    })

    const postsImg = posts.map(post => {
        return post.img;
    })

    const postsParagraphs = posts.map(post => {
        return post.paragraphs.map(paragraph => {
            return paragraph;
        })
    })
    
    const title = postsTitles[index];
    const autor = postsAutors[index];
    const date = postsDates[index];
    const img = postsImg[index];
    const paragraphs = postsParagraphs[index];
    

    return (
        <div className='Single-Post'>
            <div className="Singe-Post-wrapper">
                {img ? <img src= {require(`../../Assets/img/${img}`)} 
                alt="" 
                className="Single-Post-img"
                /> : null}
                <h1 className="Single-Post-title" >{title}</h1>
                <div className="Single-Post-info">
                    <span>Autor: <b>{autor}</b></span>
                    <span>Data: <b>{date}</b></span>
                </div>
                {paragraphs ? paragraphs.map((paragraph, index) => {
                    return (
                    <>
                        <h2 key= {index} className="Single-Post-paragraph">{paragraph.title}</h2>
                        <p key={index} className="Single-Post-paragraph">{paragraph.text}</p>    
                    </>
                    )
                }) : null}
            </div>
        </div>
    )
}

export default SinglePost