import { Button } from "reactstrap";
import * as React from "react";
import styled from "styled-components";

const FormWrapper = styled.div`
display: flex;
justify-content: space-around
align-items: space-around;
flex-direction: column;
height: 20rem;
margin: 1%;
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
      
      this.setState({ 
      firstName: "",
      lastName: "",
      adress: "",
      birthDate: "",
      phoneNumber: ""});
        }
  render() {
    return (
      <>
      <h2>Apply Today</h2>
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
              <label>
              Date of Birth
                <input onChange={this.handleChange} type="date" name="birthDate" value={this.state.birthDate}/>
              </label>
              <br/>
              <label>
                Phone Number
                <input onChange={this.handleChange} type="tel" name="phoneNumber" value={this.state.phoneNumber} />
              </label>
            </form>
        </FormWrapper>
        <Button onClick={this.handleSubmit} color="primary">Submit</Button>
      </>
    );
  }
}

export default Application