import * as React from "react";
import { Button } from "reactstrap";
import styled from "styled-components";
import { useState, useEffect } from "react";
import * as Yup from "yup";

const formSchema = Yup.object().shape({
  firstName: Yup.string().required("Must have a first name!"),
  lastName: Yup.string().required("Must have a last name!"),
  email: Yup.string().email("must be valid email!"),
  adress: Yup.string(),
  birthDate: Yup.date().required("birth date required!"),
  phoneNumber: Yup.number().min(10, "Phone number is too long!")
});

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

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    adress: '',
    birthDate: '',
    phoneNumber: ''

  });

  const [disabled, setDisabled] = useState(true);



  const handleChange = (e) => {
    Yup
      .reach(formSchema, e.target.name)
      //we can then run validate using the value
      .validate(e.target.value)
      // if the validation is successful, we can clear the error message
      .then(valid => {
        setErrors({
          ...errors, [e.target.name]: ""
        });
      })
      // if the validation is unsuccessful, we can set the error message to the message
      // returned from yup (that we created in our schema)
      .catch(err => {
        setErrors({
          ...errors, [e.target.name]: err.errors[0]
        });
      });
      setForm({...form, [e.target.name]: e.target.value});
    console.log(form);
  }


  const handleSubmit = (e) => {
    e.preventDefualt();
    alert("Your application has been sent!");
    setForm({
      firstName: '',
      lastName: '',
      email: '',
      adress: '',
      birthDate: '',
      phoneNumber: ''
    });
  }

  useEffect(() => {
    formSchema.isValid(form).then(valid => {
      setDisabled(!valid);
    });
  }, [form]);

  return (
    <>
      <h2>Apply Today</h2>
      <FormWrapper>
        <label>
          First Name
          <input onChange={handleChange} type="text" name="firstName" value={form.firstName} />
          </label>
          <label>
          Last Name
          <input onChange={handleChange} type="text" name="lastName" value={form.lastName} />
        </label>
        { errors.firstName.length > 0 && <p className="error">{errors.firstName}</p> }
        { errors.lastName.length > 0 && <p className="error">{errors.lastName}</p> }
        <br />
        <label>
          Adress
          <input onChange={handleChange} type="text" name="adress" value={form.adress} />
        </label>
        { errors.adress.length > 0 && <p className="error">{errors.adress}</p> }
        <label >
          Email
          <input onChange={handleChange} type="email" name="email" value={form.email} />
        </label>
        { errors.email.length > 0 && <p className="error">{errors.email}</p> }
        <label>
          Date of Birth
          <input onChange={handleChange} type="date" name="birthDate" value={form.birthDate} />
        </label>
        <br />
        <label>
          Phone Number
          <input onChange={handleChange} type="tel" name="phoneNumber" value={form.phoneNumber} />
        </label>
        <Button disabled={disabled} onSubmit={handleSubmit} >Submit</Button>
      </FormWrapper>
    </>);
}



export default Application