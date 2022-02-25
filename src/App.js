import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import Application from "./components/application";
import About from "./components/About";


export const StyledNav = styled.nav`, 
color: #116772;
background-color: #116772;
display: flex;
justify-content: space-around;
align-items: center;
margin: .5%;
padding: .5%;
height: 10%;
width: 100vw;
box-sizing: border-box;
  :hover {
    color: whitesmoke;
  }

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

const StyledHeader = styled.h1`
display: flex;
align-items: center;
justify-content: center;
color: #116772;
`
const StyledA = styled.li`
color: whitesmoke;
text-decoration:none;
`


export function App() {
  return (
    <>
      <StyledNav>
        <Link to="/">
          <StyledA>Home</StyledA>
        </Link>
        <Link to="about">
            <StyledA>About</StyledA>
          </Link>
        <Link to="apply">
            <StyledA>Apply</StyledA>
        </Link>
      </StyledNav>
      <StyledHeader>Welcome to Trotter Floor Cleaning!</StyledHeader>
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
