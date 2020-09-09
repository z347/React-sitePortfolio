import React from 'react';
import GlitchEffect from "../../components/glitch-effect/glitch-effect";
import Reference from "../../components/reference/reference";
import Mouse from "../../components/mouse/mouse";
import PortfolioItem from "../../components/portfolio-item/portfolio-item";
import MyProjects from "../../constants/portfolio-projects";
import './Portfolio.scss';

function Portfolio() {
    return (
        <div className="container">
            <header>
                <GlitchEffect glitchArticle={"Portfolio"}/>
                <Reference activeLink={"portfolio"}/>
                <Mouse/>
            </header>
            <main id="content" role="main">
                <div>
                    {MyProjects.map((element, index) => {
                        return (
                            <PortfolioItem
                                element={element}
                                index={index}
                                key={index}
                            />
                        )
                    })}
                </div>
            </main>
        </div>
    )
}

export default Portfolio;
