import React from 'react';
import GlitchEffect from "../../components/glitch-effect/glitch-effect";
import TypedJS from "../../components/typed-js/typed-js";

function Main() {
    return (
        <header>
            <GlitchEffect glitchArticle={"I'm Volodymyr"}/>
            <TypedJS typedText={["JavaScript Developer.", "Programing it's my choice.", "Based in Lviv.", "=)"]}/>
        </header>
    )
}

export default Main;
