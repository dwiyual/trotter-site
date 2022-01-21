import React from "react";
import { Route, Link } from "react-router";
import { Home } from "./Home";



export class Nav extends
    React.Component {
    render() {
        return (
            <nav id="nav" className="nav">
                <Link to="/">Home</Link>
                <Link to="/about_us">About</Link>
                <Link to="/services">Services</Link>
                <Link to="/application">Application</Link>

                <Route exact path="/" component={Home} />
          
            </nav>
        );
    }
}
