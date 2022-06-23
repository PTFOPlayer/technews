import React from 'react'
import './about.css' 
function About() {
  return (
    <>
        <div className="about">
            <div className="about-single">
                <span className="about-title">Ogółem o nas</span>
                <p className="about-paragraph">
                    Jesteśmy grópą osób interesujących się nowinkami w świecie technologii. Stwozryliśmy ten blog aby dzielić się z ludźmi newsami 
                    i przeciekami o których my sami usłyszeliśmy lub/i które znaleźliśmy.
                </p>
            </div>
            <div className="about-single">
                <span className="about-title">O piszących</span>
                <p className="about-paragraph">
                    Patryk "Whisky/PTFOPlayer" to główny piszący oraz twórca 'Technews'.
                </p>
            </div>
            <div className="about-single">
                <span className="about-title">O osobie odpowiedzialnej za kanał na telegramie</span>
                <p className="about-paragraph">
                    Michał "Wloseczeq" odpowiada za nasz kanał na Telegramie, co prawda jest on tylko i wyłącznie moderatorem lecz bez jego pomocy 'Technews' nie był by tak rozwinięty
                </p>
            </div>
            <div className="about-single">
                <span className="about-title">O tym jak utrzymujemy gramatyke na poziomie</span>
                <p className="about-paragraph">
                    Martyna'Martirza' może i nie zainteresowana technologią i nowinkami w tej dziedzinie ale pomaga popzez sprawdzanie ortografii, gramatyki oraz interpunkcji w naszych postach.
                </p>
            </div>
        </div>
    </>
  )
}

export default About;