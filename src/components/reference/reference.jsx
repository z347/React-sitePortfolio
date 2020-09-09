import React from "react";
import {Link} from "react-router-dom";
import "./reference.scss";

function ucFirst(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
}

function Reference(props) {
    return (
        <div>
            <Link to='/' role="link">Home</Link>
            <span>&nbsp;/&nbsp;</span>
            <Link to={props.activeLink} role="link">{ucFirst(props.activeLink)}</Link>
        </div>
    );
}

export default Reference;
