import React from "react";
import "./index.css";

export class Nav extends 
React.Component {
    render() {
    return (
        <nav id="nav" className="navbar">
            <a href="www.google.com">Home</a>
            <a href="www.google.com">About</a>
            <a href="www.google.com">Services</a>
            <a href="www.google.com">Our Work</a>
            <a href="www.google.com">Contact</a>
        </nav>
    );
  }
}

export class Title extends
React.Component  {
    render(){
    return(
        <h1 id = "Title" className = "title_name" text = "Trotter Floor Cleaning">
        Trotter Floor Cleaning</h1>
    );
  }
}

export class About extends
React.Component{
    render(){
        return(
            <div className="content">
            <article>
                <h2 className="aboutUs" id="about_us">Our Story</h2>
                <p>Trotter Floor Cleaning Service is a small, family owned bussiness out of Lincoln, NE. We have been
                    doing buisness
                    for over 50 years. Started in 1964 by Merlyn Trotter, originally doing only floors, we have since
                    expanded
                    our company to a full service cleaning company. We provide impeccable cleaning from experience
                    and knowledgable personal. We can clean many different types of projects from residental to
                    commercial
                    buildings, we have the equipment, experience and knowledge to handle almost any job. All at a fair
                    and
                    competetive
                    rate. Just contact us and we will be happy to give a quote.
                </p>
            </article>
        </div>
        );
    }
}