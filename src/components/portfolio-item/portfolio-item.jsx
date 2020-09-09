import React, {Component} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown, faChevronUp} from "@fortawesome/free-solid-svg-icons";
import "./portfolio-item.scss";

class PortfolioItem extends Component {
    constructor(props) {
        super(props);
        this.state = { isHiden: true }
    }

    handleToggle = () => {
        this.setState({ isHiden: !this.state.isHiden });
    };

    render() {
        let ulClasses = ["description"];
        let projectClasses = ["project"];
        if (this.state.isHiden) {
            ulClasses.push("hide");
        } else {
            projectClasses.push("active");
        }
        const { title, link, githubLink, technology } = this.props.element;

        return (
            <div>
                <div className={projectClasses.join(" ")}>
                    <span>{this.props.index + 1 + '.'}</span>
                    <h5 role="article">{title}</h5>
                    {this.state.isHiden
                        ? <FontAwesomeIcon icon={faChevronDown} size="1x" onClick={this.handleToggle}/>
                        : <FontAwesomeIcon icon={faChevronUp} size="1x" onClick={this.handleToggle}/>
                    }
                </div>
                <ul className={ulClasses.join(" ")}>
                    <li>
                        <span>UI version:&#8195;</span>
                        <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
                    </li>
                    <li>
                        <span>GitHub:&#8195;</span>
                        <a href={githubLink} target="_blank" rel="noopener noreferrer">{githubLink}</a>
                    </li>
                    <li>
                        <span>Technology:&#8195;</span>
                        <p role="note">{technology.join(" / ")}</p>
                    </li>
                </ul>
            </div>
        )
    }
}

export default PortfolioItem;
