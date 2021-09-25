import React from "react";
import { render } from "react-dom";

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
