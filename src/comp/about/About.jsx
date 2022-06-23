import React, {useState, useEffect}from 'react'
import './about.css'
import about_data from './about_data'
function About() {
    const [segments, setSegment] = useState([])
    useEffect(() => {
        setSegment(about_data);
    }, [])
    
    return (
    <div className="about">
        {   segments ? segments.map(segment => 
            {
                return(
                    <div className="about-single">
                        <span className="about-title">{segment.title}</span>
                        <p className="about-paragraph">{segment.paragraph}</p>
                    </div>
                )
            }) : null
        }
    </div>
    )
}

export default About;