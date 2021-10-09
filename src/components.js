import React from "react";
import "./index.css";
import {BrowserRouter, Link,Route} from 'react-router-dom';

export class Nav extends
    React.Component {
    render() {
        return (
            <nav id ="nav" className="nav">
            <BrowserRouter>
                <Link to="/home">Home</Link>
                <Link to="/about_us">About</Link>
                <Link to="/services">Services</Link>
                <Route path="/home" component="Home"></Route>
                <Route path="/about_us" component={About}></Route>
                <Route path="/Services" component={Services}></Route>
            </BrowserRouter>
            </nav>

        );
    }
}

                export class Title extends
                React.Component  {
                    render(){
                    return(
                    <h1 id="Title" className="title_name" text="Trotter Floor Cleaning">
                    Trotter Floor Cleaning</h1>
                        );
                    }
                }
  

                export class About extends
                React.Component {
                render(){
                return(
                <div className="content" id="about_us">
                    <article>
                        <h2 className="title">Our Story</h2>
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

export class Services extends React.Component {
    render(){
        return(
            <h1>hey</h1>
        );
    }
}