import React from 'react';
import GlitchEffect from "../../components/glitch-effect/glitch-effect";
import Reference from "../../components/reference/reference"
import Mouse from "../../components/mouse/mouse";
import Topic from "../../components/topic/topic";
import {name, age, job, residence, citizenship, email, ResumePDF} from "../../constants/personal-info";
import './Resume.scss';

function Resume() {
    return (
        <div className="container">
            <header>
                <GlitchEffect glitchArticle={"Resume"}/>
                <Reference activeLink={"resume"}/>
                <Mouse/>
            </header>
            <main id="content" role="main">
                <div>
                    <Topic topic={"About me"}/>
                    <img src="./static/img/avatar.png" alt="Me" className="avatar"/>
                    <p>
                        A little over a year ago, I decided to change my profession. I graduated from a major
                        programming course at a small IT company, where I was introduced to basic language capabilities
                        and advanced technologies. After completing the courses, I tried to improve and systematize my
                        knowledge. I have several training projects where I practiced my skills. I have good
                        communication skill and I'm a real team player.
                    </p>
                    <address className="resume">
                        <ul>
                            <li>Name:<strong>&nbsp;{name}</strong></li>
                            <li>Age:<strong>&nbsp;{age}</strong></li>
                            <li>Job:<strong>&nbsp;{job}</strong></li>
                            <li>Citizenship:<strong>&nbsp;{citizenship}</strong></li>
                            <li>Residence:<strong>&nbsp;{residence}</strong></li>
                            <li>Email:<strong>&nbsp;{email}</strong></li>
                        </ul>
                    </address>
                    <a href={ResumePDF} title="PDF version of my resume" target="_blank" rel="noopener noreferrer"
                       className='cv'>
                        CV
                    </a>
                </div>
            </main>
        </div>
    )
}

export default Resume;
