import React from 'react';
import './App.scss';
import Navigation from "./layouts/Navigation/Navigation";
import Footer from "./layouts/Footer/Footer";

function App() {
    return (
        <div className="app" role="application">
            <Navigation/>
            <Footer/>
        </div>
    );
}

export default App;
