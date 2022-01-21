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
      <h1>Welcome to Trotter Floor Cleaning</h1>
    );
  }
}

export class About extends React.Component {
  render() {
    return (
      <h1>We Clean many types of comercial buildings.</h1>
    )
  }



}
