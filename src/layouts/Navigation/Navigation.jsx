import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";
import BurgerMenu from "../../components/burger-menu/burger-menu";
import Resume from "../../pages/Resume/Resume";
import Portfolio from "../../pages/Portfolio/Portfolio";
import Contacts from "../../pages/Contacts/Contacts";
import Main from "../../pages/Main/Main";
import Error404 from "../../pages/Error-404/Error-404";
import "./Navigation.scss";

let timer;

class Navigation extends Component {
  handleClick = event => {
    if (event.target.href !== window.location.href) {
      window.scroll(0, 0);
    } else {
      this.liquidScrollToTop();
    }
  };

  liquidScrollToTop = () => {
    if (window.pageYOffset > 0) {
      window.scrollTo(0, window.pageYOffset - 30);
      timer = setTimeout(this.liquidScrollToTop, 10);
    } else {
      clearTimeout(timer);
      window.scroll(0, 0);
    }
  };

  render() {
    return (
      <Router>
        <nav id="nav" role="navigation">
          <BurgerMenu />
          <ul>
            <li>
              <NavLink
                exact
                to="/resume"
                onClick={this.handleClick}
                role="link"
              >
                Resume
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/portfolio"
                onClick={this.handleClick}
                role="link"
              >
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/contacts"
                className="contacts"
                onClick={this.handleClick}
                role="link"
              >
                Contacts
              </NavLink>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contacts" component={Contacts} />
          <Route component={Error404} />
        </Switch>
      </Router>
    );
  }
}

export default Navigation;
