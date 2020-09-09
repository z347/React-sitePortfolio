import React from 'react';
import GlitchEffect from "../../components/glitch-effect/glitch-effect";
import Reference from "../../components/reference/reference";
import Mouse from "../../components/mouse/mouse";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMobileAlt, faEnvelope, faGlobeEurope} from "@fortawesome/free-solid-svg-icons";
import {faTelegramPlane} from "@fortawesome/free-brands-svg-icons";
import {
    phone,
    telegram,
    email,
    location,
    phone_link,
    email_link,
    telegram_link,
    googleMaps_link
} from "../../constants/personal-info";
import FeedbackForm from "../../components/feedback-form/feedback-form";
import './Contacts.scss';

function Contacts() {
    return (
        <div className="container">
            <header>
                <GlitchEffect glitchArticle={"Contacts"}/>
                <Reference activeLink={"contacts"}/>
                <Mouse/>
            </header>
            <main id="content" role="main">
                <div>
                    <address className="contacts">
                        <ul>
                            <li><FontAwesomeIcon icon={faMobileAlt} size="2x"/>Phone<br/>
                                <a href={phone_link}>{phone}</a>
                            </li>
                            <li><FontAwesomeIcon icon={faTelegramPlane} size="2x"/>Telegram<br/>
                                <a href={telegram_link} target="_blank" rel="noopener noreferrer">{telegram}</a>
                            </li>
                            <li><FontAwesomeIcon icon={faEnvelope} size="2x"/>E-mail<br/>
                                <a href={email_link}>{email}</a>
                            </li>
                            <li><FontAwesomeIcon icon={faGlobeEurope} size="2x"/>Location<br/>
                                <a href={googleMaps_link} target="_blank" rel="noopener noreferrer">{location}</a>
                            </li>
                        </ul>
                    </address>
                    <FeedbackForm/>
                </div>
            </main>
        </div>
    )
}

export default Contacts;
