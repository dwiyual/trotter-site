import { Button } from "reactstrap";
import * as React from "react";
import styled from "styled-components";
import { useState } from "react";
//import * as Yup from "yup";

//const FormSchema = Yup.object().shape({
//firstName: Yup
//  .string()
//  .require("Must have a first name."),
// lastName: Yup
//  .string()
//  .required("Must have a last name.")
//})

const FormWrapper = styled.form`
display: block;
height: 20rem;
margin: 1rem;
`
function Application() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    adress: '',
    birthDate: '',
    phoneNumber: ''
  });



  const handleChange = event => {
    setForm({ ...form, [event.target.name]: event.target.value })
    console.log(form)
  }

  const handleSubmit = event => {
    event.preventDefault();
    alert("Your application has been sent!");
    setForm({ ...form, [event.target.name]: "" });
  }
  return (
    <>
      <h2>Apply Today</h2>
      <FormWrapper>
        <label>
          First Name
          <input onChange={handleChange} type="text" name="firstName" value={form.firstName} />
          Last Name
          <input onChange={handleChange} type="text" name="lastName" value={form.lastName} />
        </label>
        <br />
        <label>
          Adress
          <input onChange={handleChange} type="text" name="adress" value={form.adress} />
        </label>
        <label >
          Email
          <input onChange={handleChange} type="email" name=" email" value={form.email} />
        </label>
        <label>
          Date of Birth
          <input onChange={handleChange} type="date" name="birthDate" value={form.birthDate} />
        </label>
        <br />
        <label>
          Phone Number
          <input onChange={handleChange} type="tel" name="phoneNumber" value={form.phoneNumber} />
        </label>
        <Button onClick={handleSubmit}>Submit</Button>
      </FormWrapper>
    </>
   
  );
}


export default Application