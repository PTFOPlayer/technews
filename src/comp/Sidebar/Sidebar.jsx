import React from 'react'
import "./sidebar.css"

function Sidebar() {
  return (
        <div className="sidebar">
            <div className="sidebar-item">
                <span className="sidebar-title">O TechNews</span>
                <p className="sidebar-text">
                    TechNews to blog o nowinkach technologicznych i przeciekach. Skupiamy się na pisaniu o tematach z branży PC
                    które są w zasięgu ręki każdego entuzjasty komputerowego, oraz staramy się przybliżyć tematy 
                    które są bardziej odległe międziy innymi, świat SBC i innych minikomputerów, świat serwerów i świat 
                    wyspecjalizowanych stacji komputerowych oraz super komputerów.
                </p>
            </div>
            <div className="sidebar-item">
                <span className="sidebar-title">Social media</span>
                <div className="sidebar-social">
                    <a href="https://t.me/+NjkWUOdpxWY3ODU8"><i className="sidebarIcon fa-brands fa-telegram"></i></a>
                    <a href="https://github.com/PTFOPlayer/technews"><i className="sidebarIcon fab fa-github"></i></a>
                </div>
            </div>
            <div className="sidebar-item">
                <span className="sidebar-title">Lista twórców i osób pomagających budować TechNews</span>
                <ul className="sidebar-list" style={{"marginLeft": 10}}>
                    <li>Twórca: Patryk "Whisky/PTFOPlayer"</li>
                    <li>Piszący: Patryk "Whisky/PTFOPlayer"</li>
                    <li style={{"marginTop": 15}}>Telegram: Michał "Wloseczeq"</li>
                </ul>
            </div>
        </div>
  )
}

export default Sidebar