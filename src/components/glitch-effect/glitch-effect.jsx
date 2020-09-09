import React, {Component} from "react";
import "./glitch-effect.scss";

class GlitchEffect extends Component {
    constructor(props) {
        super(props);
        this.state = { isScrolling: false }
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll = () => {
        const nav = document.getElementById('nav');
        const article = document.getElementById('glitch-effect');
        article.getBoundingClientRect().top <= nav.getBoundingClientRect().top + nav.getBoundingClientRect().height
            ? this.setState({ isScrolling: true })
            : this.setState({ isScrolling: false })
    };

    render() {
        let articleClasses = ["glitch-effect"];
        if (this.state.isScrolling) {
            articleClasses.push("hiding")
        }

        return (
            <h1 id="glitch-effect" role="banner" data-text={this.props.glitchArticle} className={articleClasses.join(" ")}>
                {this.props.glitchArticle}
            </h1>
        )
    }
}

export default GlitchEffect;
