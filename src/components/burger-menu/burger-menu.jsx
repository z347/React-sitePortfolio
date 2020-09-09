import React, {Component} from "react";
import "./burger-menu.scss";

class BurgerMenu extends Component {
    constructor(props) {
        super(props);
        this.state = { addClass: false };
    }

    handleToggle = () => {
        this.setState({ addClass: !this.state.addClass });
    };

    render() {
        let divClasses = ["wrapper-hamburger"];
        let buttonClasses = ["menu-icon"];
        if (this.state.addClass) {
            buttonClasses.push("menu-icon-active");
            divClasses.push("wrapper-hamburger-active");
        }

        return (
            <div className={divClasses.join(" ")} onClick={this.handleToggle}>
                <button aria-label="Open" className={buttonClasses.join(" ")}/>
            </div>
        );
    }
}

export default BurgerMenu;
