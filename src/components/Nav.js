import * as React from "react";




export class Nav extends
    React.Component {
    render() {
        return (
            <nav id="nav" className="nav">
               <a href="#">Home</a>
               <a href="#">About Us</a>
               <a href="#"> Contact </a>
               <a href="#"> Apply </a>
            </nav>
        );
    }
}
