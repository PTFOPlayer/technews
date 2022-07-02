import React from 'react'
import './contact.css'
function Contact() {
    return (
    <div className="contact">
        <div className="contact-single">
            <span className="contact-title">Ogólny kontakt z nami</span>
            <ul className="contact-list">
                <li className="contact-list-item"> Blog na telegramie:
                    <a href="https://t.me/+NjkWUOdpxWY3ODU8" className='contact-ref'>
                        <i className="contactIcon fa-brands fa-telegram"></i>
                    </a>
                </li>
                <li className="contact-list-item"> Email:
                    <div style={{"display" : "flex"}}>
                        <i className="contactIcon fa-solid fa-envelope"></i>
                        <span className="contact-email" style={{"marginTop" : 20}}>narazie nie ma</span>    
                    </div>
                </li>
            </ul>
        </div>
        <div className="contact-single">
            <span className="contact-title">Kontakt z twórcami</span>
            <ul className="contact-list">
                <li className="contact-list-item"> Twórca: Patryk "Whisky/PTFOPlayer"
                    <a href="https://t.me/+NjkWUOdpxWY3ODU8" className='contact-ref'>
                        <i className="contactIcon fa-brands fa-telegram"></i>
                    </a>
                </li>
                <li className="contact-list-item"> Piszący: Patryk "Whisky/PTFOPlayer"
                    <a href="https://t.me/+NjkWUOdpxWY3ODU8" className='contact-ref'>
                        <i className="contactIcon fa-brands fa-telegram"></i>
                    </a>
                </li>
            </ul>
        </div>
    </div>
    )
}

export default Contact
