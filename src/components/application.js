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
    this.state = {
      firstName: "",
      lastName: "",
      adress: "",
      birthDate: "",
      phoneNumber: ""
    };
  }
      handleChange = Event => {
        this.setState({firstName: Event.target.value})
        console.log(this.state.firstName)
      }
  render() {
    return (
      <>
        <FormWrapper>
            <form>
              <label>
                First Name
                <input onChange={this.handleChange} type="text" name="firstName" />
                Last Name
                <input type="text" name="lastName"  />
              </label>
              <br/>
              <label>
                Adress
                <input type="text" name="adress" />
              </label>
              <br/>
              <label>
                Date of Birth
                <input type="date" name="birthDate"
                 />
              </label>
              <br/>
              <label>
                Phone Number
                <input type="text" name="phoneNumber" />
              </label>
            </form>
        </FormWrapper>
        <Button color="primary">Submit</Button>
      </>
    );
  }
}

export default Application