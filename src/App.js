import * as React from "react";
import { Routes, Route, Link } from "react-router-dom"
import "./App.css";
export function App() {
  return (
    <div className="App">
      <h1>Welcome to Trotter Floor Cleaning!</h1>
      <Link to = "/">Home</Link>
      <Link to = "about">About</Link>
      <Link to = "apply">Apply</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path ="apply" element={<Application/>}/>
      </Routes>
    </div>
  );
}

export class Home extends
  React.Component {
  render() {
    return (
      <>
        <main>
          <h1>Hello</h1>
          <nav className="link">
            <Link to="/about">About</Link>
          </nav>
        </main>
      </>
    );
  }
}

export class About extends React.Component {
  render() {
    return (
      <>
        <main className="content" id="about-content">
          <nav className="link">
            <Link to="/">Home</Link>
            <Link to="apply">Apply</Link>
          </nav>
          <h1>Our Story</h1>
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
        </main>
      </>
    )
  }
}

export class Application extends React.Component {
  render(){
    return(
      <main>
      <nav>
        <Link to = "/">Home</Link>
        <Link to = "about">About</Link>

      </nav>
      <h1>Apply Today!</h1>
      </main>
    );
  }
}
