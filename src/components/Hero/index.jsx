import React from "react"
import bgHero from "../../assets/img/bgHero.jpg"
import profilePicture from "../../assets/img/me.jpg"
import whatsIcon from "../../assets/img/whatsapp.svg"
import telIcon from "../../assets/img/phone.svg"
import emailIcon from "../../assets/img/email.svg"
import "./style.css"

const Hero = () =>{
    return(
        <section>
            <div className="hero">
                <div className="hero-bg" style={{backgroundImage:`url(${bgHero})`}}/>
                <img className="profile-picture" src={profilePicture} alt="foto do usuário" />
                <h1 className="user-name">Rony Nogueira da Silva</h1>
                <h2 className="user-description">Front-end Developer</h2>

                <div className="contact-options">
                    <a href="https://wa.me/15998414182">
                        <img src={whatsIcon} alt="whatsapp-icon" />
                        <span>Whatsapp</span>
                    </a>
                    <a href="tel:15998414182">
                        <img src={telIcon} alt="whatsapp-icon" />
                        <span>Phone</span>
                    </a>
                    <a href="mailTo:ronyrnds@gmail.com">
                        <img src={emailIcon} alt="whatsapp-icon" />
                        <span>Email</span>
                    </a>
                </div>
            </div>
        </section>

      
    )
}

export default Hero;