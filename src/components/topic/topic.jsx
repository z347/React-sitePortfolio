import React from "react";
import "./topic.scss";

function Topic(props) {
    return (
        <div className="topic">
            <h3 role="note">{props.topic}</h3>
        </div>
    );
}

export default Topic;
