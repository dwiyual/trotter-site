import { Button } from "reactstrap";
import * as React from "react";
import styled from "styled-components";

const FormWrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
`
class Application extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <>
        <FormWrapper>
            <form>
              <label>
                First Name
                <input type="text" />
                Last Name
                <input type="text" />
              </label>
              <label>
                Adress
                <input type="text" />
              </label>
              <label>
                Date of Birth
                <input type="date" />
              </label>
              <label>
                Phone Number
                <input type="text" />
              </label>
            </form>
        </FormWrapper>
        <Button color="primary">Submit</Button>
      </>
    );
  }
}

export default Application