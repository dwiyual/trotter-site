import React from "react";
import "./index.css";
import {  Link, Route } from 'react-router-dom';
import {Carousel} from "reactstrap";

export class Nav extends
    React.Component {
    render() {
        return (
                <nav id="nav" className="nav">
                    <Link to="/">Home</Link>
                    <Link to= "/about_us">About</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/application">Application</Link>

                    <Route exact path="/" component={Home} />
                    <Route path="/about_us" component={About} />
                    <Route path="/services" component={Services} />
                    <Route path="/applicaton" Component={Application} />
                </nav>
        );
    }
}

export class Title extends
    React.Component {
    render() {
        return (
            <h1 id="Title" className="title_name" text="Trotter Floor Cleaning">
                Trotter Floor Cleaning</h1>
        );
    }
}

export class Home extends
    React.Component {
    render() {
        return (
            <>
                <Nav></Nav>
                <Title></Title>
            </>
        );
    }
}


export class About extends
    React.Component {
    render() {
        return (
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
    render() {
        return (
            <><>
            <Carousel></Carousel>
            </></>
        );
    }
}

export class Application extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    handleChange = event => {
        this.setState({ ...this.state, [event.target.name]: event.target.value })
    }

    handleSubimit = event => {
        event.preventDefault();
        console.log(this.state);
    }
    render() {
        return (
            <div>
                <form
                    onSubmit={event => this.handleSubimit(event)}>
                    <label>
                        First Name:
                        <input type="text"
                            name="firstname"
                            onChange={event => this.handleChange(event)} />

                    </label>
                    <label>
                        Last Name:
                        <input type="text"
                            name="lastname"
                            onChange={event => this.handleChange(event)} />
                    </label>
                    <label>
                        address
                        <input type="text"
                            name="address"
                            onChange={event => this.handleChange(event)} />
                    </label>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}
