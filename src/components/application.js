import { Button } from "reactstrap";
import * as React from "react";
import styled from "styled-components";

const FormWrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
height: 20rem;
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
        this.setState({...this.state, [Event.target.name]: Event.target.value})
        console.log(this.state)
      }
      
        handleSubmit = Event => {
          Event.preventDefault();
          alert("Your application has been sent!");
        }
  render() {
    return (
      <>
        <FormWrapper>
            <form>
              <label>
                First Name
                <input onChange={this.handleChange} type="text" name="firstName" value={this.state.firstName} />
                Last Name
                <input onChange={this.handleChange} type="text" name="lastName" value={this.state.lastName} />
              </label>
              <br/>
              <label>
                Adress
                <input onChange={this.handleChange} type="text" name="adress" value={this.state.adress} />
              </label>
              <br/>
              <label>
                Date of Birth
                <input onChange={this.handleChange} type="date" name="birthDate" value={this.state.birthDate}
                 />
              </label>
              <br/>
              <label>
                Phone Number
                <input onChange={this.handleChange} type="text" name="phoneNumber" value={this.state.phoneNumber} />
              </label>
            </form>
        </FormWrapper>
        <Button onClick={this.handleSubmit} color="primary">Submit</Button>
      </>
    );
  }
}

export default Application