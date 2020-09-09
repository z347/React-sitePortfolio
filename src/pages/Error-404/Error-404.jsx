import React from 'react';
import GlitchEffect from "../../components/glitch-effect/glitch-effect";
import TypedJS from "../../components/typed-js/typed-js";

function Error404() {
    return (
        <header>
            <GlitchEffect glitchArticle={"Error 404"}/>
            <TypedJS typedText={["Something went wrong.", "Page not found."]}/>
        </header>
    )
}

export default Error404;
