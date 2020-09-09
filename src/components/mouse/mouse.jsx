import React, {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMouse} from "@fortawesome/free-solid-svg-icons";
import "./mouse.scss";

let timer;

class Mouse extends Component {
    constructor(props) {
        super(props);
        this.state = { isScrolling: false };
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll = () => {
        document.documentElement.scrollTop !== 0
            ? this.setState({ isScrolling: true })
            : this.setState({ isScrolling: false })
    };

    handleClick = () => {
        this.liquidScrollToDown()
    };

    liquidScrollToDown = () => {
        let content = document.getElementById('content');
        let contentContentHeight = content.getBoundingClientRect().height;
        let currentContentPosition = content.getBoundingClientRect().top;
        let userScreenHeight = document.documentElement.clientHeight;
        let userCurrentPosition = window.pageYOffset;
        let documentHeight = document.documentElement.scrollHeight;

        if (contentContentHeight > userScreenHeight) {
            if (currentContentPosition > 200) {
                window.scrollTo(0, userCurrentPosition + 30);
                timer = setTimeout(this.liquidScrollToDown, 15);
            } else {
                clearTimeout(timer);
            }
        } else {
            if (userScreenHeight + userCurrentPosition < documentHeight) {
                window.scrollBy(0, 30);
                timer = setTimeout(this.liquidScrollToDown, 15);
            } else {
                clearTimeout(timer);
            }
        }
    };

    render() {
        let linkClasses = ["mouse"];
        if (this.state.isScrolling) {
            linkClasses.push("hiding")
        }

        return (
            <span role="button" aria-label="Scroll" className={linkClasses.join(" ")} onClick={this.handleClick}>
                <FontAwesomeIcon icon={faMouse} size="1x"/>
            </span>
        );
    }
}

export default Mouse;
