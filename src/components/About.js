import * as React from "react";
import styled from "styled-components";

const StyledH2 = styled.h2`
display: flex;
align-items: center;
justify-content: center;
`

class About extends React.Component {
    render() {
      return (
        <>
          <main className="content" id="about-content">
            <StyledH2>Our Story</StyledH2>
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
  
export default About  