import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faGithubSquare,
    faFacebookSquare
} from "@fortawesome/free-brands-svg-icons";
import {Github, Linkedin, Facebook} from "../../constants/personal-info";
import "./Footer.scss";

function Footer() {
    return (
        <footer role="contentinfo">
            <span>&copy; 2020. All rights reserved.</span>
            <ul>
                <li>
                    <a href={Facebook} title="Facebook" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebookSquare} size="lg"/>
                    </a>
                </li>
                <li>
                    <a href={Linkedin} title="Linkedin" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} size="lg"/>
                    </a>
                </li>
                <li>
                    <a href={Github} title="Github" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithubSquare} size="lg"/>
                    </a>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;
