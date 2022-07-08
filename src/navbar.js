import React from "react";
import trollpic from "./trollimg.png";

const Navapp = () => {
    return (
        <nav className="nav-bar">



            <img src={trollpic} alt="troll-logo" className="logo-section" />


            <h3 className="navbar-text-left">Dank memes 😂</h3>
            <h2 className="navbar-text-right">
               A meme-generator app
            </h2>

        </nav>


    )
}
export default Navapp;