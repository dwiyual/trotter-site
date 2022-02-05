import { Button } from "reactstrap";
import * as React from "react";
import styled from "styled-components";
import * as Yup from "yup";

const FormSchema = Yup.object().shape({
  firstName: Yup
      .string()
      .require("Must have a first name."),
  lastName: Yup
      .string()
      .required("Must have a last name.")
})

const FormWrapper = styled.form`
display: block;
height: 20rem;
margin: 1rem;
`
class Application extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
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
          this.setState({...this.state,[Event.target.name]: ""});
        }
  render() {
    return (
      <>
      <h2>Apply Today</h2>
        <FormWrapper>
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
              <label >
                Email
                  <input onChange={this.handleChange} typeof="email" name = " email" value = {this.state.email}/>
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
        </FormWrapper>
        <Button onClick={this.handleSubmit} color="primary">Submit</Button>
      </>
    );
  }
}

export default Application