import * as React from "react";
import { Routes, Route, Link } from "react-router-dom"
import './App.css';

export function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
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
          <h1>Welcome to Trotter Floor Cleaning</h1>
          <nav>
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
      <main>
        <h1>We Clean many types of comercial buildings.</h1>
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
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </main>
    )
  }



}
