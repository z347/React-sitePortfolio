import React from 'react';
import Typed from "react-typed";
import "./typed-js.scss";

function TypedJS(props) {
    return (
        <Typed className="typed-js"
               strings={props.typedText}
               typeSpeed={40}
               backSpeed={45}
               loop={true}
        />
    );
}

export default TypedJS;
