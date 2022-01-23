import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import Application from "./components/application";

const StyledNav = styled.nav`
color: whitesmoke;
display: flex;
justify-content: space-between;
align-items: center;
margin: 5%;
`

const StyledDiv = styled.div`
width: 50vw;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(#116772,#39315B);
  color: #F9F9F9;
  margin: auto;
  padding: 2%;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, .5),
              -10px -10px 100px rgb(255, 255, 255);
  border-radius: 5%;
  font-size: 1.5rem;
`

export function App() {
  return (
    <>
      <StyledNav>
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
        <Link to="apply">Apply</Link>
      </StyledNav>
      <h1>Welcome to Trotter Floor Cleaning!</h1>
      <StyledDiv>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route  path="about" element={<About />} />
        <Route  path ="apply" element={<Application/>}/>
      </Routes>
      </StyledDiv>
      </>
  );
}

export class Home extends
  React.Component {
  render() {
    return (
      <>
        <main>
          <h1>Hello</h1>
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

